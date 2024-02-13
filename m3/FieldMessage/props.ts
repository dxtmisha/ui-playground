// import { type PropType } from 'vue'

import {
  FieldMessageProps,
  defaultsFieldMessage,
  propsFieldMessage
} from '../../constructors/FieldMessage/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] disabled?: boolean
  // [constructor] counter?: string | number
  // [constructor] maxlength?: string | number
  // [constructor] helperMessage?: string
  // [constructor] validationMessage?: string
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<FieldMessageProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsFieldMessage,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsFieldMessage,
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
