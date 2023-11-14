import { GeoDate } from '../../types/geo.ts'

export type MaskTypeItem = GeoDate | 'text' | 'number' | 'currency'
export type MaskValue = string | string[]
export type MaskItem = {
  value?: MaskValue
}

export type MaskGroupItem = {
  index: string
  value: string
  maxLength: number
  full: boolean
  chars: string[]
}
export type MaskGroup = Record<string, MaskGroupItem>

export type MaskPatternItem = {
  type: string
  min: string
  max: string
}
export type MaskPattern = string | MaskPatternItem | ((item: MaskGroup) => string | MaskPatternItem)
export type MaskPatternList = Record<string, MaskPattern>

export type MaskEventData = {
  value: string
}
