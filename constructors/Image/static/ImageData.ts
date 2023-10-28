import { isString } from '../../../functions/data.ts'

import { Icons } from '../../../classes/static/Icons.ts'

import { ImageType } from './ImageType.ts'
import { ImageFile } from './ImageFile.ts'

import {
  type FunctionVoid,
  type Undefined
} from '../../../types/basic.ts'
import {
  type ImageEventItem,
  type ImageItem,
  ImageTypeValue,
  type ImageValue
} from '../typesBasic.ts'

/**
 * Class for working and processing the image.<br>
 * Класс для работы и обработки изображения.
 */
export class ImageData {
  protected item?: ImageEventItem

  /**
   * Constructor
   * @param type image type /<br>тип изображения
   * @param image values from the image /<br>значения из изображения
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   * @param url link to the folder with images /<br>ссылка на папку с изображениями
   */
  constructor (
    protected readonly type: ImageType,
    protected image?: ImageValue,
    protected readonly callback?: FunctionVoid,
    protected url?: string
  ) {
    if (image) {
      this.make().then()
    }
  }

  /**
   * Checks if there are values.<br>
   * Проверяет, есть ли значения.
   */
  is (): this is { item: Exclude<ImageEventItem, Undefined> } {
    return this.item !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.<br>
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink (): this is { item: string } {
    return this.is() && typeof this.item === 'string'
  }

  /**
   * Checks if the value is an image object.<br>
   * Проверяет, является ли значение объектом изображения.
   */
  isImage (): this is { item: ImageItem } {
    return this.is() && typeof this.item !== 'string'
  }

  /**
   * Returns images.<br>
   * Возвращает изображения.
   */
  get (): ImageEventItem {
    return this.item
  }

  /**
   * Changing the image value.<br>
   * Изменение значения изображения.
   * @param image values from the image /<br>значения из изображения
   */
  async set (image?: ImageValue): Promise<this> {
    this.image = image
    await this.make()

    return this
  }

  /**
   * Changing the path to the icon.<br>
   * Изменение пути к иконке.
   * @param url link to the folder with images /<br>ссылка на папку с изображениями
   */
  async setUrl (url?: string): Promise<this> {
    this.url = url

    if (this.type.get() === ImageTypeValue.public) {
      await this.make()
    }

    return this
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  protected async make (): Promise<this> {
    this.item = await this.init()
    this.callback?.()

    return this
  }

  /**
   * Calculates the image value and returns it.<br>
   * Вычисляет значение изображения и возвращает его.
   */
  protected async init (): Promise<ImageEventItem> {
    const image = this.image

    if (image) {
      switch (this.type.get()) {
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          return await ImageFile.createImage(image)
        case ImageTypeValue.public:
          if (isString(image)) {
            return Icons.get(image, this.url)
          }

          break
      }
    }

    return undefined
  }
}
