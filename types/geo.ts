export type GeoDate =
  'full' |
  'datetime' |
  'date' |
  'year-month' |
  'year' |
  'month' |
  'day' |
  'time' |
  'hour-minute' |
  'hour' |
  'minute' |
  'second'
export type GeoFirstDay = 1 | 6 | 0
export type GeoHours = '12' | '24'
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC'

export interface GeoItem {
  country: string
  countryAlternative?: string[]
  language: string
  languageAlternative?: string[]
  firstDay?: string | null
  zone?: string | null
  phoneCode?: string
  phoneMask?: string | string[]
}

export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  standard: string
  firstDay: string
}
