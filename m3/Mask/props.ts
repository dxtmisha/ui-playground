import { type PropType } from 'vue'

import {
  MaskProps,
  defaultsMask,
  propsMask
} from '../../constructors/Mask/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  dir: ['ltr', 'rtl']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] type?: MaskTypeItem
  // [constructor] name?: string
  // [constructor] value?: string | number
  // [constructor] mask?: MaskList
  // [constructor] special?: MaskSpecialProp
  // [constructor] match?: MaskMatchItem
  // [constructor] pattern?: InputPatternItemOrFunction
  // [constructor] check?: InputPatternItemOrFunction
  // [constructor] fraction?: MaskFractionItem
  // [constructor] currency?: string
  // [constructor] language?: string
  // [constructor] view?: string
  visible?: boolean
  right?: boolean
  dir?: 'ltr' | 'rtl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<MaskProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsMask as Props,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsMask,
  ...{
    // :prop [!] System label / Системная метка
    visible: Boolean,
    right: Boolean,
    dir: String as PropType<PropsToken['dir']>
    // :prop [!] System label / Системная метка
  }
}
