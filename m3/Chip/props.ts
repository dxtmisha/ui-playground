import { type PropType } from 'vue'

import {
  ChipProps,
  defaultsChip,
  propsChip
} from '../../constructors/Chip/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon', 'sm', 'md'],
  height: ['sm', 'md', 'lg'],
  palette: ['primary', 'secondary', 'tertiary', 'red', 'green', 'error', 'neutral', 'neutralVariant']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  selected?: boolean
  progress?: boolean
  readonly?: boolean
  disabled?: boolean
  adaptive?: 'icon' | 'sm' | 'md'
  height?: 'sm' | 'md' | 'lg'
  outlined?: boolean
  elevated?: boolean
  input?: boolean
  assist?: boolean
  filter?: boolean
  suggestion?: boolean
  avatar?: boolean
  dragged?: boolean
  palette?: 'primary' | 'secondary' | 'tertiary' | 'red' | 'green' | 'error' | 'neutral' | 'neutralVariant'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ChipProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsChip,
  ...{
    // :default [!] System label / Системная метка
    height: 'md',
    outlined: true,
    input: true
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsChip,
  ...{
    // :prop [!] System label / Системная метка
    focus: Boolean,
    selected: Boolean,
    progress: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>,
    height: {
      type: String as PropType<PropsToken['height']>,
      default: defaults?.height
    },
    outlined: {
      type: Boolean,
      default: defaults?.outlined
    },
    elevated: Boolean,
    input: {
      type: Boolean,
      default: defaults?.input
    },
    assist: Boolean,
    filter: Boolean,
    suggestion: Boolean,
    avatar: Boolean,
    dragged: Boolean,
    palette: String as PropType<PropsToken['palette']>
    // :prop [!] System label / Системная метка
  }
}
