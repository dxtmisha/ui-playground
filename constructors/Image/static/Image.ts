import { isString } from '../../../functions/data.ts'
import { toNumber } from '../../../functions/number.ts'

import { ImageType } from './ImageType.ts'
import { ImageData } from './ImageData.ts'
import { ImageCoordinator } from './ImageCoordinator.ts'
import { ImagePosition } from './ImagePosition.ts'

import { ImageAdaptiveItem } from './ImageAdaptiveItem.ts'

import { ImageBackground } from './ImageBackground.ts'

import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../../types/constructor.ts'
import { type ImageProps } from '../props.ts'
import {
  type ImageElement,
  type ImageEventLoad,
  type ImageForOption,
  type ImageTypeItem,
  type ImageValue
} from '../typesBasic.ts'

/**
 * Base class for working with images and icons.<br>
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image {
  protected readonly type: ImageType
  protected readonly data: ImageData

  protected readonly coordinator: ImageCoordinator
  protected readonly position: ImagePosition
  protected readonly adaptiveItem: ImageAdaptiveItem
  protected readonly background: ImageBackground

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param image values from the image /<br>значения из изображения
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param group group name /<br>название группы
   * @param adaptive activity status /<br>статус активности
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   * @param width physical width of the object /<br>физическая ширина объекта
   * @param height physical height of the object /<br>физическая высота объекта
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  constructor (
    props: ImageProps,
    protected image?: ImageValue,
    element?: ImageElement,
    group?: string,
    adaptive?: boolean,
    adaptiveAlways?: boolean,
    width?: ImageForOption,
    height?: ImageForOption,
    protected readonly callback?: (event: ImageEventLoad) => void
  ) {
    this.type = new ImageType(props)
    this.data = new ImageData(props, this.type, () => {
      if (this.adaptiveItem.is()) {
        this.adaptiveItem.reset()
      } else {
        this.makeCallback()
      }
    })

    this.coordinator = new ImageCoordinator(props)
    this.position = new ImagePosition(props, this.coordinator)

    this.adaptiveItem = new ImageAdaptiveItem(
      this.data,
      () => this.makeCallback(),
      element,
      group,
      adaptive,
      adaptiveAlways,
      width ? toNumber(width) : 0,
      height ? toNumber(height) : 0
    )

    this.background = new ImageBackground(
      props,
      this.data,
      this.coordinator,
      this.adaptiveItem
    )
  }

  /**
   * Destructor
   */
  destructor (): void {
    this.adaptiveItem.remove()
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType (): ImageTypeItem {
    return this.type.get()
  }

  /**
   * A method for obtaining an object with values for an image.<br>
   * Метод для получения объекта с значениями для изображения.
   */
  getData (): ImageData {
    return this.data
  }

  /**
   * Values for the text.<br>
   * Значения для текста.
   */
  getText (): string | undefined {
    const type = this.type.get()

    if (
      type &&
      typeof this.image === 'string' &&
      [
        'filled',
        'outlined',
        'round',
        'sharp',
        'two-tone',
        'material'
      ].indexOf(type) !== -1
    ) {
      return this.image.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
    }

    return undefined
  }

  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses (): ConstrClassObject {
    const type = this.type.get()
    const data = {
      [`??--type--${type}`]: type !== undefined,
      notranslate: true
    }

    switch (type) {
      case 'filled':
      case 'outlined':
      case 'round':
      case 'sharp':
      case 'two-tone':
      case 'material':
        data['material-icons'] = true
        break
    }

    return data
  }

  /**
   * Values for the style.<br>
   * Значения для стиля.
   */
  getStyles (): ConstrStyles {
    if (this.image) {
      switch (this.type.get()) {
        case 'file':
        case 'image':
          return {
            'background-image': this.background.getImage(),
            'background-size': this.background.get(),
            'background-position-x': this.position?.getX(),
            'background-position-y': this.position?.getY()
          }
        case 'public':
          return { 'mask-image': this.background.getImage() }
        case 'color':
          if (isString(this.image)) {
            return { 'background-color': this.image }
          }
      }
    }

    return {}
  }

  /**
   * To change the image names.<br>
   * Изменить названия изображения.
   * @param image values from the image /<br>значения из изображения
   */
  async setImage (image?: ImageValue): Promise<this> {
    this.image = image

    // this.type.set(image)
    // await this.data.set(image)

    return this
  }

  /**
   * To change the focus element.<br>
   * Изменить элемент для фокуса.
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  setElement (element: ImageElement): this {
    this.adaptiveItem.setElement(element)

    return this
  }

  /**
   * Change the group name for adaptation.<br>
   * Изменить название группы для адаптации.
   * @param group group name /<br>название группы
   */
  setGroup (group?: string): this {
    this.adaptiveItem.setGroup(group)

    return this
  }

  /**
   * Enable image adaptation.<br>
   * Включить адаптирования изображения.
   * @param adaptive activity status /<br>статус активности
   */
  setAdaptive (adaptive?: boolean): this {
    this.adaptiveItem.setAdaptive(Boolean(adaptive))

    return this
  }

  /**
   * Change the state of full adaptation.<br>
   * Изменить состояние полного адаптирования.
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   */
  setAdaptiveAlways (adaptiveAlways?: boolean): this {
    this.adaptiveItem.setAdaptiveAlways(Boolean(adaptiveAlways))

    return this
  }

  /**
   * Change the physical width of the object in the image.<br>
   * Изменить физическую ширину объекта на изображении.
   * @param width physical width of the object /<br>физическая ширина объекта
   */
  setWidth (width: ImageForOption): this {
    this.adaptiveItem.setWidth(width ? toNumber(width) : 0)

    return this
  }

  /**
   * Change the physical height of the object in the image.<br>
   * Изменить физическую высоту объекта на изображении.
   * @param height physical height of the object /<br>физическая высота объекта
   */
  setHeight (height: ImageForOption): this {
    this.adaptiveItem.setHeight(height ? toNumber(height) : 0)

    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  protected makeCallback (): void {
    if (this.callback) {
      this.callback({
        type: this.getType(),
        image: this.getData().getImage(),
        text: this.getText(),
        classes: this.getClasses(),
        styles: this.getStyles()
      })
    }
  }
}
