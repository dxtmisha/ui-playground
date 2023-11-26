import { PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ImageProps = {
  // Values

  /**
   * The input value can be the name of an icon, a link to an image, or a File object.<br>
   * Входное значение может быть названием иконки, ссылкой на изображение или объектом File.
   */
  value?: string | File

  /**
   * Coordinates by which the central part of the image will be determined. Works only for images.<br>
   * Координаты, по которым будет определяться центральная часть изображения. Работает только для изображений.
   */
  coordinator?: [number, number?, number?, number?] | number[] | any

  /**
   * Image scaling. You can enter the type of scaling or the value in percent.<br>
   * Масштабирование изображения. Можно ввести тип масштабирования или значение в процентах.
   */
  size?: 'auto' | 'contain' | 'cover' | string | number

  /**
   * Image shift along the x-plane. Does not work with coordinates/size.
   * Сдвиг изображения по x-плоскости. Не работает с coordinates/size.
   */
  x?: string | number

  /**
   * Image shift along the y-plane. Does not work with coordinates/size.
   * Сдвиг изображения по y-плоскости. Не работает с coordinates/size.
   */
  y?: string | number

  // Adaptive
  adaptiveGroup?: string
  adaptiveAlways?: boolean
  objectWidth?: string | number
  objectHeight?: string | number

  // Options

  /**
   * Path to the folder with icons. Specify only if the icon is not in the
   * standard place or is not in the icon database.<br>
   * Путь к папке с иконками. Указывать только, если иконка находится не в
   * стандартном месте или ее нет в базе иконок.
   */
  url?: string

  // Tokens
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsImage: ImageProps = {
  adaptiveGroup: 'basic',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsImage = {
  // Values
  value: [String, File],
  coordinator: Array as PropType<ImageProps['coordinator']>,
  size: String as PropType<ImageProps['size']>,
  x: [String, Number],
  y: [String, Number],

  // Adaptive
  adaptiveGroup: {
    type: String,
    default: defaultsImage.adaptiveGroup
  },
  adaptiveAlways: Boolean,
  objectWidth: [String, Number],
  objectHeight: [String, Number],

  // Options
  url: String,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    turn: Boolean,
    disabled: Boolean,
    hide: Boolean,
    adaptive: Boolean
    // :prop [!] System label / Системная метка
  }
}
