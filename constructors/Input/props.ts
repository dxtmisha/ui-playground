import { type PropType } from 'vue'

import type {
  InputMatch,
  InputMode,
  InputTypeName,
  InputValidityCode
} from './typesBasic.ts'

import {
  type UseLabelProps,
  usePropsLabel
} from '../uses/ref/useLabel.ts'

import {
  type UseEnabledProps,
  usePropsEnabled
} from '../uses/ref/useEnabled.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type InputBasicProps<V = any> =
  UseLabelProps &
  UseEnabledProps &
  {
    // Status
    selected?: boolean

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

    input?: Record<string, any>

    // Messages & Validation
    placeholder?: string
    helperMessage?: string,
    validationMessage?: string,
    validationCode?: InputValidityCode

    // On
    on?: Record<string, () => void>
    ['onUpdate:value']?: (value: V) => void
    ['onUpdate:modelValue']?: (value: V) => void
  }

export type InputProps =
  InputBasicProps<string> &
  {
    // Tokens
    // :type [!] System label / Системная метка
    // :type [!] System label / Системная метка
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsInput: InputBasicProps = {
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
export const propsBasicInput = {
  ...usePropsLabel,
  ...usePropsEnabled,

  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object as PropType<InputBasicProps['detail']>,

  // Input
  type: {
    type: String as PropType<InputBasicProps['type']>,
    default: defaultsInput.type
  },
  inputmode: String as PropType<InputBasicProps['inputmode']>,
  spellcheck: Boolean,

  required: Boolean,

  pattern: String,
  match: [String, HTMLInputElement, Object] as PropType<InputBasicProps['match']>,

  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],

  minlength: [String, Number],
  maxlength: [String, Number],

  autofocus: Boolean,
  autocomplete: {
    type: String as PropType<InputBasicProps['autocomplete']>,
    default: defaultsInput.autocomplete
  },

  input: Object as PropType<InputBasicProps['input']>,

  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object] as PropType<InputBasicProps['validationCode']>,

  // On
  on: Object,
  'onUpdate:value': Function as PropType<InputBasicProps['onUpdate:value']>,
  'onUpdate:modelValue': Function as PropType<InputBasicProps['onUpdate:modelValue']>
}

export const propsInput = {
  ...propsBasicInput,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    // :prop [!] System label / Системная метка
  }
}
