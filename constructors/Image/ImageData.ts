import { isString } from '../../functions/data'

import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract'
import { Icons } from '../../classes/Icons'

import { ImageType } from './ImageType'
import { ImageFile } from './ImageFile'

import {
  type Undefined
} from '../../types/basic'
import { type ImageProps } from './props'
import {
  type ImageEventData,
  type ImageEventItem,
  type ImageItem,
  ImageTypeValue
} from './typesBasic'

/**
 * A class for obtaining image or icon data.<br>
 * Класс для получения данных изображения или иконки.
 */
export class ImageData extends DesignAsyncAbstract<ImageProps, ImageEventData> {
  protected item?: ImageEventItem

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type image type /<br>тип изображения
   * @param callback callback function upon successful image loading /<br>
   * функция обратного вызова при успешной загрузке изображения
   */
  constructor (
    props: ImageProps,
    protected readonly type: ImageType,
    callback?: (event: ImageEventData) => void
  ) {
    super(props, callback, ['value', 'url'])

    if (this.props?.value) {
      this.make()
    }
  }

  /**
   * Checks if there are values.<br>
   * Проверяет, есть ли значения.
   */
  is (): this is { event: { image: Exclude<ImageEventItem, Undefined> } } {
    return this.getImage() !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.<br>
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink (): this is { event: { image: string } } {
    return this.is() && typeof this.getImage() === 'string'
  }

  /**
   * Checks if the value is an image object.<br>
   * Проверяет, является ли значение объектом изображения.
   */
  isImage (): this is { event: { image: ImageItem } } {
    return this.is() && typeof this.getImage() !== 'string'
  }

  /**
   * Returns images.<br>
   * Возвращает изображения.
   */
  getImage (): ImageEventItem {
    return this.event?.image
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  protected async initEvent (): Promise<void> {
    if (this.isChanged('image', ['value', 'url'])) {
      this.event.image = await this.initImage()
    }
  }

  /**
   * Calculates the image value and returns it.<br>
   * Вычисляет значение изображения и возвращает его.
   */
  protected async initImage (): Promise<ImageEventItem> {
    const image = this.props?.value

    if (image) {
      switch (this.type.get()) {
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            return await ImageFile.createImage(image)
          } catch {
            console.error(Image, image)
          }
          break
        case ImageTypeValue.public:
          if (isString(image)) {
            return await Icons.get(image, this.props?.url)
          }

          break
      }
    }

    return undefined
  }
}
