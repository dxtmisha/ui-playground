import { type PropType } from 'vue'

import {
  IconProps,
  defaultsIcon,
  propsIcon
} from '../../constructors/Icon/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationType: ['type1', 'type2'],
  rounded: ['none', 'standard', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
  size: ['xs', 'sm', 'md', 'lg', 'xl']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] icon?: string | object | ImageProps
  // [constructor] iconActive?: string | object | ImageProps
  // [constructor] active?: boolean
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  animationType?: 'type1' | 'type2'
  animationShow?: boolean
  overlay?: boolean
  dynamic?: boolean
  start?: boolean
  end?: boolean
  high?: boolean
  rounded?: 'none' | 'standard' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<IconProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsIcon,
  ...{
    // :default [!] System label / Системная метка
    animationType: 'type1'
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsIcon,
  ...{
    // :prop [!] System label / Системная метка
    turn: Boolean,
    disabled: Boolean,
    hide: Boolean,
    animationType: {
      type: String as PropType<PropsToken['animationType']>,
      default: defaults?.animationType
    },
    animationShow: Boolean,
    overlay: Boolean,
    dynamic: Boolean,
    start: Boolean,
    end: Boolean,
    high: Boolean,
    rounded: String as PropType<PropsToken['rounded']>,
    size: String as PropType<PropsToken['size']>
    // :prop [!] System label / Системная метка
  }
}
