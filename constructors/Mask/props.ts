import { type PropType } from 'vue'

import { type InputPatternItemOrFunction } from '../Input/typesBasic.ts'
import {
  type MaskFractionItem,
  type MaskList,
  type MaskMatchItem,
  type MaskSpecialProp,
  type MaskTypeItem
} from './typesBasic.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type MaskProps = {
  // Values
  mask?: MaskList
  special?: MaskSpecialProp
  match?: MaskMatchItem
  pattern?: InputPatternItemOrFunction
  check?: InputPatternItemOrFunction
  fraction?: MaskFractionItem
  currency?: string

  // Options
  type?: MaskTypeItem
  language?: string,
  view?: string

  // Tokens
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsMask: MaskProps = {
  match: /[0-9]/,
  special: '*',
  type: 'text',
  view: '_',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsMask = {
  // Values
  mask: [String, Array] as PropType<MaskProps['mask']>,
  special: {
    type: [String, Array, Object] as PropType<MaskProps['special']>,
    default: defaultsMask?.special
  },
  match: {
    type: [String, RegExp] as PropType<MaskProps['match']>,
    default: defaultsMask?.match
  },
  pattern: Object as PropType<MaskProps['pattern']>,
  check: Object as PropType<MaskProps['check']>,
  fraction: [String, Boolean, Number],
  currency: String,

  // Options
  type: {
    type: String as PropType<MaskProps['type']>,
    default: defaultsMask?.type
  },
  language: String,
  view: {
    type: String,
    default: defaultsMask?.view
  },

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
