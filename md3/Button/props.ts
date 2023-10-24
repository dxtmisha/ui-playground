import { PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon', 'sm', 'md'],
  height: ['sm', 'md', 'lg'],
  palette: ['primary', 'secondary', 'tertiary', 'error', 'neutral', 'neutralVariant']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  selected?: boolean
  progress?: boolean
  disabled?: boolean
  adaptive?: 'icon' | 'sm' | 'md'
  height?: string | 'sm' | 'md' | 'lg' | 'custom'
  filled?: boolean
  outlined?: boolean
  text?: boolean
  elevated?: boolean
  tonal?: boolean
  palette?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral' | 'neutralVariant'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>

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
    focus: Boolean,
    selected: Boolean,
    progress: Boolean,
    disabled: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>,
    height: {
      type: String as PropType<PropsToken['height']>,
      default: defaults?.height
    },
    filled: {
      type: Boolean,
      default: defaults?.filled
    },
    outlined: Boolean,
    text: Boolean,
    elevated: Boolean,
    tonal: Boolean,
    palette: String as PropType<PropsToken['palette']>
    // :prop [!] System label / Системная метка
  }
}
