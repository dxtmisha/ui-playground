import { computed, ComputedRef, Ref } from 'vue'
import { toRefItem } from '../functions/ref.ts'

import { useGeo } from './useGeo.ts'
import { GeoIntl } from '../classes/GeoIntl.ts'

import { NumberOrStringType } from '../types/basic.ts'
import { RefOrValueType } from '../types/ref.ts'

const geo = useGeo()
const geoIntl = computed<GeoIntl>(() => new GeoIntl(geo.standard))

/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций
 */
export function useIntl (): ComputedRef<GeoIntl> {
  return geoIntl
}

/**
 * The consistent translation of language, region and script display names.<br>
 * Последовательный перевод отображаемых названий языка, региона и скрипта.
 * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
 * @param typeOptions an object with some or all of the following properties /<br>
 * объект с некоторыми или всеми из следующих свойств
 */
export function useDisplay (
  value?: RefOrValueType<string>,
  typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
): [ComputedRef<string>, Ref<string | undefined>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.display(item.value, typeOptions))

  return [format, item]
}

/**
 * Get display names of language.<br>
 * Получить отображаемые имена языка.
 * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
 * @param style the formatting style to use /<br>используемый стиль форматирования
 */
export function useLanguageName (
  value?: RefOrValueType<string>,
  style?: Intl.RelativeTimeFormatStyle
): [ComputedRef<string>, Ref<string | undefined>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.languageName(item.value, style))

  return [format, item]
}

/**
 * Get display names of region.<br>
 * Получить отображаемые имена региона.
 * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
 * @param style the formatting style to use /<br>используемый стиль форматирования
 */
export function useCountryName (
  value?: RefOrValueType<string>,
  style?: Intl.RelativeTimeFormatStyle
): [ComputedRef<string>, Ref<string | undefined>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.countryName(item.value, style))

  return [format, item]
}

/**
 * In basic use without specifying a locale, a formatted string.<br>
 * При обычном использовании без указания локали форматированная строка<br>
 * @param value a number, bigint, or string, to format /<br>число для форматирования
 * @param options an object with some or all properties /<br>объект с некоторыми
 * или всеми свойствами
 */
export function useNumber<T extends NumberOrStringType> (
  value: RefOrValueType<T>,
  options?: Intl.NumberFormatOptions
): [ComputedRef<string>, Ref<T>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.number(item.value, options))

  return [format, item]
}

/**
 * Decimal point symbol.<br>
 * Символ десятичной точки.
 */
export function useDecimal (): ComputedRef<string> {
  return computed<string>(() => geoIntl.value.decimal())
}

/**
 * Currency formatting.<br>
 * Форматирование валюты.
 * @param value a number, bigint, or string, to format /<br>число для форматирования
 * @param currencyOptions the currency to use in currency formatting /<br>
 * валюта для использования в форматировании валюты
 * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
 */
export function useCurrency<T extends NumberOrStringType> (
  value: RefOrValueType<T>,
  currencyOptions?: RefOrValueType<string | Intl.NumberFormatOptions>,
  numberOnly = false
): [ComputedRef<string>, Ref<T>, Ref<string | Intl.NumberFormatOptions | undefined>] {
  const item = toRefItem(value)
  const currency = toRefItem(currencyOptions)
  const format = computed<string>(
    () => geoIntl.value.currency(item.value, currency.value, numberOnly)
  )

  return [format, item, currency]
}

/**
 * Unit formatting.
 * If the style is 'unit', a unit property must be provided.<br>
 * Форматирование юнитов.
 * @param value a number, bigint, or string, to format /<br>число для форматирования
 * @param unitOptions the unit to use in unit formatting /<br>блок для использования
 * в форматировании блока
 */
export function useUnit<T extends NumberOrStringType> (
  value: RefOrValueType<T>,
  unitOptions?: string | Intl.NumberFormatOptions
): [ComputedRef<string>, Ref<T>, Ref<string | Intl.NumberFormatOptions | undefined>] {
  const item = toRefItem(value)
  const unit = toRefItem(unitOptions)
  const format = computed<string>(() => geoIntl.value.unit(item.value, unit.value))

  return [format, item, unit]
}

/**
 * Number as a percentage.<br>
 * Число в виде процента.
 * @param value a number, bigint, or string, to format /<br>число для форматирования
 * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
 */
export function usePercent<T extends NumberOrStringType> (
  value: RefOrValueType<T>,
  options?: Intl.NumberFormatOptions
): [ComputedRef<string>, Ref<T>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.percent(item.value, options))

  return [format, item]
}

/**
 * Number as a percentage (unit).<br>
 * Число в виде процента (единица).
 * @param value a number, bigint, or string, to format /<br>число для форматирования
 * @param options an object with some or all properties /<br>
 * объект с некоторыми или всеми свойствами
 */
export function usePercentBy100<T extends NumberOrStringType> (
  value: RefOrValueType<T>,
  options?: Intl.NumberFormatOptions
): [ComputedRef<string>, Ref<T>] {
  const item = toRefItem(value)
  const format = computed<string>(() => geoIntl.value.percentBy100(item.value, options))

  return [format, item]
}
