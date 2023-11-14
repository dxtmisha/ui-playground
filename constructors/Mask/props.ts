import { type PropType } from 'vue'

import {
  type MaskItem,
  type MaskTypeItem
} from './typesBasic.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type MaskProps = {
  // Values
  mask?: MaskItem

  // Options
  type?: MaskTypeItem

  // Tokens
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsMask: MaskProps = {
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

  // Options
  type: {
    type: String as PropType<MaskProps['type']>,
    default: defaultsMask?.type
  },

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
