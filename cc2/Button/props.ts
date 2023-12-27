import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  icon: ['none', 'left', 'right', 'only'],
  intent: ['default', 'positive', 'negative', 'neutral', 'informative'],
  size: ['xl', 'lg', 'md', 'sm', 'xs', 'x']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  icon?: 'none' | 'left' | 'right' | 'only'
  selected?: boolean
  progress?: boolean
  readonly?: boolean
  disabled?: boolean
  adaptive?: boolean
  intent?: 'default' | 'positive' | 'negative' | 'neutral' | 'informative'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'x'
  normal?: boolean
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  ghost?: boolean
  link?: boolean
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
    icon: 'none',
    intent: 'default',
    size: 'xl',
    primary: true
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
    icon: {
      type: String as PropType<PropsToken['icon']>,
      default: defaults?.icon
    },
    selected: Boolean,
    progress: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    adaptive: Boolean,
    intent: {
      type: String as PropType<PropsToken['intent']>,
      default: defaults?.intent
    },
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    normal: Boolean,
    loading: Boolean,
    primary: {
      type: Boolean,
      default: defaults?.primary
    },
    secondary: Boolean,
    outline: Boolean,
    ghost: Boolean,
    link: Boolean
    // :prop [!] System label / Системная метка
  }
}
