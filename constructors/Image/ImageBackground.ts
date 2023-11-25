import { isFilled } from '../../functions/data.ts'

import { ImageData } from './ImageData.ts'
import { ImageCoordinator } from './ImageCoordinator.ts'
import { ImageAdaptiveItem } from './ImageAdaptiveItem.ts'

import { type NumberOrString } from '../../types/basic.ts'
import { type ImageProps } from './props.ts'

/**
 * Class for generating a link in the background-image property.<br>
 * Класс для генерации ссылки в свойстве background-image.
 */
export class ImageBackground {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param data object for working with values / объект для работы со значениями
   * @param coordinator object for working with coordinates / объект для работы с координатами
   * @param adaptive an object for working with adaptive layout / объект для работы с adaptive
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
   * Returns a string value for the background-image property.<br>
   * Возвращает строку значения для свойства background-image.
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
   * Returns a formatted value for the background-size property.<br>
   * Возвращает отформатированное значение для свойства background-size.
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
    if (this.coordinator) {
      const {
        width,
        height
      } = this.coordinator.getSize()

      return this.getSize(width, height)
    }

    return null
  }

  /**
   * Returns the sizes for the value.<br>
   * Возвращает размеры для значения.
   */
  protected getSizeForItem (): string | null {
    const size = this.props?.size

    if (size && isFilled(size)) {
      return size.toString().match(/%$/) ? this.getSize(size, size) : size.toString()
    }

    return null
  }
}
