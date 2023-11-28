import { Datetime } from '../../../classes/Datetime.ts'

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
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
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
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getValue (date?: string): string {
    return this.getDatetime(date).locale(undefined, '2-digit')
  }

  /**
   * Returns the standardized date value.<br>
   * Возвращает стандартизированное значение даты.
   * @param date an object with a filled date, divided into groups of characters /<br>
   * объект с заполненной датой, разделенный на группы символов
   */
  getValueStandard (date: MaskGroup): string {
    const value = `${date?.Y?.value || '2000'}` +
      `-${date?.M?.value || '01'}` +
      `-${date?.D?.value || '01'}` +
      `T${date?.h?.value || '00'}` +
      `:${date?.m?.value || '00'}` +
      `:${date?.s?.value || '00'}`

    return isNaN(Date.parse(value)) ? '' : this.getDatetime(value).standard(false)
  }

  /**
   * Returns a validation template for the date.<br>
   * Возвращает шаблон проверки для даты.
   */
  getPattern (): MaskPatternList {
    return patternForDate
  }

  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  protected getDatetime (date?: string): Datetime {
    return new Datetime(date ?? '1987-12-18T10:20:30', this.type.getByDate())
  }
}
