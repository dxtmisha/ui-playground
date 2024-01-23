import { type PropType } from 'vue'

import {
  type InputMatch,
  type InputTypeName,
  type InputValidityCode
} from './typesBasic.ts'

export type InputValueProps<V = any> = {
  type?: InputTypeName
  value?: V
  modelValue?: V
  detail?: Record<string, any> | undefined

  placeholder?: string
}

export type InputArrowProps = {
  arrow?: boolean
  min?: string | number
  max?: string | number
  step?: string | number
}

export type InputMatchProps = {
  match?: InputMatch
}

export type InputValidityProps = {
  validationMessage?: string,
  validationCode?: InputValidityCode
}

export const defaultsInputValue: InputValueProps = {
  type: 'text'
}

export const propsInputValue = {
  type: String as PropType<InputValueProps['type']>,
  value: String,
  modelValue: String,
  detail: Object as PropType<InputValueProps['detail']>,

  placeholder: String
}

export const propsInputArrow = {
  arrow: Boolean,
  min: [String, Number],
  max: [String, Number],
  step: [String, Number]
}

export const propsInputMatch = {
  match: [String, HTMLInputElement, Object] as PropType<InputMatchProps['match']>
}

export const propsInputValidity = {
  validationMessage: String,
  validationCode: [String, Object] as PropType<InputValidityProps['validationCode']>
}
