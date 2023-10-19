import { PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ButtonProps = {
  // :type [!] System label / Системная метка
  selected?: boolean
  progress?: boolean
  disabled?: boolean
  adaptive?: 'icon' | 'sm' | 'md'
  height?: 'sm' | 'md' | 'lg'
  filled?: boolean
  outlined?: boolean
  text?: boolean
  elevated?: boolean
  tonal?: boolean | 'a' | true
  test?: boolean
  palette?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral' | 'neutralVariant'
  // :type [!] System label / Системная метка
} & {
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsButton: ButtonProps = {
  ...{
    // :default [!] System label / Системная метка
    height: 'md',
    filled: true
    // :default [!] System label / Системная метка
  },
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsButton = {
  ...{
    // :prop [!] System label / Системная метка
    selected: Boolean,
    progress: Boolean,
    disabled: Boolean,
    adaptive: String as PropType<ButtonProps['adaptive']>,
    height: {
      type: String as PropType<ButtonProps['height']>,
      default: defaultsButton?.height
    },
    filled: {
      type: Boolean,
      default: defaultsButton?.filled
    },
    outlined: Boolean,
    text: Boolean,
    elevated: Boolean,
    tonal: [String, Boolean] as PropType<ButtonProps['tonal']>,
    test: Boolean,
    palette: String as PropType<ButtonProps['palette']>
    // :prop [!] System label / Системная метка
  },
  // Values

  // Status

  // Options
}
