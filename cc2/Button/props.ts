import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  icon: ['none', 'only'],
  size: ['xl', 'lg', 'md', 'sm', 'xs', 'x'],
  intent: ['positive', 'negative', 'neutral', 'informative', true],
  primary: ['select', 'skeleton', true],
  secondary: ['skeleton', 'select', true],
  outline: ['skeleton', 'select', 'padding', true],
  ghost: ['skeleton', 'select', true]
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  icon?: 'none' | 'only'
  selected?: boolean
  progress?: boolean
  readonly?: boolean
  disabled?: boolean
  adaptive?: boolean
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'x'
  intent?: boolean | 'positive' | 'negative' | 'neutral' | 'informative' | true
  primary?: boolean | 'select' | 'skeleton' | true
  secondary?: boolean | 'skeleton' | 'select' | true
  outline?: boolean | 'skeleton' | 'select' | 'padding' | true
  ghost?: boolean | 'skeleton' | 'select' | true
  disable?: boolean
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
    size: 'xl',
    intent: 'default',
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
    icon: {
      type: String as PropType<PropsToken['icon']>,
      default: defaults?.icon
    },
    selected: Boolean,
    progress: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    adaptive: Boolean,
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    intent: {
      type: [String, Boolean] as PropType<PropsToken['intent']>,
      default: defaults?.intent
    },
    primary: {
      type: [String, Boolean] as PropType<PropsToken['primary']>,
      default: defaults?.primary
    },
    secondary: [String, Boolean] as PropType<PropsToken['secondary']>,
    outline: [String, Boolean] as PropType<PropsToken['outline']>,
    ghost: [String, Boolean] as PropType<PropsToken['ghost']>,
    disable: Boolean
    // :prop [!] System label / Системная метка
  }
}
