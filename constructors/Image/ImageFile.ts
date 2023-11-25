import { ImageItem } from './typesBasic.ts'

/**
 * Maximum size allowed without conversion.<br>
 * Максимальный размер, допустимый без преобразования.
 */
export const MAX_SIZE: number = 600

/**
 * Class for working with uploaded images.<br>
 * Класс для работы с загруженными изображениями.
 */
export class ImageFile {
  /**
   * Checks if the file is an image.<br>
   * Проверяет, является ли файл изображением.
   * @param file verified file /<br>проверяемый файл
   */
  static isImage (file: File): boolean {
    return !!file.type.match(/^image\//)
  }

  /**
   * Creates an image based on a file or a link.<br>
   * Создает изображение на основе файла или ссылки.
   * @param src file or link /<br>файл или ссылка
   */
  static createImage (src: string | File): Promise<ImageItem | undefined> {
    return new Promise(resolve => {
      if (src) {
        const image = new Image()

        image.onerror = () => resolve(undefined)
        image.onload = () => {
          resolve({
            image,
            src: this.getSRC(image, src),
            width: image.naturalWidth,
            height: image.naturalHeight
          })
        }

        (async () => {
          image.src = src instanceof File ? await this.getFileResult(src) : src
        })()
      } else {
        resolve(undefined)
      }
    })
  }

  /**
   * Returns a link to the image.<br>
   * Возвращает ссылку на изображение.
   * @param src file or link /<br>файл или ссылка
   */
  static getPath (src: string | File): Promise<string> {
    return this.createImage(src).then(item => item?.src || '')
  }

  /**
   * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.<br>
   * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
   * @param image image element /<br>элемент изображения
   * @param src link to image /<br>ссылка на изображение
   * @param maxSize maximum allowable image size /<br>максимальный допустимый размер изображения
   */
  protected static getSRC (
    image: HTMLImageElement,
    src?: string | File,
    maxSize = MAX_SIZE as number
  ): string {
    if (
      (
        src instanceof File ||
        src === undefined
      ) && (
        image.naturalHeight > maxSize ||
        image.naturalWidth > maxSize
      )
    ) {
      const is = image.naturalWidth >= image.naturalHeight
      const canvas = document.createElement('canvas')?.getContext('2d')

      if (canvas) {
        canvas.canvas.width = is ? maxSize : (image.naturalWidth / image.naturalHeight * maxSize)
        canvas.canvas.height = is ? (image.naturalHeight / image.naturalWidth * maxSize) : maxSize
        canvas.drawImage(image, 0, 0, canvas.canvas.width, canvas.canvas.height)

        return canvas.canvas.toDataURL()
      } else {
        return ''
      }
    } else {
      return image.src
    }
  }

  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
   */
  protected static getFileResult (file: File): Promise<string> {
    return new Promise(resolve => {
      if (this.isImage(file)) {
        const reader = new FileReader()
        reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
        reader.readAsDataURL(file)
      } else {
        resolve('')
      }
    })
  }
}
