import { isFilled } from '../../functions/data'

import { ImageData } from './ImageData'
import { ImageCoordinator } from './ImageCoordinator'
import { ImageAdaptiveItem } from './ImageAdaptiveItem'

import { type NumberOrString } from '../../types/basic'
import { type ImageProps } from './props'

/**
 * A class for getting the value of background.<br>
 * Класс для получения значения background.
 */
export class ImageBackground {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param data image data /<br>данные изображения
   * @param coordinator object for working with coordinates /<br>объект для работы с координатами
   * @param adaptive an object for working with adapted scaling /<br>объект для работы с адаптированным масштабированием
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps,
    protected readonly data: ImageData,
    protected readonly coordinator: ImageCoordinator,
    protected readonly adaptive: ImageAdaptiveItem
  ) {
  }

  /**
   * Returns values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  get (): string | null {
    if (this.coordinator.is()) {
      return this.getSizeByCoordinator()
    }

    if (this.adaptive.is()) {
      const size = this.adaptive.getBackgroundSize()

      if (size) {
        return size.toString()
      }
    }

    return this.getSizeForItem()
  }

  /**
   * Returns values for the background-image property.<br>
   * Возвращает значения для свойства background-image.
   */
  getImage (): string | null {
    const image = this.data.getImage()

    switch (typeof image) {
      case 'string':
        return `url("${image}")`
      case 'object':
        return `url("${image.src}")`
      default:
        return null
    }
  }

  /**
   * Returns the value for the background-size property.<br>
   * Возвращает значение для свойства background-size.
   * @param width width value /<br>значение ширины
   * @param height height value /<br>значение высоты
   */
  protected getSize (
    width: NumberOrString,
    height: NumberOrString
  ): string | null {
    const image = this.data.getImage()

    if (typeof image === 'object') {
      return image.height < image.width ? `auto ${height}` : `${width} auto`
    }

    return null
  }

  /**
   * Returns sizes according to the coordinator property.<br>
   * Возвращает размеры по свойству координатора.
   */
  protected getSizeByCoordinator (): string | null {
    const {
      width,
      height
    } = this.coordinator.getSize()

    return this.getSize(width, height)
  }

  /**
   * Returns the scaling sizes.<br>
   * Возвращает размеры масштабирования.
   */
  protected getSizeForItem (): string | null {
    const size = this.props?.size

    if (size && isFilled(size)) {
      return size.toString().match(/%$/) ? this.getSize(size, size) : size.toString()
    }

    return null
  }
}
