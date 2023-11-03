import { type ImageProps } from '../props.ts'
import {
  type ImageTypeItem,
  ImageTypeValue
} from '../typesBasic.ts'

/**
 * Class for working with the image type.<br>
 * Класс для работы с типом изображения.
 */
export class ImageType {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  get (): ImageTypeItem {
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
