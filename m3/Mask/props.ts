// import { type PropType } from 'vue'

import {
  MaskProps,
  defaultsMask,
  propsMask
} from '../../constructors/Mask/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] mask?: MaskList
  // [constructor] special?: MaskSpecialProp
  // [constructor] match?: MaskMatchItem
  // [constructor] pattern?: InputPatternItemOrFunction
  // [constructor] check?: InputPatternItemOrFunction
  // [constructor] fraction?: MaskFractionItem
  // [constructor] currency?: string
  // [constructor] type?: MaskTypeItem
  // [constructor] language?: string,
  // [constructor] view?: string
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
  ...defaultsMask,
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
    // :prop [!] System label / Системная метка
  }
}
