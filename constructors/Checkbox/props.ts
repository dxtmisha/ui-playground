import { type PropType } from 'vue'

import type { ImageProps } from '../Image/props.ts'

import {
  type InputBasicProps,
  propsBasicInput
} from '../Input/props.ts'

import {
  type UseFieldMessageProps,
  usePropsFieldMessage
} from '../FieldMessage/useFieldMessageRef.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type CheckboxProps =
  Omit<
    InputBasicProps,
    'type' |
    'inputmode' |
    'spellcheck' |
    'pattern' |
    'match' |
    'arrow' |
    'step' |
    'min' |
    'max' |
    'minlength' |
    'maxlength' |
    'placeholder'
  > &
  UseFieldMessageProps &
  {
    // Values
    icon?: string | ImageProps
    indeterminate?: boolean

    // Styles
    iconCheckbox?: string
    iconIndeterminate?: string

    // Tokens
    // :type [!] System label / Системная метка
    comp?: boolean
    required?: boolean
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
  ...usePropsFieldMessage,

  // Values
  value: [String, Boolean],
  modelValue: [String, Boolean],
  icon: [String, Object] as PropType<CheckboxProps['icon']>,
  indeterminate: Boolean,

  // Styles
  iconCheckbox: String,
  iconIndeterminate: String,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    comp: Boolean,
    required: Boolean
    // :prop [!] System label / Системная метка
  }
}
