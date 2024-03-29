import { Datetime } from '../../classes/Datetime'

import { MaskType } from './MaskType'

import {
  type InputPatternElement,
  type InputPatternList
} from '../Input/typesBasic'
import { type MaskGroup } from './typesBasic'
import { type MaskProps } from './props'

const patternForDate: InputPatternList = {
  Y: '[0-9]{4}',
  M: {
    type: 'number',
    min: '1',
    max: '12'
  },
  D: (item: MaskGroup): InputPatternElement => {
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
   * @param props input data /<br>входные данные
   * @param type object of the mask type class /<br>объект класса тип маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
  }

  /**
   * Returns a DateTime object.<br>
   * Возвращает объект DateTime.
   * @param date a string with a filled date /<br>строка с заполненной датой
   */
  getDatetime (date?: string): Datetime {
    return new Datetime(date ?? '1987-12-18T10:20:30', this.type.getByDate(), this.props?.language)
  }

  /**
   * Returns a mask for filling in the date.<br>
   * Возвращает маску для заполнения даты.
   */
  getMask (): string[] {
    return this.getDatetime()
      .setHour24(true)
      .locale(undefined, '2-digit')
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
  getPattern (): InputPatternList {
    return patternForDate
  }

  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   * @param groupName group name /<br>название группы
   */
  getView (groupName: string): string | undefined {
    return this.getViewList()?.[groupName]
  }

  /**
   * Returns a list of symbols for output by group.<br>
   * Возвращает список символов для вывода по группе.
   */
  getViewList (): Record<string, string> {
    return {
      Y: 'y',
      M: 'm',
      D: 'd',
      h: 'h',
      m: 'm',
      s: 's'
    }
  }
}
