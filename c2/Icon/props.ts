import { type PropType } from 'vue'

import {
  IconProps,
  defaultsIcon,
  propsIcon
} from '../../constructors/Icon/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationType: ['type1', 'type2'],
  variation: ['icon', 'payment', 'avatar', 'country'],
  shape: ['rect', 'circle', 'box'],
  size: ['12', '16', '20', '24', '32']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] icon?: string | ImageProps
  // [constructor] iconActive?: string | ImageProps
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
  variation?: 'icon' | 'payment' | 'avatar' | 'country'
  shape?: 'rect' | 'circle' | 'box'
  size?: '12' | '16' | '20' | '24' | '32'
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
    animationType: 'type1',
    variation: 'icon',
    shape: 'box',
    size: '24'
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
    variation: {
      type: String as PropType<PropsToken['variation']>,
      default: defaults?.variation
    },
    shape: {
      type: String as PropType<PropsToken['shape']>,
      default: defaults?.shape
    },
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    }
    // :prop [!] System label / Системная метка
  }
}
