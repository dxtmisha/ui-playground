import { type PropType } from 'vue'

import {
  type MaskItem, MaskSpecialGroup,
  type MaskTypeItem
} from './typesBasic.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type MaskProps = {
  // Values
  mask?: MaskItem
  special?: string | string[] | MaskSpecialGroup
  fraction?: boolean | string | number
  currency?: string
  match?: RegExp | Record<string, RegExp>

  // Options
  type?: MaskTypeItem
  lang?: string

  // Tokens
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsMask: MaskProps = {
  special: '*',
  match: /[0-9]/,
  type: 'text',
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
  mask: [String, Array, Object] as PropType<MaskProps['mask']>,
  special: {
    type: [String, Array, Object] as PropType<MaskProps['special']>,
    default: defaultsMask?.special
  },
  fraction: [Boolean, String, Number],
  currency: String,
  match: {
    type: [Object, RegExp] as PropType<MaskProps['match']>,
    default: defaultsMask?.match
  },

  // Options
  type: {
    type: String as PropType<MaskProps['type']>,
    default: defaultsMask?.type
  },
  lang: String,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
