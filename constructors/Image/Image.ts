import { isString } from '../../functions/data.ts'

import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract.ts'

import { ImageType } from './ImageType.ts'
import { ImageData } from './ImageData.ts'
import { ImageCoordinator } from './ImageCoordinator.ts'
import { ImagePosition } from './ImagePosition.ts'

import { ImageAdaptiveItem } from './ImageAdaptiveItem.ts'

import { ImageBackground } from './ImageBackground.ts'

import {
  type ConstrClassObject,
  type ConstrStyles,
  type ConstrValue
} from '../../types/constructor.ts'
import { type ImageProps } from './props.ts'
import {
  type ImageElement,
  type ImageEventLoad,
  type ImageTypeItem
} from './typesBasic.ts'

/**
 * Base class for working with images and icons.<br>
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image extends DesignAsyncAbstract<ImageProps, ImageEventLoad> {
  readonly type: ImageType
  readonly data: ImageData

  readonly coordinator: ImageCoordinator
  readonly position: ImagePosition
  readonly adaptiveItem: ImageAdaptiveItem
  readonly background: ImageBackground

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  constructor (
    protected readonly props: ImageProps,
    element: ConstrValue<ImageElement>,
    protected readonly callback?: (event: ImageEventLoad) => void
  ) {
    super(props, callback)

    this.type = new ImageType(props)
    this.data = new ImageData(props, this.type, () => {
      if (this.adaptiveItem.is()) {
        this.adaptiveItem.reset()
      } else {
        this.make(true)
      }
    })

    console.log('this.type', this.type.get())

    this.coordinator = new ImageCoordinator(props)
    this.position = new ImagePosition(props, this.coordinator)

    this.adaptiveItem = new ImageAdaptiveItem(
      props,
      this.data,
      element,
      () => this.make(true)
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
   * Getting the value of the picture.<br>
   * Получение значения картины.
   */
  getValue (): ImageProps['value'] {
    return this.props?.value
  }

  /**
   * A method for obtaining an object with values for an image.<br>
   * Метод для получения объекта с значениями для изображения.
   */
  getData (): ImageData {
    return this.data
  }

  /**
   * Values for the text. Text is used for the type of icon that works as a background.<br>
   * Значения для текста. Текст используется для типа иконки, который работает как фон.
   */
  getText (): string | undefined {
    const type = this.type.get()
    const value = this.getValue()

    if (
      type &&
      isString(value) &&
      [
        'filled',
        'outlined',
        'round',
        'sharp',
        'two-tone',
        'material'
      ].indexOf(type) !== -1
    ) {
      return value.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
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
    return this.event?.styles || {}
  }

  /**
   * Updates the adapted elements.<br>
   * Обновляет адаптированные элементы.
   */
  updateAdaptive (): this {
    this.adaptiveItem.update()
    this.make(true)

    return this
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected async initEvent (): Promise<void> {
    if (this.isChanged('image', ['value', 'url'])) {
      this.event.image = this.getData().getImage()
    }

    this.event.styles = this.initStyles()
  }

  /**
   * Calculates all properties for the style of the element.<br>
   * Вычисляет все свойства для стиля элемента.
   */
  protected initStyles (): ConstrStyles {
    const value = this.getValue()

    if (value) {
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
          if (isString(value)) {
            return { 'background-color': value }
          }
      }
    }

    return {}
  }
}
