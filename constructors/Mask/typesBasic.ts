import { GeoDate } from '../../types/geo.ts'

export type MaskTypeItem = GeoDate | 'text' | 'number' | 'currency'

export type MaskGroupItem = {
  index: string
  value: string
  maxLength: number
  full: boolean
  chars: string[]
}
export type MaskGroup = Record<string, MaskGroupItem>

export type MaskMatchItem = RegExp | string
export type MaskFractionItem = string | boolean | number

export type MaskPatternElement = Partial<HTMLInputElement>
export type MaskPatternItem = string | MaskPatternElement
export type MaskPatternItemOrFunction = MaskPatternItem | ((item: MaskGroup) => MaskPatternItem)
export type MaskPatternList = Record<string, MaskPatternItemOrFunction>

export type MaskSpecialItem = {
  rubber?: boolean
  transitionChar?: string | string[]
  maxLength?: number
  minLength?: number
  match?: MaskMatchItem
  pattern?: MaskPatternItemOrFunction
}
export type MaskSpecialInfo = {
  index: number
  key: number
  char: string
}
export type MaskSpecialList = Record<string, MaskSpecialItem>
export type MaskSpecialProp = string | string[] | MaskSpecialList

export type MaskList = string | string[]

export type MaskEventData = {
  value: string
}
