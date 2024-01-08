import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon'],
  intent: ['default', 'positive', 'negative', 'neutral', 'informative'],
  size: ['xl', 'lg', 'md', 'sm', 'xs', 'x']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  loading?: boolean
  readonly?: boolean
  adaptive?: 'icon'
  intent?: 'default' | 'positive' | 'negative' | 'neutral' | 'informative'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'x'
  outline?: boolean
  link?: boolean
  primary?: boolean
  secondary?: boolean
  ghost?: boolean
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
    intent: 'default',
    size: 'md',
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
    disabled: Boolean,
    selected: Boolean,
    loading: Boolean,
    readonly: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>,
    intent: {
      type: String as PropType<PropsToken['intent']>,
      default: defaults?.intent
    },
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    outline: Boolean,
    link: Boolean,
    primary: {
      type: Boolean,
      default: defaults?.primary
    },
    secondary: Boolean,
    ghost: Boolean
    // :prop [!] System label / Системная метка
  }
}
