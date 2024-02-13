// import { type PropType } from 'vue'

import {
  ScrollbarProps,
  defaultsScrollbar,
  propsScrollbar
} from '../../constructors/Scrollbar/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] tag: string
  visible?: boolean
  border?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ScrollbarProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsScrollbar,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsScrollbar,
  ...{
    // :prop [!] System label / Системная метка
    visible: Boolean,
    border: Boolean,
    inverse: Boolean
    // :prop [!] System label / Системная метка
  }
}
