import { isFilled } from './data.ts'
import { getEnv } from './env.ts'
import { getStorage, setStorage } from './storage.ts'

import geo from '../media/geo.json'

import { GeoType } from '../types/geo.ts'

const STORAGE_NAME_CODE = 'geo-code'

let location: string = findLocation()
let item = getByCode(location) as GeoType
let language: string = findLanguage(location)

/**
 * Information about the current country.<br>
 * Информация об текущей стране.
 */
export function getGeo (): GeoType {
  return item
}

/**
 * Current language.<br>
 * Текущий язык.
 */
export function getLanguage (): string {
  return language
}

/**
 * Current country.<br>
 * Текущая страна.
 */
export function getCountry (): string {
  return item?.country ?? findCountry()
}

/**
 * Full format according to the standard.<br>
 * Полный формат согласно стандарту.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
export function getGeoStandard (code?: GeoType): string {
  if (code) {
    return `${code?.language}-${code?.country}`
  }

  return `${item?.language ?? findLanguage()}-${item?.country ?? findCountry()}`
}

/**
 * Full format.<br>
 * Полный формат.
 */
export function getGeoCode (): string {
  return location
}

/**
 * Returns the full list of countries.<br>
 * Возвращает полный список стран.
 */
export function getGeoList (): GeoType[] {
  return geo
}

/**
 * Changes the data by the full code.<br>
 * Изменяет данные по полному коду.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 * @param save save the result /<br>сохранить результат
 */
export function setGeo (code: string, save?: boolean): void {
  const data = findGeo(code)

  item = {
    ...(data || getByCountry(findCountry()))
  } as GeoType

  if (data && save) {
    setStorage(STORAGE_NAME_CODE, code)
  }

  location = findLocation()
  language = findLanguage(code)
}

/**
 * Changes language.<br>
 * Изменяет язык.
 * @param language language /<br>язык
 * @param save save the result /<br>сохранить результат
 */
export function setLanguage (language: string, save?: boolean) {
  setGeo(`${language}-${getCountry()}`, save)
}

/**
 * Changes the country.<br>
 * Изменяет страну.
 * @param country language /<br>язык
 * @param save save the result /<br>сохранить результат
 */
export function setCountry (country: string, save?: boolean) {
  setGeo(`${getLanguage()}-${country}`, save)
}

/**
 * Determines the current country by its full name.<br>
 * Определяет текущую страну по ее полному названию.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
export function findGeo (code?: string): GeoType | undefined {
  if (code) {
    return getByCode(code)
  }

  return getGeo()
}

/**
 * Returns the full data by language and country.<br>
 * Возвращает полные данные по языку и стране.
 * @param code string in the form of language-country /<br>строка в виде язык-страна
 */
function get (code: string): GeoType | undefined {
  return getGeoList()?.find(
    item => `${item?.language}-${item?.country}` === code ||
      `${item?.country}-${item?.language}` === code
  )
}

/**
 * Returns the full data by language.<br>
 * Возвращает полные данные по языку.
 * @param language language /<br>язык
 */
function getByLanguage (language: string): GeoType | undefined {
  return getGeoList()?.find(item => {
    return item?.language === language ||
      item?.languageAlternative?.find(languageAlternative => languageAlternative === language)
  })
}

/**
 * Returns the full data by country.<br>
 * Возвращает полные данные по стране.
 * @param country country /<br>страна
 */
function getByCountry (country: string): GeoType | undefined {
  return getGeoList()?.find(item => {
    return item?.country === country ||
      item?.countryAlternative?.find(countryAlternative => countryAlternative === country)
  })
}

/**
 * Returns the data about the country by its full code.<br>
 * Возвращает данные о стране по ее полному коду.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
function getByCode (code?: string): GeoType | undefined {
  if (code) {
    if (code.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/)) {
      return get(code) ??
        getByCountry(toCountry(code)) ??
        getByLanguage(toLanguage(code))
    } else if (code.match(/^[a-z]{2}$/)) {
      return getByLanguage(code)
    } else if (code.match(/^[A-Z]{2}$/)) {
      return getByCountry(code)
    }
  }

  return undefined
}

/**
 * Determines the current location.<br>
 * Определяет текущую локацию.
 */
function findLocation (): string {
  return getStorage(STORAGE_NAME_CODE) ||
    document.querySelector('html')?.lang ||
    navigator.language ||
    navigator.languages[0] ||
    getEnv('language') ||
    'en-GB'
}

/**
 * Determines the current country.<br>
 * Определяет текущую страну.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
function findCountry (code?: string): string {
  const name = toCountry(code ?? findLocation())

  if (isFilled(name)) {
    return name
  }

  if (code) {
    return findCountry(item?.country)
  }

  return 'GB'
}

/**
 * Determines the current language.<br>
 * Определяет текущий язык.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
function findLanguage (code?: string): string {
  const name = toLanguage(code ?? findLocation())

  if (isFilled(name)) {
    return name
  }

  if (code) {
    return findLanguage(item?.language)
  }

  return 'ru'
}

/**
 * Returns the language code by its full language-country.<br>
 * Возвращает код языка по его полному язык-страна.
 * @param code country code /<br>код страна
 */
function toLanguage (code: string): string {
  return code.replace(/[^a-z]+/g, '')
}

/**
 * Returns the country code by its full language-country.<br>
 * Возвращает код страны по ее полному язык-страна.
 * @param code country code /<br>код страна
 */
function toCountry (code: string): string {
  return code.replace(/[^A-Z]+/g, '')
}

/**
 * We get the full code by the data of the country.<br>
 * Получаем полный код по данным страны.
 * @param data data /<br>данный
 */
// function toCode (data?: GeoType): string | undefined {
//  return data ? `${data?.language}-${data?.country}` : undefined
// }
