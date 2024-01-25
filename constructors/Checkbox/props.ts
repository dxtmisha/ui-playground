// import { type PropType } from 'vue'

import type { ImageProps } from '../Image/props.ts'

import {
  type InputBasicProps,
  propsBasicInput
} from '../Input/props.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type CheckboxProps =
  InputBasicProps &
  {
    // Values
    icon?: string | ImageProps
    indeterminate?: boolean

    // Styles
    iconCheckbox?: string
    iconIndeterminate?: string

    // Tokens
    // :type [!] System label / Системная метка
    // :type [!] System label / Системная метка
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsCheckbox: CheckboxProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsCheckbox = {
  ...propsBasicInput,

  value: [String, Boolean],
  modelValue: [String, Boolean],

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
