import { toNumber } from '../../functions/number.ts'
import { getElementId } from '../../functions/element.ts'

import { ImageData } from './ImageData.ts'
import { ImageAdaptiveGroup } from './ImageAdaptiveGroup.ts'
import { ImageCalculationList } from './ImageCalculationList.ts'

import { type FunctionVoid } from '../../types/basic.ts'
import { type ConstrValue } from '../../types/constructor.ts'
import { type ImageProps } from './props.ts'
import {
  type ImageElement,
  type ImageItem,
  type ImageSize
} from './typesBasic.ts'

enum ImageAdaptiveItemType {
  x = 'x',
  y = 'y'
}

const GROUP_BASIC = 'main'

/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen.<br>
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export const MAX_BEYOND = 256

/**
 * A class for managing the adapted scaling of a specific element.<br>
 * Класс для управления адаптированным масштабированием конкретного элемента.
 */
export class ImageAdaptiveItem {
  readonly percent: ImageSize = {
    width: 0,
    height: 0
  }

  protected beyond: boolean = false
  protected visible: boolean = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param data image data /<br>данные изображения
   * @param callback callback function when updating the image scale /<br>
   * функция обратного вызова при обновлении масштаба изображения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps,
    protected readonly data: ImageData,
    protected readonly element: ConstrValue<ImageElement>,
    protected readonly callback?: FunctionVoid
  ) {
    this.reset()
  }

  /**
   * Checks if the element’s conditions are suitable for scaling.<br>
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is (): boolean {
    return Boolean(this.props?.adaptive) &&
      this.data.isImage() &&
      Boolean(
        this.element.value &&
        this.element.value.closest('body') && (
          this.getWidth() ||
          this.getHeight()
        )
      )
  }

  /**
   * Checks for compliance with the group.<br>
   * Проверяет на соответствие группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  isGroup (name: string): boolean {
    return this.getGroup() === name
  }

  /**
   * Is it available for calculation.<br>
   * Доступен ли для вычисления.
   */
  isBeyond (): boolean {
    return this.beyond
  }

  /**
   * Is the element visible.<br>
   * Виден ли элемент.
   */
  isVisible (): boolean {
    return this.visible
  }

  /**
   * Returns the name of the group.<br>
   * Возвращает название группы.
   */
  getGroup (): string {
    return this.props?.adaptiveGroup ?? GROUP_BASIC
  }

  /**
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId (): string {
    return getElementId(this.element.value)
  }

  /**
   * Returns the current element.<br>
   * Возвращает текущий элемент.
   */
  getElement (): ImageElement {
    return this.element.value
  }

  /**
   * Returns the physical width of the object.<br>
   * Возвращает физическую ширину объекта.
   */
  getWidth (): number {
    return toNumber(this.props?.objectWidth ?? 0)
  }

  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  getHeight (): number {
    return toNumber(this.props?.objectHeight ?? 0)
  }

  /**
   * Returns the axis for scaling.<br>
   * Возвращает ось для масштабирования.
   */
  getType (): ImageAdaptiveItemType | undefined {
    if (
      this.getWidth() &&
      this.percent.width > 0
    ) {
      return ImageAdaptiveItemType.x
    }

    if (
      this.getHeight() &&
      this.percent.height > 0
    ) {
      return ImageAdaptiveItemType.y
    }

    return undefined
  }

  /**
   * Calculation of the base size of the image to determine how to scale the image.<br>
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   */
  getSize (): number {
    if (
      this.element.value &&
      this.data.isImage()
    ) {
      const data = this.data.getImage() as ImageItem

      switch (this.getType()) {
        case ImageAdaptiveItemType.x:
          return data.height * (this.element.value.offsetWidth * this.percent.width / data.width)
        case ImageAdaptiveItemType.y:
          return data.width * (this.element.value.offsetHeight * this.percent.height / data.height)
      }
    }

    return 0
  }

  /**
   * Multiplier for determining the level of image scaling relative to other elements.<br>
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   */
  getFactor (): number {
    const element = this.element.value
    const size = this.getSize()
    const type = this.getType()

    if (element) {
      if (
        type === ImageAdaptiveItemType.x &&
        size > element.offsetHeight
      ) {
        return element.offsetHeight / size
      }

      if (
        type === ImageAdaptiveItemType.y &&
        size > element.offsetWidth
      ) {
        return element.offsetWidth / size
      }
    }

    return 1
  }

  /**
   * Returns values for the background-size property.<br>
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize (): string | null {
    const factorMax = ImageCalculationList.get(this.getGroup()).getFactorMax()

    switch (this.getType()) {
      case ImageAdaptiveItemType.x:
        return `${100 * this.percent.width * factorMax}% auto`
      case ImageAdaptiveItemType.y:
        return `auto ${100 * this.percent.height * factorMax}%`
    }

    return null
  }

  /**
   * Size change for calculation.<br>
   * Изменение размера для вычисления.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  setPercent (width: number, height: number): this {
    this.percent.width = width
    this.percent.height = height

    return this
  }

  /**
   * Updating the activity status of the element.<br>
   * Обновление статуса активности элемента.
   */
  update (): void {
    if (this.is()) {
      ImageAdaptiveGroup.add(this)
    } else {
      ImageAdaptiveGroup.remove(this)
    }
  }

  /**
   * Recalculate scaling for all active elements.<br>
   * Пересчитать масштабирование для всех активных элементов.
   */
  reset (): void {
    if (this.is()) {
      if (ImageAdaptiveGroup.is(this)) {
        ImageAdaptiveGroup.reset()
      } else {
        ImageAdaptiveGroup.add(this)
      }
    }
  }

  /**
   * Removal of an element from the scaling list.<br>
   * Удаление элемента из списка для масштабирования.
   */
  remove (): void {
    if (this.is()) {
      ImageAdaptiveGroup.remove(this)
    }
  }

  /**
   * Updating the visibility and activity status of the element.<br>
   * Обновление статуса видимости и активности элемента.
   */
  make (): this {
    this.beyond = false
    this.visible = false

    if (this.is()) {
      if (this.props?.adaptiveAlways) {
        this.beyond = true
        this.visible = true
      } else {
        const rect = this.element.value?.getBoundingClientRect()

        if (rect) {
          this.beyond = !(
            rect.bottom < (0 - MAX_BEYOND) ||
            rect.top > (window.innerHeight + MAX_BEYOND)
          )

          this.visible = !(
            rect.bottom < 0 ||
            rect.top > window.innerHeight
          )
        }
      }
    }

    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  makeCallback (): this {
    this.callback?.()
    return this
  }
}
