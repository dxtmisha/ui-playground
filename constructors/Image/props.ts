import { PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ImageProps = {
  // Values
  value?: string | File
  coordinator?: [number, number?, number?, number?] | number[] | any
  size?: 'auto' | 'contain' | 'cover' | string | number
  x?: string | number
  y?: string | number

  // Adaptive
  adaptiveGroup?: string
  adaptiveAlways?: boolean
  objectWidth?: string | number
  objectHeight?: string | number

  // Options
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
