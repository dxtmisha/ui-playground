import { getElementId } from '../../../functions/element.ts'

import { ImageData } from './ImageData.ts'
import { ImageAdaptiveGroup } from './ImageAdaptiveGroup.ts'
import { ImageCalculationList } from './ImageCalculationList.ts'

import { type FunctionVoid } from '../../../types/basic.ts'
import {
  type ImageElement,
  type ImageItem,
  type ImageSize
} from '../typesBasic.ts'

enum ImageAdaptiveItemType {
  x = 'x',
  y = 'y'
}

const GROUP_BASIC = 'main'

/**
 * Value in pixels, defining the limit beyond the screen, up to which the
 * image size is still calculated.<br>
 * Значение в пикселях, определяющее предел за экраном, до которого все
 * еще вычисляется размер изображения.
 */
export const MAX_BEYOND = 256

/**
 * Class for managing the scaling of the element. Class for the entry point.<br>
 * Класс для управления масштабированием элемента. Класс для точки входа.
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
   * @param data data management object /<br>объект управления данными
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param group group name /<br>название группы
   * @param adaptive activity status /<br>статус активности
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   * @param width physical width of the object /<br>физическая ширина объекта
   * @param height physical height of the object /<br>физическая высота объекта
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly data: ImageData,
    protected readonly callback?: FunctionVoid,
    protected element?: ImageElement,
    protected group: string = GROUP_BASIC,
    protected adaptive?: boolean,
    protected adaptiveAlways: boolean = false,
    protected width: number = 0,
    protected height: number = 0
  ) {
    this.reset()
  }

  /**
   * Checks if the element’s conditions are suitable for scaling.<br>
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is (): boolean {
    return Boolean(this.adaptive) &&
      this.data.isImage() &&
      Boolean(
        this.element &&
        this.element.closest('body') && (
          this.width ||
          this.height
        )
      )
  }

  /**
   * Checks for compliance with the group.<br>
   * Проверяет на соответствие группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  isGroup (name: string): boolean {
    return this.group === name
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
   * Returns the identifier of the element.<br>
   * Возвращает идентификатор элемента.
   */
  getId (): string {
    return getElementId(this.element)
  }

  /**
   * Returns the current element.<br>
   * Возвращает текущий элемент.
   */
  getElement (): ImageElement {
    return this.element
  }

  /**
   * Returns the name of the group.<br>
   * Возвращает название группы.
   */
  getGroup (): string {
    return this.group
  }

  /**
   * Returns the physical width of the object.<br>
   * Возвращает физическую ширину объекта.
   */
  getWidth (): number {
    return this.width || 0
  }

  /**
   * Returns the physical height of the object.<br>
   * Возвращает физическую высоту объекта.
   */
  getHeight (): number {
    return this.height || 0
  }

  /**
   * Directions for alignment.<br>
   * Направления для выравнивания.
   */
  getType (): ImageAdaptiveItemType | undefined {
    if (
      this.width &&
      this.percent.width > 0
    ) {
      return ImageAdaptiveItemType.x
    }

    if (
      this.height &&
      this.percent.height > 0
    ) {
      return ImageAdaptiveItemType.y
    }

    return undefined
  }

  /**
   * Calculation of the actual size of the object in scale relative to the real size.<br>
   * Вычисление фактического размера объекта в масштабе относительно реального размера.
   */
  getSize (): number {
    if (
      this.element &&
      this.data.isImage()
    ) {
      const data = this.data.get() as ImageItem

      switch (this.getType()) {
        case ImageAdaptiveItemType.x:
          return data.height * (this.element.offsetWidth * this.percent.width / data.width)
        case ImageAdaptiveItemType.y:
          return data.width * (this.element.offsetHeight * this.percent.height / data.height)
      }
    }

    return 0
  }

  /**
   * Multiplier, for determining the scaling of the image, corresponding to the element.<br>
   * Множитель, для определения масштабирования изображения, соответствующий элементу.
   */
  getFactor (): number {
    const element = this.element
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
   * Calculation of the value for the background-size property.<br>
   * Вычисление значения для свойства background-size.
   */
  getBackgroundSize (): string | null {
    const factorMax = ImageCalculationList.get(this.group).getFactorMax()

    switch (this.getType()) {
      case ImageAdaptiveItemType.x:
        return `${100 * this.percent.width * factorMax}% auto`
      case ImageAdaptiveItemType.y:
        return `auto ${100 * this.percent.height * factorMax}%`
    }

    return null
  }

  /**
   * To change the focus element.<br>
   * Изменить элемент для фокуса.
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  setElement (element: ImageElement): this {
    this.element = element
    this.reset()

    return this
  }

  /**
   * Change the group name for adaptation.<br>
   * Изменить название группы для адаптации.
   * @param group group name /<br>название группы
   */
  setGroup (group?: string): this {
    this.group = group ?? GROUP_BASIC
    this.reset()

    return this
  }

  /**
   * Enable image adaptation.<br>
   * Включить адаптирования изображения.
   * @param adaptive activity status /<br>статус активности
   */
  setAdaptive (adaptive: boolean): this {
    this.adaptive = adaptive
    this.update()

    return this
  }

  /**
   * Change the state of full adaptation.<br>
   * Изменить состояние полного адаптирования.
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   */
  setAdaptiveAlways (adaptiveAlways: boolean): this {
    this.adaptiveAlways = adaptiveAlways
    this.reset()

    return this
  }

  /**
   * Change the physical width of the object in the image.<br>
   * Изменить физическую ширину объекта на изображении.
   * @param width physical width of the object /<br>физическая ширина объекта
   */
  setWidth (width: number): this {
    this.width = width
    this.reset()

    return this
  }

  /**
   * Change the physical height of the object in the image.<br>
   * Изменить физическую высоту объекта на изображении.
   * @param height physical height of the object /<br>физическая высота объекта
   */
  setHeight (height: number): this {
    this.height = height
    this.reset()

    return this
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
   * Updating the enumeration of data.<br>
   * Обновление перечисления данных.
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
   * Removal of the element for scaling.<br>
   * Удаления элемента для масштабирования.
   */
  remove (): void {
    if (this.is()) {
      ImageAdaptiveGroup.remove(this)
    }
  }

  /**
   * Updating data on tracking status.<br>
   * Обновление данных по статусу отслеживания.
   */
  make (): this {
    this.beyond = false
    this.visible = false

    if (this.is()) {
      if (this.adaptiveAlways) {
        this.beyond = true
        this.visible = true
      } else {
        const rect = this.element?.getBoundingClientRect()

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

  /**
   * Updating the calculated data.<br>
   * Обновление вычисленных данных.
   */
  protected update (): void {
    if (this.is()) {
      ImageAdaptiveGroup.add(this)
    } else {
      ImageAdaptiveGroup.remove(this)
    }
  }
}
