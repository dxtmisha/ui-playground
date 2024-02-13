import { getElement } from '../../functions/element'

import { WindowClient } from './WindowClient'

import { WindowElement } from './WindowElement'

import { WindowCoordinates } from './WindowCoordinates'

import { type ConstrStyles } from '../../types/constructor'
import { type WindowProps } from './props'

/**
 * A class for working with position.<br>
 * Класс для работы с позицией.
 */
export class WindowPosition {
  protected x: number = 0
  protected y: number = 0

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly client: WindowClient,
    protected readonly element: WindowElement,
    protected readonly coordinates: WindowCoordinates
  ) {
  }

  /**
   * Checks if the alignment type is above the element.<br>
   * Проверяет, является ли тип выравнивания над элементом.
   */
  isOver (): boolean {
    return this.props?.axis === 'on'
  }

  /**
   * Returns the X position.<br>
   * Возвращает позицию X.
   */
  getX (): number {
    return this.x
  }

  /**
   * Returns the Y position.<br>
   * Возвращает позицию Y.
   */
  getY (): number {
    return this.y
  }

  /**
   * Returns the X position for styles.<br>
   * Возвращает позицию X для стилей.
   */
  getStyleX (): string | null {
    return `${this.x}px`
  }

  /**
   * Returns the Y position for styles.<br>
   * Возвращает позицию Y для стилей.
   */
  getStyleY (): string | null {
    return `${this.y}px`
  }

  /**
   * Returns the position for displaying the element.<br>
   * Возвращает позицию для отображения элемента.
   */
  getStyles (): ConstrStyles {
    return {
      '--??-sys-inset-x': this.getStyleX(),
      '--??-sys-inset-y': this.getStyleY()
    }
  }

  /**
   * Update of the element’s position coordinates.<br>
   * Обновление координаты положения элемента.
   */
  update (): boolean {
    if (this.coordinates.update()) {
      this.setX()
      this.setY()

      return true
    }

    return false
  }

  /**
   * Updates the scroll position if an element is selected.<br>
   * Обновляет место скрола, если выбран элемент.
   */
  updateScroll (): void {
    const elementBodyContext = this.element.getBodyContext()

    if (
      this.isOver() &&
      this.props.overElement &&
      elementBodyContext &&
      elementBodyContext.scrollHeight > elementBodyContext.offsetHeight
    ) {
      const rect = getElement(this.props.overElement)?.getBoundingClientRect()
      const rectBody = this.element.getBody()?.getBoundingClientRect()
      const rectBodyContext = elementBodyContext?.getBoundingClientRect()
      const rectControl = this.element.getControl()?.getBoundingClientRect()

      if (
        elementBodyContext &&
        rect &&
        rectBody &&
        rectBodyContext
      ) {
        const center = rect.height / 2
        const shift = rect.top - rectBodyContext.top

        if (
          rectControl &&
          this.coordinates.getMaxHeight() === rectBody.height
        ) {
          if (rectControl.top + center < rectBody.top) {
            elementBodyContext.scrollTop += shift
            return
          }

          if (rectControl.bottom - center > rectBody.bottom) {
            elementBodyContext.scrollTop += shift - rectBodyContext.height + rect.height
            return
          }

          elementBodyContext.scrollTop += shift - (rectControl.top - rectBodyContext.top) - (rectControl.height / 2) + center
          return
        }

        elementBodyContext.scrollTop += shift - (rectBodyContext.height / 2) + center
      }
    }
  }

  /**
   * Returns the axis alignment values.<br>
   * Возвращает значения оси выравнивания.
   */
  protected getAxis (): WindowProps['axis'] {
    return this.isOver() ? 'y' : (this.props?.axis ?? 'y')
  }

  /**
   * Returns the margins from the control element.<br>
   * Возвращает отступы от элемента управления.
   * @param axis the axis of alignment of the element /<br>ось выравнивания элемента
   */
  protected getIndent (axis: string): number {
    return this.getAxis() === axis ? (this.props.indent ?? 4) : 0
  }

  /**
   * Calculation of the position for window alignment.<br>
   * Вычисление места положения для выравнивания окна.
   * @param rectTop high control coordinates /<br>высокие координаты контрола
   * @param rectBottom lower control coordinates /<br>нижние координаты контрола
   */
  protected getOverHeight (
    rectTop: number,
    rectBottom: number
  ) {
    const over = (rectBottom - rectTop) / 2

    if (this.props.overElement) {
      const rect = getElement(this.props.overElement)?.getBoundingClientRect()
      const rectBody = this.element.getBody()?.getBoundingClientRect()

      if (rect && rectBody) {
        const top = rect.top - rectBody.top
        const height = rect.height / 2

        return rectBottom - top - height - over
      }
    }

    const height = this.coordinates.getHeight() / 2

    return rectBottom - over - height
  }

  /**
   * Changes in position along the X coordinate.<br>
   * Изменения положения по координате X.
   */
  protected setX (): this {
    const element = this.element.getMain()

    if (element) {
      const indent = this.getIndent('x')
      const rectRight = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + indent
      const rectLeft = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - indent
      const argumentValues: number[] = []

      if (this.getAxis() === 'x') {
        argumentValues.push(rectRight, rectLeft)
      } else {
        argumentValues.push(rectLeft, rectRight)
      }

      this.x = this.calculationInner(
        argumentValues[0],
        argumentValues[1],
        element.offsetWidth,
        window.innerWidth,
        this.coordinates.getWidth()
      )
    }

    return this
  }

  /**
   * Changes in position along the Y coordinate.<br>
   * Изменения положения по координате Y.
   */
  protected setY (): this {
    const element = this.element.getMain()

    if (element) {
      const indent = this.getIndent('y')
      const rectTop = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - indent
      const rectBottom = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + indent
      const argumentValues: number[] = []

      if (this.isOver()) {
        this.y = this.calculationOver(
          this.getOverHeight(rectTop, rectBottom),
          rectTop,
          rectBottom,
          element.offsetHeight,
          window.innerHeight
        )

        return this
      } else if (this.getAxis() !== 'x') {
        argumentValues.push(rectBottom, rectTop)
      } else {
        argumentValues.push(rectTop, rectBottom)
      }

      this.y = this.calculationInner(
        argumentValues[0],
        argumentValues[1],
        element.offsetHeight,
        window.innerHeight,
        this.coordinates.getHeight()
      )
    }

    return this
  }

  /**
   * Calculation of the element’s position.<br>
   * Вычисление положения элемента.
   * @param inValue initial values /<br>начальные значения
   * @param outValue final values /<br>конечные значения
   * @param length length of the object /<br>длина объекта
   * @param innerLength length of the indentation /<br>длина отступа
   * @param maxSize maximum length /<br>максимальная длина
   */
  protected calculationInner (
    inValue: number,
    outValue: number,
    length: number,
    innerLength: number,
    maxSize: number
  ): number {
    const padding = this.coordinates.getPadding()

    if (inValue + length <= innerLength - padding) {
      return inValue
    }

    if (outValue - length > padding) {
      return outValue - length
    }

    return (innerLength / 2) - (maxSize / 2)
  }

  /**
   * Calculation of the element’s position.<br>
   * Вычисление положения над элемента.
   * @param value initial values /<br>начальные значения
   * @param top high control coordinates /<br>высокие координаты контрола
   * @param bottom lower control coordinates /<br>нижние координаты контрола
   * @param length length of the object /<br>длина объекта
   * @param innerLength length of the indentation /<br>длина отступа
   */
  protected calculationOver (
    value: number,
    top: number,
    bottom: number,
    length: number,
    innerLength: number
  ): number {
    const padding = this.coordinates.getPadding()

    if (bottom < padding) {
      return bottom
    }

    if (top > innerLength - padding) {
      const data = top - length - padding

      if (data < padding) {
        return padding
      }

      return data
    }

    if (value < padding) {
      return padding
    }

    if (value + length <= innerLength - padding) {
      return value
    }

    return innerLength - length - padding
  }
}
