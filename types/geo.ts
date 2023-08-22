import { RefOrNormalType } from './ref.ts'

export type GeoCodeType = RefOrNormalType<string>
export type GeoDateType = 'datetime' | 'date' | 'month' | 'time' | 'second'
export type GeoFirstDayType = 1 | 6 | 0
export type GeoHoursType = '12' | '24'
export type GeoTimeZoneStyleType = 'minute' | 'hour' | 'ISO8601' | 'RFC'

export interface GeoType {
  country: string
  countryAlternative?: string[]
  language: string
  languageAlternative?: string[]
  firstDay?: string | null
  zone?: string | null
  phoneCode?: string
  phoneMask?: string | string[]
}
