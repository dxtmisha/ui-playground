// import { type PropType } from 'vue'

import {
  IconProps,
  defaultsIcon,
  propsIcon
} from '../../constructors/Icon/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] icon?: string | ImageProps
  // [constructor] iconActive?: string | ImageProps
  // [constructor] active?: boolean
  // [constructor] turn?: boolean
  // [constructor] disabled?: boolean
  // [constructor] hide?: boolean
  // [constructor] animationType?: 'type1' | 'type2'
  // [constructor] animationShow?: boolean
  // [constructor] overlay?: boolean
  // [constructor] dynamic?: boolean
  // [constructor] start?: boolean
  // [constructor] end?: boolean
  // [constructor] high?: boolean
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
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsIcon,
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
