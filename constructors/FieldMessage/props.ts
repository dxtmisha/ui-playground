// import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type FieldMessageProps = {
  // Status
  disabled?: boolean

  // Values
  counter?: string | number
  maxlength?: string | number

  // Message
  helperMessage?: string
  validationMessage?: string

  // Tokens
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldMessage: FieldMessageProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsFieldMessage = {
  // Status
  disabled: Boolean,

  // Values
  counter: [String, Number],
  maxlength: [String, Number],

  // Message
  helperMessage: String,
  validationMessage: String,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
