import { toDate } from '../functions/date.ts'

import { Geo } from './Geo.ts'
import { GeoIntl } from './GeoIntl.ts'
import {
  type GeoDate,
  type GeoFirstDay,
  type GeoHours,
  type GeoTimeZoneStyle
} from '../types/geo.ts'

import { type NumberOrStringOrDate } from '../types/basic.ts'

/**
 * A class for working with dates.<br>
 * Класс для работы с датами.
 */
export class Datetime {
  protected date: Date
  protected hour24 = false
  protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void

  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor (
    date?: NumberOrStringOrDate,
    protected type: GeoDate = 'date',
    protected code: string = Geo.getLocation()
  ) {
    this.date = toDate(date)
  }

  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl (): GeoIntl {
    return new GeoIntl(this.code)
  }

  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate (): Date {
    return this.date
  }

  /**
   * Returns the type of data output.<br>
   * Возвращает тип вывода данных.
   */
  getType (): string {
    return this.type
  }

  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType (): GeoHours {
    const date = this.clone()
    date.setHours(23)

    return date.toLocaleTimeString(this.getIntl().getLocation(), { hour: '2-digit' })
      .match(/23/ig)
      ? '24'
      : '12'
  }

  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   */
  getHour24 (): boolean {
    return this.hour24
  }

  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.<br>
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset (): number {
    return this.date.getTimezoneOffset()
  }

  /**
   * Returns the time zone as a string.<br>
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data /<br>стиль возвращаемых данных
   */
  getTimeZone (style?: GeoTimeZoneStyle): string {
    const offset = this.getTimeZoneOffset()

    if (style === 'minute') {
      return offset.toString()
    }

    const hour = offset / 60 * -1

    if (style === 'hour') {
      return this.getIntl()
        .number(Math.trunc(hour), { signDisplay: 'always' })
    }

    const numberHour = this.getIntl()
      .number(Math.trunc(hour), {
        signDisplay: 'always',
        minimumIntegerDigits: 2
      })
    const numberMinute = hour.toString().match(/.\d+/) ? '30' : '00'

    if (style === 'RFC') {
      return `${numberHour}${numberMinute}`
    }

    return `${numberHour}:${numberMinute}`
  }

  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode (): GeoFirstDay {
    const value = this.getIntl().getFirstDay()

    if (value === 'Sa') {
      return 6
    } else if (value === 'Su') {
      return 0
    } else {
      return 1
    }
  }

  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear (): number {
    return this.date.getFullYear()
  }

  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth (): number {
    return this.date.getMonth() + 1
  }

  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay (): number {
    return this.date.getDate()
  }

  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour (): number {
    return this.date.getHours()
  }

  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute (): number {
    return this.date.getMinutes()
  }

  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond (): number {
    return this.date.getSeconds()
  }

  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay (): number {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0
  }

  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale (
    type: GeoDate = this.type,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  ): string {
    return this.getIntl().date(
      this.date,
      type,
      styleOptions,
      this.hour24
    )
  }

  /**
   * Returns the formatted year.<br>
   * Возвращает отформатированный год.
   * @param style the representation of the month /<br>представление месяца
   */
  localeYear (
    style: Intl.DateTimeFormatOptions['year'] = 'numeric'
  ): string {
    return this.locale('year', { year: style })
  }

  /**
   * Returns the formatted month.<br>
   * Возвращает отформатированный месяц.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMonth (
    style: Intl.DateTimeFormatOptions['month'] = 'long'
  ): string {
    return this.locale('month', { month: style })
  }

  /**
   * Returns the formatted day.<br>
   * Возвращает отформатированный день.
   * @param style the representation of the month /<br>представление месяца
   */
  localeDay (
    style: Intl.DateTimeFormatOptions['day'] = 'numeric'
  ): string {
    return this.locale('day', { day: style })
  }

  /**
   * Returns the formatted hour.<br>
   * Возвращает отформатированный час.
   * @param style the representation of the month /<br>представление месяца
   */
  localeHour (
    style: Intl.DateTimeFormatOptions['hour'] = 'numeric'
  ): string {
    return this.locale('hour', { hour: style })
  }

  /**
   * Returns the formatted minute.<br>
   * Возвращает отформатированную минуту.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMinute (
    style: Intl.DateTimeFormatOptions['minute'] = 'numeric'
  ): string {
    return this.locale('minute', { minute: style })
  }

  /**
   * Returns the formatted second.<br>
   * Возвращает отформатированную секунду.
   * @param style the representation of the month /<br>представление месяца
   */
  localeSecond (
    style: Intl.DateTimeFormatOptions['second'] = 'numeric'
  ): string {
    return this.locale('second', { second: style })
  }

  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard (timeZone = true as boolean): string {
    const geo = new Datetime(this.date, this.type, 'en-GB')
    const date: string[] = []
    let time: string | undefined

    geo.setHour24(false)

    if (this.type === 'hour-minute') {
      time = geo.locale(this.type, {
        year: 'numeric',
        month: '2-digit',
        hour12: false
      })
    } else {
      if (['full', 'datetime', 'date', 'year-month', 'year', 'month', 'day'].indexOf(this.type) !== -1) {
        date.push(geo.localeYear())
        date.push(geo.localeMonth('2-digit'))
      }

      if (['full', 'datetime', 'date', 'year', 'month', 'day'].indexOf(this.type) !== -1) {
        date.push(geo.localeDay('2-digit'))
      }

      if (['full', 'datetime', 'time', 'hour', 'minute', 'second'].indexOf(this.type) !== -1) {
        time = geo.locale('time')
      }
    }

    return `${date.join('-')}${time ? `T${time}${timeZone ? geo.getTimeZone() : ''}` : ''}`
  }

  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate (value: NumberOrStringOrDate): this {
    this.date = toDate(value)
    this.update()

    return this
  }

  /**
   * Change the type of data output.<br>
   * Изменить тип вывода данных.
   * @param value type of output /<br>тип вывод
   */
  setType (value: GeoDate): this {
    this.type = value
    this.update()

    return this
  }

  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format /<br>
   * если true, выводить 12-часовой формат времени
   */
  setHour24 (value: boolean): this {
    this.hour24 = value
    this.update()

    return this
  }

  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode (code: string): this {
    this.code = code
    return this
  }

  /**
   * The function is called when the data is updated.<br>
   * Функция вызывается при обновлении данных.
   * @param watch the function calls /<br>функция вызывает
   */
  setWatch (watch: (date: Date, type: GeoDate, hour24: boolean) => void): this {
    this.watch = watch
    return this
  }

  /**
   * The method sets the full year for a specified date according to local time.<br>
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setYear (value: number): this {
    this.date.setFullYear(value)
    this.update()

    return this
  }

  /**
   * The method sets the month for a specified date according to the currently set year.<br>
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setMonth (value: number): this {
    this.date.setMonth(value - 1)
    this.update()

    return this
  }

  /**
   * The method changes the day of the month of a given Date instance, based on local time.<br>
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setDay (value: number): this {
    this.date.setDate(value)
    this.update()

    return this
  }

  /**
   * The method sets the hours for a specified date according to local time.<br>
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setHour (value: number): this {
    this.date.setHours(value)
    this.update()

    return this
  }

  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute (value: number): this {
    this.date.setMinutes(value)
    this.update()

    return this
  }

  /**
   * The method sets the seconds for a specified date according to local time.<br>
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setSecond (value: number): this {
    this.date.setSeconds(value)
    this.update()

    return this
  }

  /**
   * Shift the date by a given value in years.<br>
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByYear (value: number): this {
    this.setYear(this.date.getFullYear() + value)
    return this
  }

  /**
   * Shift the date by a given value in months.<br>
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMonth (value: number): this {
    this.setMonth(this.date.getMonth() + 1 + value)
    return this
  }

  /**
   * Shift the date by a given value in days.<br>
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByDay (value: number): this {
    this.setDay(this.date.getDate() + value)
    return this
  }

  /**
   * Shift the date by a given value in hours.<br>
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByHour (value: number): this {
    this.setHour(this.date.getHours() + value)
    return this
  }

  /**
   * Shift the date by a given value in minutes.<br>
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMinute (value: number): this {
    this.setMinute(this.date.getMinutes() + value)
    return this
  }

  /**
   * Shift the date by a given value in seconds.<br>
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveBySecond (value: number): this {
    this.setSecond(this.date.getSeconds() + value)
    return this
  }

  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthFirst (): this {
    this.setMonth(1)
    return this
  }

  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthLast (): this {
    this.setMonth(12)
    return this
  }

  /**
   * Translate to the first day of the next month.<br>
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext (): this {
    this.setDay(1)
      .moveByMonth(+1)

    return this
  }

  /**
   * Translate to the first day of the previous month.<br>
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious (): this {
    this.setDay(1)
      .moveByMonth(-1)

    return this
  }

  /**
   * Translate to the first day of the week.<br>
   * Переводить на первый день недели.
   */
  moveWeekdayFirst (): this {
    const weekday = this.date.getDay()
    const weekdayFirst = this.getFirstDayCode()

    this.moveByDay(
      (weekdayFirst === 6 ? -1 : weekdayFirst) - weekday
    )

    return this
  }

  /**
   * Translate to the last day of the week.<br>
   * Переводить на последний день недели.
   */
  moveWeekdayLast (): this {
    this.moveWeekdayFirst()
      .moveByDay(6)

    return this
  }

  /**
   * Translate to the first day of the first week of the month.<br>
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth (): this {
    this.moveDayFirst()
      .moveWeekdayFirst()

    return this
  }

  /**
   * Translate to the first day of the first full week of the following month.<br>
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth (): this {
    this.moveDayLast()
      .moveWeekdayLast()

    return this
  }

  /**
   * Translate to the next week.<br>
   * Переводить на следующую неделю.
   */
  moveWeekdayNext (): this {
    this.moveWeekdayFirst()
      .moveByDay(7)

    return this
  }

  /**
   * Translate to the previous week.<br>
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious (): this {
    this.moveWeekdayFirst()
      .moveByDay(-7)

    return this
  }

  /**
   * Translate to the first day of the month.<br>
   * Переводить на первый день месяца.
   */
  moveDayFirst (): this {
    this.setDay(1)
    return this
  }

  /**
   * Translate to the last day of the month.<br>
   * Переводить на последний день месяца.
   */
  moveDayLast (): this {
    this.setDay(1)
      .moveByMonth(1)
      .moveByDay(-1)

    return this
  }

  /**
   * Translate to the next day.<br>
   * Переводить на следующий день.
   */
  moveDayNext (): this {
    this.moveByDay(+1)
    return this
  }

  /**
   * Translate to the previous day.<br>
   * Переводить на предыдущий день.
   */
  moveDayPrevious (): this {
    this.moveByDay(-1)
    return this
  }

  /**
   * Clone the Date object.<br>
   * Клонировать объект Date.
   */
  clone (): Date {
    return new Date(this.date)
  }

  /**
   * Clone the GeoDate object.<br>
   * Клонировать объект GeoDate.
   */
  cloneClass (): Datetime {
    return new (this.constructor as typeof Datetime)(
      this.clone(),
      this.type,
      this.code
    )
  }

  /**
   * Clone the GeoDate object and set the month to January.<br>
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst (): Datetime {
    return this.cloneClass()
      .moveMonthFirst()
  }

  /**
   * Clone the GeoDate object and move the month to the end of the year.<br>
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast (): Datetime {
    return this.cloneClass()
      .moveMonthLast()
  }

  /**
   * Clone the GeoDate object and transfer it one month ahead.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext (): Datetime {
    return this.cloneClass()
      .moveMonthNext()
  }

  /**
   * Clone the GeoDate object and transfer it one month back.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious (): Datetime {
    return this.cloneClass()
      .moveMonthPrevious()
  }

  /**
   * Returns the first day of the week according to the current date.<br>
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst (): Datetime {
    return this.cloneClass()
      .moveWeekdayFirst()
  }

  /**
   * Returns the last day of the week according to the current date.<br>
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast (): Datetime {
    return this.cloneClass()
      .moveWeekdayLast()
  }

  /**
   * Returns the first day of the week according to the current month.<br>
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth (): Datetime {
    return this.cloneClass()
      .moveWeekdayFirstByMonth()
  }

  /**
   * Returns the last day of the week according to the current month.<br>
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth (): Datetime {
    return this.cloneClass()
      .moveWeekdayLastByMonth()
  }

  /**
   * Returns the next week according to the current date.<br>
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext (): Datetime {
    return this.cloneClass()
      .moveWeekdayNext()
  }

  /**
   * Returns the previous week according to the current date.<br>
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious (): Datetime {
    return this.cloneClass()
      .moveWeekdayPrevious()
  }

  /**
   * Clone the GeoDate object and move the day to the beginning of the month.<br>
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst (): Datetime {
    return this.cloneClass()
      .moveDayFirst()
  }

  /**
   * Clone the GeoDate object and move the day to the end of the month.<br>
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast (): Datetime {
    return this.cloneClass()
      .moveDayLast()
  }

  /**
   * Clone the GeoDate object and move by 1 day.<br>
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext (): Datetime {
    return this.cloneClass()
      .moveDayNext()
  }

  /**
   * Clone the GeoDate object and go back by 1 day.<br>
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious (): Datetime {
    return this.cloneClass()
      .moveDayPrevious()
  }

  /**
   * Updating all values.<br>
   * Обновление всех значений.
   */
  protected update (): this {
    this.watch?.(
      this.date,
      this.type,
      this.hour24
    )

    return this
  }
}
