import {
  type NumberOrString,
  type Undefined
} from '../../types/basic.ts'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor.ts'

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

export type ImageElement = HTMLElement | undefined
export type ImageValue = string | File | Undefined
export type ImageForOption = NumberOrString | Undefined

export type ImageCoordinatorItem =
  [number] |
  [number, number] |
  [number, number, number] |
  [number, number, number, number] |
  Undefined

export type ImageSize<T = number> = {
  width: T
  height: T
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

export type ImageTypeItem = ImageTypeValue | Undefined

export type ImageEventItem = ImageItem | string | undefined
export type ImageEventType = {
  type: ImageTypeItem
}
export type ImageEventData = {
  image: ImageEventItem
}
export type ImageEventLoad =
  ImageEventType &
  ImageEventData &
  {
    text: string | undefined
    classes: ConstrClassObject
    styles: ConstrStyles
  }
