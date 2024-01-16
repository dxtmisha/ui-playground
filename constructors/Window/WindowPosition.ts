import { WindowClient } from './WindowClient.ts'

import { WindowElement } from './WindowElement.ts'

import { WindowCoordinates } from './WindowCoordinates.ts'

import { type ConstrStyles } from '../../types/constructor.ts'
import { type WindowProps } from './props.ts'

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
    return this.x > 0 ? `${this.x}px` : null
  }

  /**
   * Returns the Y position for styles.<br>
   * Возвращает позицию Y для стилей.
   */
  getStyleY (): string | null {
    return this.y > 0 ? `${this.y}px` : null
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
   * Returns the margins from the control element.<br>
   * Возвращает отступы от элемента управления.
   * @param axis the axis of alignment of the element /<br>ось выравнивания элемента
   */
  protected getIndent (axis: string): number {
    return this.props.axis === axis ? (this.props.indent ?? 4) : 0
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

      if (this.props.axis === 'x') {
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

      if (this.props.axis !== 'x') {
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
    if (inValue + length <= innerLength) {
      return inValue
    }

    if (outValue - length > 0) {
      return outValue - length
    }

    return (innerLength / 2) - (maxSize / 2)
  }
}
