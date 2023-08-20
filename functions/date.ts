import { isNull } from './data.ts'
import { NumberOrStringOrDateType } from '../types/basic.ts'

/**
 * Conversion to Date object.<br>
 * Преобразование в объект Date.
 * @param value input value /<br>входное значение
 */
export function toDate<T extends NumberOrStringOrDateType> (value?: T): (T & Date) | Date {
  if (value instanceof Date) {
    return value
  }

  if (isNull(value)) {
    return new Date()
  }

  if (typeof value === 'number') {
    return new Date(value)
  }

  let date: string = value
  let timeZone = ''

  value.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (all, d: string, z: string) => {
    date = d
    timeZone = z

    return all
  })

  const stringDate = ((/^\d{4}\d{2}\d{2}$/.exec(date)) && `${date.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3')}T00:00:00`) ??
    ((/^\d{4}\d{2}$/.exec(date)) && `${date.replace(/^(\d{4})(\d{2})$/, '$1-$2')}-01T00:00:00`) ??
    ((/^\d{4}-\d{2}-\d{2}$/.exec(date)) && `${date}T00:00:00`) ??
    ((/^\d{4}-\d{2}$/.exec(date)) && `${date}-01T00:00:00`) ??
    ((/^\d{4}$/.exec(date)) && `${date}-01-01T00:00:00`) ??
    ((/^\d{2}:\d{2}$/.exec(date)) && `2000-01-01T${date}:00`) ??
    ((/^\d{2}:\d{2}:\d{2}$/.exec(date)) && `2000-01-01T${date}`) ??
    (date.replace(' ', 'T'))

  return new Date(`${stringDate}${timeZone}`)
}
