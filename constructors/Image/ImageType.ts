import { CacheItem } from '../../classes/CacheItem.ts'

import { type ImageProps } from './props.ts'
import {
  type ImageTypeItem,
  ImageTypeValue
} from './typesBasic.ts'

/**
 * Class for working with the image type.<br>
 * Класс для работы с типом изображения.
 */
export class ImageType extends CacheItem<ImageTypeItem> {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps
  ) {
    super(() => this.update())
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  get (): ImageTypeItem {
    return this.getCache([this.props?.value])
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  protected update (): ImageTypeItem {
    const image = this.props?.value

    if (image) {
      if (image instanceof File) {
        return ImageTypeValue.file
      }

      if (image.match(/\//)) {
        return ImageTypeValue.image
      }

      if (image.match(/^#/)) {
        return ImageTypeValue.color
      }

      if (image.match(/^@/)) {
        return ImageTypeValue.public
      }

      const sub = image.match(/^(filled|outlined|round|sharp|two-tone)-/)

      if (sub) {
        return sub[1] as ImageTypeItem
      }

      return ImageTypeValue.material
    }

    return undefined
  }
}
