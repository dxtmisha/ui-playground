import { isSelected } from './data.ts'
import { getEnv } from './env.ts'
import { getStorage, setStorage } from './storage.ts'

import geo from '../media/geo.json'

import { GeoType } from '../types/geo.ts'
import { copyObject } from './object.ts'

const STORAGE_NAME_CODE = 'geo-code'

let location: string = findLocation()
let item: GeoType = getByCode(location)
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
  return item.country
}

/**
 * Returns the first day of the week.<br>
 * Возвращает первый день недели.
 * @param geo object with data about the current country /<br>
 * объект с данными об текущей стране
 */
export function getFirstDay (geo?: GeoType): string {
  return (geo ? geo?.firstDay : item?.firstDay) || 'Mo'
}

/**
 * Full format according to the standard.<br>
 * Полный формат согласно стандарту.
 */
export function getGeoStandard (): string {
  return toGeoStandard(item)
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
  location = code
  item = findGeo(location)
  language = findLanguage(location)

  if (save) {
    setStorage(STORAGE_NAME_CODE, location)
  }
}

/**
 * Changes language.<br>
 * Изменяет язык.
 * @param language language /<br>язык
 * @param save save the result /<br>сохранить результат
 */
export function setLanguage (language: string, save?: boolean): void {
  setGeo(`${language}-${getCountry()}`, save)
}

/**
 * Changes the country.<br>
 * Изменяет страну.
 * @param country language /<br>язык
 * @param save save the result /<br>сохранить результат
 */
export function setCountry (country: string, save?: boolean): void {
  setGeo(`${getLanguage()}-${country}`, save)
}

/**
 * Determines the current country by its full name.<br>
 * Определяет текущую страну по ее полному названию.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
export function findGeo (code?: string): GeoType {
  if (code) {
    return getByCode(code)
  }

  return getGeo()
}

/**
 * Converts to standard codes to determine language and country.<br>
 * Преобразует в стандартные коды для определения языка и страны.
 * @param geo object with data about the current country /<br>
 * объект с данными об текущей стране
 */
export function toGeoStandard (geo: GeoType): string {
  return `${geo.language}-${geo.country}`
}

/**
 * Returns the full data by language and country.<br>
 * Возвращает полные данные по языку и стране.
 * @param code string in the form of language-country /<br>строка в виде язык-страна
 */
function get (code: string): GeoType | undefined {
  return getGeoList().find(
    item => isSelected(code, [
      `${item.language}-${item.country}`,
      `${item.country}-${item.language}`
    ])
  )
}

/**
 * Returns the full data by language.<br>
 * Возвращает полные данные по языку.
 * @param language language /<br>язык
 */
function getByLanguage (language: string): GeoType | undefined {
  return getGeoList().find(item => {
    return item.language === language ||
      item?.languageAlternative?.find(languageAlternative => languageAlternative === language)
  })
}

/**
 * Returns the full data by country.<br>
 * Возвращает полные данные по стране.
 * @param country country /<br>страна
 */
function getByCountry (country: string): GeoType | undefined {
  return getGeoList().find(item => {
    return item.country === country ||
      item?.countryAlternative?.find(countryAlternative => countryAlternative === country)
  })
}

/**
 * Returns the data about the country by its full code.<br>
 * Возвращает данные о стране по ее полному коду.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
function getByCode (code?: string): GeoType {
  let item: GeoType | undefined

  if (code) {
    if (code.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/)) {
      item = get(code)
    }

    if (!item && code.match(/[a-z]{2}/)) {
      item = getByLanguage(toLanguage(code))
    }

    if (!item && code.match(/[A-Z]{2}/)) {
      item = getByCountry(toCountry(code))
    }
  }

  return copyObject(item ?? getGeoList()[0])
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
 * Determines the current language.<br>
 * Определяет текущий язык.
 * @param code country code, full form language-country or one of them /<br>
 * код страны, полный вид язык-страна или один из них
 */
function findLanguage (code?: string): string {
  if (code && code.match(/[a-z]{2}/)) {
    return toLanguage(code)
  }

  return item.language
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
