import { GeoDate } from '../../types/geo.ts'

import {
  type InputPatternItemOrFunction,
  type InputValidationItem
} from '../Input/typesBasic.ts'

export type MaskTypeItem = GeoDate | 'text' | 'number' | 'currency'
export type MaskElementInput = HTMLInputElement | undefined
export type MaskElementCharacter = HTMLSpanElement | undefined

export type MaskGroupItem = {
  group: string
  value: string
  maxLength: number
  full: boolean
  chars: string[]
}
export type MaskGroup = Record<string, MaskGroupItem>

export type MaskMatchItem = RegExp | string
export type MaskFractionItem = string | boolean | number

export type MaskSpecialItem = {
  rubber?: boolean
  transitionChar?: string | string[]
  maxLength?: number
  minLength?: number
  match?: MaskMatchItem
  pattern?: InputPatternItemOrFunction
  view?: string
}
export type MaskSpecialInfo = {
  index: number
  key: number
  char: string
}
export type MaskSpecialList = Record<string, MaskSpecialItem>
export type MaskSpecialProp = string | string[] | MaskSpecialList

export type MaskViewItem = {
  className: string
  value: string
}
export type MaskViewList = MaskViewItem[]

export type MaskList = string | string[]

export type MaskEventData = InputValidationItem<string, 'focus' | 'blur' | 'keydown' | 'input' | 'change'>
export type MaskEventSelection = {
  target: HTMLInputElement
  start: number
  end: number
  length: number
}
