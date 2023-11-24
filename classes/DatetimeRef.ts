import { computed, ComputedRef, ref, Ref, triggerRef, watch } from 'vue'
import { toDate } from '../functions/date.ts'
import { toRefItem } from '../functions/ref.ts'

import { Datetime } from './Datetime.ts'
import { Geo } from './Geo.ts'
import { type GeoDate, GeoFirstDay, GeoHours } from '../types/geo.ts'

import { type NumberOrStringOrDate } from '../types/basic.ts'
import { type RefOrNormal } from '../types/ref.ts'

/**
 * A class for working with dates.<br>
 * Класс для работы с датами.
 */
export class DatetimeRef {
  protected item: Ref<NumberOrStringOrDate>
  protected type: Ref<GeoDate>
  protected code: Ref<string>
  protected date: Ref<Date>
  protected datetime: Datetime

  protected year = computed<number>(() => this.date.value && this.datetime.getYear())
  protected month = computed<number>(() => this.date.value && this.datetime.getMonth())
  protected day = computed<number>(() => this.date.value && this.datetime.getDay())
  protected hour = computed<number>(() => this.date.value && this.datetime.getHour())
  protected minute = computed<number>(() => this.date.value && this.datetime.getMinute())
  protected second = computed<number>(() => this.date.value && this.datetime.getSecond())

  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor (
    date: RefOrNormal<NumberOrStringOrDate>,
    type: RefOrNormal<GeoDate> = 'date',
    code: RefOrNormal<string> = Geo.getLocation()
  ) {
    this.item = toRefItem(date)
    this.type = toRefItem(type)
    this.code = toRefItem(code)
    this.date = ref(toDate(this.item.value))
    this.datetime = new Datetime(
      this.date.value,
      this.type.value,
      this.code.value
    )

    watch(this.item, value => {
      this.date.value = toDate(value)
    })

    watch(this.type, type => this.datetime.setType(type))
    watch(this.code, code => this.datetime.setCode(code))
    watch(this.date, value => this.datetime.setDate(value))

    this.datetime.setWatch(() => triggerRef(this.date))
  }

  /**
   * Returns the basic data for the date.<br>
   * Возвращает основные данные для даты.
   */
  getItem (): RefOrNormal<NumberOrStringOrDate> {
    return this.item
  }

  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate (): Ref<Date> {
    return this.date
  }

  /**
   * Obtaining an object of the basic Datetime class.<br>
   * Получение объекта основного класса Datetime.
   */
  getDatetime (): Datetime {
    return this.datetime
  }

  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType (): ComputedRef<GeoHours> {
    return computed(() => this.date.value && this.datetime.getHoursType())
  }

  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode (): ComputedRef<GeoFirstDay> {
    return computed(() => this.date.value && this.datetime.getFirstDayCode())
  }

  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear (): ComputedRef<number> {
    return this.year
  }

  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth (): ComputedRef<number> {
    return this.month
  }

  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay (): ComputedRef<number> {
    return this.day
  }

  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour (): ComputedRef<number> {
    return this.hour
  }

  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute (): ComputedRef<number> {
    return this.minute
  }

  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond (): ComputedRef<number> {
    return this.second
  }

  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay (): ComputedRef<number> {
    return computed(() => this.date.value && this.datetime.getMaxDay())
  }

  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale (
    type: GeoDate = this.type.value,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.date.value && this.datetime.locale(type, styleOptions))
  }

  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard (timeZone = true as boolean): ComputedRef<string> {
    return computed(() => this.date.value && this.datetime.standard(timeZone))
  }
}
