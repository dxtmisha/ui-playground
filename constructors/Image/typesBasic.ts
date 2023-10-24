import { NumberOrString } from '../../types/basic.ts'

export type ImageSize = {
  width: NumberOrString
  height: NumberOrString
}

/**
 * Parameters for the uploaded image or the one available by a direct link.<br>
 * Параметры для загруженного изображения или доступного по прямой ссылке.
 */
export type ImageItem =
  ImageSize &
  {
    image: HTMLImageElement
    src: string
  }

export type ImageEventItem = ImageItem | string | undefined
