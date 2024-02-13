import { toDate } from '../functions/date'
import { toNumber } from '../functions/number'

import { Geo } from './Geo'
import {
  type GeoDate,
  type GeoItemFull
} from '../types/geo'

import {
  type NumberOrStringOrDate,
  type NumberOrString
} from '../types/basic'
import { type ItemValue } from '../types/object'

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
export class GeoIntl {
  private readonly geo: GeoItemFull

  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor (code: string = Geo.getLocation()) {
    this.geo = Geo.find(code)

    const location = this.getLocation()

    if (location in items) {
      return items[location]
    }

    items[location] = this
  }

  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation (): string {
    return this.geo.standard
  }

  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay (): string {
    return this.geo.firstDay
  }

  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display (
    value?: string,
    typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions
  ): string {
    let options: Intl.DisplayNamesOptions = { type: 'language' }
    let text

    if (typeOptions) {
      if (typeof typeOptions === 'string') {
        options.type = typeOptions
      } else {
        options = {
          ...options,
          ...typeOptions
        }
      }
    }

    try {
      if (value) {
        text = new Intl.DisplayNames(this.getLocation(), options).of(value)
      } else if (options.type === 'language') {
        text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.language)
      } else if (options.type === 'region') {
        text = new Intl.DisplayNames(this.getLocation(), options).of(this.geo.country)
      }
    } catch (e) {
    }

    return text ?? value ?? ''
  }

  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName (
    value?: string,
    style?: Intl.RelativeTimeFormatStyle
  ): string {
    const options: Intl.DisplayNamesOptions = {
      type: 'language',
      style
    }

    return this.display(value, options)
  }

  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName (
    value?: string,
    style?: Intl.RelativeTimeFormatStyle
  ): string {
    const options: Intl.DisplayNamesOptions = {
      type: 'region',
      style
    }

    return this.display(value, options)
  }

  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number (
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.numberObject(options)?.format?.(toNumber(value)) || value.toString()
  }

  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal (): string {
    return this.numberObject()
      ?.formatToParts?.(1.2)
      ?.find?.(item => item.type === 'decimal')?.value || '.'
  }

  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency (
    value: NumberOrString,
    currencyOptions?: string | Intl.NumberFormatOptions,
    numberOnly = false
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'currency',
      currencyDisplay: 'symbol',
      ...(typeof currencyOptions === 'string' ? { currency: currencyOptions } : currencyOptions || {})
    })

    const number: string = value
      .toString()
      .replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...text: string[]): string => {
        options.currency = text[2].toUpperCase()
        return text[1]
      })

    if (numberOnly) {
      const object = this.numberObject(options)

      if (object) {
        return object.formatToParts(toNumber(value))
          .filter(item => ['literal', 'currency'].indexOf(item.type) === -1)
          .join('')
      } else {
        return value.toString()
      }
    } else {
      return this.number(number, options)
    }
  }

  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit (
    value: NumberOrString,
    unitOptions?: string | Intl.NumberFormatOptions
  ): string {
    const options: Intl.NumberFormatOptions = ({
      style: 'unit',
      ...(typeof unitOptions === 'string' ? { unit: unitOptions } : unitOptions || {})
    })

    const number: string = value
      .toString()
      .replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...text: string[]): string => {
        options.unit = text[2].toLowerCase()
        return text[1]
      })

    return this.number(number, options)
  }

  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent (
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.number(value, {
      style: 'percent',
      ...(options || {})
    })
  }

  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100 (
    value: NumberOrString,
    options?: Intl.NumberFormatOptions
  ): string {
    return this.percent(toNumber(value) / 100, options)
  }

  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date (
    value: NumberOrStringOrDate,
    type?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    hour24?: boolean
  ): string {
    const date = toDate(value)

    const isDisplay = typeof styleOptions === 'string'
    const options = this.dateOptions(type, isDisplay ? styleOptions : 'short')

    if (hour24) {
      options.hour12 = false
    }

    if (!isDisplay) {
      Object.assign(options, styleOptions)
    }

    return date.toLocaleString(this.getLocation(), options)
  }

  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative (
    value: NumberOrStringOrDate,
    styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    todayValue?: Date
  ): string {
    const date = toDate(value)
    const today = todayValue || new Date()
    const options: Intl.RelativeTimeFormatOptions = ({
      numeric: 'auto',
      ...(typeof styleOptions === 'string' ? { style: styleOptions } : styleOptions || {})
    })

    let unit: Intl.RelativeTimeFormatUnit = 'second'
    let relative = (date.getTime() - today.getTime()) / 1000

    if (Math.abs(relative) >= 60) {
      unit = 'minute'
      relative /= 60

      if (Math.abs(relative) >= 60) {
        unit = 'hour'
        relative /= 60

        if (Math.abs(relative) >= 24) {
          unit = 'day'
          relative /= 24

          if (Math.abs(relative) >= 30) {
            unit = 'month'
            relative /= 30

            if (Math.abs(relative) >= 12) {
              unit = 'year'
              relative /= 12
            }
          }
        }
      }
    }

    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), options).format(Math.round(relative), unit)
    } catch (e) {
    }

    return ''
  }

  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit (
    value: NumberOrStringOrDate,
    limit: number,
    todayValue?: Date,
    relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions,
    dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions,
    type?: GeoDate,
    hour24?: boolean
  ): string {
    const date = toDate(value)
    const today = todayValue || new Date()
    const limitValueIn = (new Date(today))
    const limitValueOut = (new Date(today))

    limitValueIn.setDate(today.getDate() - limit)
    limitValueOut.setDate(today.getDate() + limit)

    if (
      date >= limitValueIn &&
      date <= limitValueOut
    ) {
      return this.relative(
        date,
        relativeOptions,
        today
      )
    } else {
      return this.date(
        date,
        type,
        dateOptions,
        hour24
      )
    }
  }

  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month (
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['month']
  ): string {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })
        .format(toDate(value))
    } catch {
    }

    return ''
  }

  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months (
    style?: Intl.DateTimeFormatOptions['month']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      const date = new Date()
      const format = Intl.DateTimeFormat(this.getLocation(), { month: style || 'long' })

      for (let i = 0; i < 12; i++) {
        date.setMonth(i)
        list.push({
          label: format.format(date)
            .replace(/^./, (character) => character.toUpperCase()),
          value: i + 1
        })
      }
    } catch {
    }

    return list
  }

  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday (
    value?: NumberOrStringOrDate,
    style?: Intl.DateTimeFormatOptions['weekday']
  ): string {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
        .format(toDate(value))
    } catch {
    }

    return ''
  }

  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays (
    style?: Intl.DateTimeFormatOptions['weekday']
  ): ItemValue<number | undefined>[] {
    const list: ItemValue<number | undefined>[] = [{
      label: '',
      value: undefined
    }]

    try {
      const date = new Date()
      const format = Intl.DateTimeFormat(this.getLocation(), { weekday: style || 'long' })
      const current = date.getDay() + (this.geo.firstDay === 'Mo' ? -1 : 1)

      date.setDate(date.getDate() - current)

      for (let i = 0; i < 7; i++) {
        list.push({
          label: format
            .format(date)
            .replace(/^./, (character) => character.toUpperCase()),
          value: date.getDay()
        })

        date.setDate(date.getDate() + 1)
      }
    } catch {
    }

    return list
  }

  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time (value: NumberOrStringOrDate): string {
    return this.date(value, 'time')
  }

  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort<T> (
    data: T[],
    compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]
  ) {
    const collator = new Intl.Collator(this.getLocation())

    return data.sort((a, b) => collator.compare(...compareFn(a, b)))
  }

  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  private numberObject (options?: Intl.NumberFormatOptions): Intl.NumberFormat | undefined {
    try {
      return new Intl.NumberFormat(this.getLocation(), options)
    } catch (e) {
    }

    return undefined
  }

  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  private dateOptions (
    type?: GeoDate,
    display: Intl.DateTimeFormatOptions['month'] = 'short'
  ): Intl.DateTimeFormatOptions {
    const options: Intl.DateTimeFormatOptions = {}

    if (['full', 'datetime', 'date', undefined, 'year-month', 'year'].indexOf(type) !== -1) {
      options.year = 'numeric'
    }

    if (['full', 'datetime', 'date', undefined, 'year-month', 'month'].indexOf(type) !== -1) {
      options.month = display
    }

    if (['full', 'datetime', 'date', undefined, 'day'].indexOf(type) !== -1) {
      options.day = '2-digit'
    }

    if (type !== undefined) {
      if (['full', 'datetime', 'time', 'hour-minute', 'hour'].indexOf(type) !== -1) {
        options.hour = '2-digit'
      }

      if (['full', 'datetime', 'time', 'hour-minute', 'minute'].indexOf(type) !== -1) {
        options.minute = '2-digit'
      }

      if (['full', 'time', 'second'].indexOf(type) !== -1) {
        options.second = '2-digit'
      }
    }

    return options
  }
}

const items: Record<string, GeoIntl> = {}
