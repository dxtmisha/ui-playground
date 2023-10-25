import {
  type NumberOrString,
  type Undefined
} from '../../types/basic.ts'

export enum ImageTypeValue {
  file = 'file',
  image = 'image',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material'
}

export type ImageElement = HTMLElement | Undefined
export type ImageValue = string | File | Undefined
export type ImageForOption = NumberOrString | Undefined

export type ImageCoordinator =
  [number] |
  [number, number] |
  [number, number, number] |
  [number, number, number, number] |
  Undefined

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

export type ImageTypeItem = ImageTypeValue | Undefined
