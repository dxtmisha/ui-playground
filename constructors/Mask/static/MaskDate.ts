import { Datetime } from '../../../classes/static/Datetime.ts'

import { MaskType } from './MaskType.ts'

import {
  type MaskGroup,
  type MaskPatternElement,
  type MaskPatternList
} from '../typesBasic.ts'

const patternForDate: MaskPatternList = {
  Y: '[0-9]{4}',
  M: {
    type: 'number',
    min: '1',
    max: '12'
  },
  D: (item: MaskGroup): MaskPatternElement => {
    const date = new Datetime(`${item?.Y?.value ?? '2000'}-${item?.M?.value ?? '01'}-01`)

    return {
      type: 'number',
      min: '1',
      max: date.getMaxDay().toString()
    }
  },
  h: {
    type: 'number',
    min: '0',
    max: '23'
  },
  m: {
    type: 'number',
    min: '0',
    max: '59'
  },
  s: {
    type: 'number',
    min: '0',
    max: '59'
  }
}

/**
 * Class for working with a date type mask.<br>
 * Класс для работы с маской типа даты.
 */
export class MaskDate {
  /**
   * Constructor
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly type: MaskType
  ) {
  }

  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date values for the date /<br>значения для даты
   */
  getValue (date?: string): string {
    return this.getDatetime(date).locale(undefined, '2-digit')
  }

  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param data values for the date /<br>значения для даты
   */
  getValueStandard (data: MaskGroup): string {
    const value = `${data?.Y?.value || '2000'}` +
      `-${data?.M?.value || '01'}` +
      `-${data?.D?.value || '01'}` +
      `T${data?.h?.value || '00'}` +
      `:${data?.m?.value || '00'}` +
      `:${data?.s?.value || '00'}`

    return isNaN(Date.parse(value)) ? '' : this.getDatetime(value).standard(false)
  }

  /**
   * Returns the mask for types related to date.<br>
   * Возвращает маску для типов, относящихся к дате.
   */
  getMask (): string[] {
    return this.getDatetime().locale(undefined, '2-digit')
      .replace('1987', 'YYYY')
      .replace('12', 'MM')
      .replace('18', 'DD')
      .replace('10', 'hh')
      .replace('20', 'mm')
      .replace('30', 'ss')
      .split('')
  }

  /**
   * Returns the validation template for the data type.<br>
   * Возвращает шаблон проверки для типа данных.
   */
  getPattern (): MaskPatternList {
    return patternForDate
  }

  /**
   * Returns an object for working with dates.<br>
   * Возвращает объект для работы с датами.
   * @param date values for the date /<br>значения для даты
   */
  protected getDatetime (date?: string): Datetime {
    return new Datetime(date ?? '1987-12-18T10:20:30', this.type.getByDate())
  }
}
