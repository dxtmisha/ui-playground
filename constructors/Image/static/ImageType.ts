import {
  type ImageTypeItem,
  ImageTypeValue,
  type ImageValue
} from '../typesBasic.ts'

/**
 * Class for working with the image type.<br>
 * Класс для работы с типом изображения.
 */
export class ImageType {
  protected item?: ImageTypeItem

  /**
   * Constructor
   * @param image values from the image /<br>значения из изображения
   */
  constructor (image?: ImageValue) {
    this.set(image)
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  get (): ImageTypeItem {
    return this.item
  }

  /**
   * Change the image type.<br>
   * Изменения тип изображения.
   * @param image values from the image /<br>значения из изображения
   */
  set (image?: ImageValue): this {
    this.item = this.init(image)
    return this
  }

  /**
   * Get the type value by its value.<br>
   * Получение значения типа по его значению.
   */
  protected init (image?: ImageValue): ImageTypeItem {
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
