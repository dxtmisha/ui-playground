// import { type PropType } from 'vue'

import {
  CheckboxProps,
  defaultsCheckbox,
  propsCheckbox
} from '../../constructors/Checkbox/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  required?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<CheckboxProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsCheckbox,

  iconCheckbox: 'check',
  iconIndeterminate: 'indeterminate',

  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsCheckbox,

  iconCheckbox: {
    type: propsCheckbox.iconCheckbox,
    default: defaults.iconCheckbox
  },
  iconIndeterminate: {
    type: propsCheckbox.iconIndeterminate,
    default: defaults.iconIndeterminate
  },

  ...{
    // :prop [!] System label / Системная метка
    required: Boolean
    // :prop [!] System label / Системная метка
  }
}
