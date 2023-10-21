import { PropType } from 'vue'

import {
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = {
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
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsButton,
  ...{
    // :default [!] System label / Системная метка
    height: 'md',
    filled: true
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsButton,
  ...{
    // :prop [!] System label / Системная метка
    selected: Boolean,
    progress: Boolean,
    disabled: Boolean,
    adaptive: String as PropType<Props['adaptive']>,
    height: {
      type: String as PropType<Props['height']>,
      default: defaults?.height
    },
    filled: {
      type: Boolean,
      default: defaults?.filled
    },
    outlined: Boolean,
    text: Boolean,
    elevated: Boolean,
    tonal: [String, Boolean] as PropType<Props['tonal']>,
    test: Boolean,
    palette: String as PropType<Props['palette']>
    // :prop [!] System label / Системная метка
  }
}
