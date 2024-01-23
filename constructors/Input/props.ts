import { type PropType } from 'vue'

import type {
  InputMatch,
  InputMode,
  InputTypeName,
  InputValidityCode
} from './typesBasic.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type InputProps<V = any> = {
  // Status
  readonly?: boolean
  disabled?: boolean

  // Values
  name?: string
  value?: V
  modelValue?: V
  detail?: Record<string, any>

  // Input
  type?: InputTypeName
  inputmode?: InputMode
  spellcheck?: boolean

  required?: boolean

  pattern?: string
  match?: InputMatch

  arrow?: boolean
  step?: string | number
  min?: string | number
  max?: string | number

  minlength?: string | number
  maxlength?: string | number

  autofocus?: boolean
  autocomplete?: HTMLInputElement['autocomplete']

  input?: Partial<HTMLInputElement>

  // Messages & Validation
  placeholder?: string
  validationMessage?: string,
  validationCode?: InputValidityCode

  // Tokens
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsInput: InputProps = {
  type: 'text',
  autocomplete: 'off',
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
  // Status
  readonly: Boolean,
  disabled: Boolean,

  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object as PropType<InputProps['detail']>,

  // Input
  type: String as PropType<InputProps['type']>,
  inputmode: String as PropType<InputProps['inputmode']>,
  spellcheck: Boolean,

  required: Boolean,

  pattern: String,
  match: [String, HTMLInputElement, Object] as PropType<InputProps['match']>,

  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],

  minlength: [String, Number],
  maxlength: [String, Number],

  autofocus: Boolean,
  autocomplete: String as PropType<InputProps['autocomplete']>,

  input: Object as PropType<InputProps['input']>,

  // Messages & Validation
  placeholder: String,
  validationMessage: String,
  validationCode: [String, Object] as PropType<InputProps['validationCode']>,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
