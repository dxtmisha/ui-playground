// import { type PropType } from 'vue'

import {
  defaultsInputValue,
  type InputArrowProps,
  type InputMatchProps,
  type InputValidityProps,
  type InputValueProps,
  propsInputArrow,
  propsInputMatch,
  propsInputValidity,
  propsInputValue
} from './propsBasic.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type InputProps<V = string> =
  InputValueProps<V> &
  InputArrowProps &
  InputMatchProps &
  InputValidityProps &
  {
    // Tokens
    // :type [!] System label / Системная метка
    // :type [!] System label / Системная метка
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsInput: InputProps = {
  ...defaultsInputValue,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsInput = {
  ...propsInputValue,
  ...propsInputArrow,
  ...propsInputMatch,
  ...propsInputValidity,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
