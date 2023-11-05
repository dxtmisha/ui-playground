import { type PropType } from 'vue'

import {
  ProgressProps,
  defaultsProgress,
  propsProgress
} from '../../constructors/Progress/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  indeterminate: ['type1', 'type2'],
  position: ['top', 'bottom']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] value?: number
  // [constructor] max?: number
  // [constructor] visible?: boolean
  // [constructor] delay?: number
  linear?: boolean
  circular?: boolean
  indeterminate?: 'type1' | 'type2'
  position?: 'top' | 'bottom'
  dense?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ProgressProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsProgress,
  ...{
    // :default [!] System label / Системная метка
    linear: true,
    indeterminate: 'type1',
    position: 'top'
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsProgress,
  ...{
    // :prop [!] System label / Системная метка
    linear: {
      type: Boolean,
      default: defaults?.linear
    },
    circular: Boolean,
    indeterminate: {
      type: String as PropType<PropsToken['indeterminate']>,
      default: defaults?.indeterminate
    },
    position: {
      type: String as PropType<PropsToken['position']>,
      default: defaults?.position
    },
    dense: Boolean,
    inverse: Boolean
    // :prop [!] System label / Системная метка
  }
}
