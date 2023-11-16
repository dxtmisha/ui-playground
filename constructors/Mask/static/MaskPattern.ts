import { isObjectNotArray } from '../../../functions/data.ts'

import { MaskType } from './MaskType.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskDate } from './MaskDate.ts'

import { type MaskProps } from '../props.ts'
import {
  type MaskPatternItemOrFunction,
  type MaskPatternList
} from '../typesBasic.ts'

/**
 * Class for obtaining data to check the input data.<br>
 * Класс для получения данных для проверки вводимых данных.
 */
export class MaskPattern {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type object of the class for obtaining the mask type /<br>
   * объект класса для получения типа маски
   * @param date class object for managing data of type date /<br>
   * объект класса для управления данными типа дата
   * @param special class object for managing special characters /<br>
   * объект класса для управления специальными символами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly special: MaskSpecial
  ) {
  }

  /**
   * Getting the value for checking.<br>
   * Получение значения для проверки.
   * @param index group for checking /<br>группа для проверки
   */
  getPattern (index?: string): MaskPatternItemOrFunction | undefined {
    if (index) {
      const special = this.props?.special

      if (
        isObjectNotArray(special) &&
        special?.[index]?.pattern
      ) {
        return special[index].pattern as MaskPatternItemOrFunction
      }
    }

    return this.props?.pattern
  }

  /**
   * Getting data for verification by its identification.<br>
   * Получение данных для проверки по его идентификации.
   * @param index group for checking /<br>группа для проверки
   */
  get (index: string): MaskPatternItemOrFunction | undefined {
    return this.getList()?.[index]
  }

  /**
   * Getting global data to check the input data.<br>
   * Получение глобальных данных для проверки вводимых данных.
   */
  getCheck (): MaskPatternItemOrFunction | undefined {
    return this.props?.check
  }

  /**
   * We get an object to check the data.<br>
   * Получаем объект для проверки данных.
   */
  getList (): MaskPatternList {
    const patterns = this.getByType()

    for (const index in patterns) {
      const item = this.getPattern(index)

      if (
        isObjectNotArray(item) &&
        isObjectNotArray(patterns[index])
      ) {
        Object.assign(patterns[index], index)
      }
    }

    return patterns
  }

  /**
   * Gets the basic data for checking.<br>
   * Получает базовые данные для проверки.
   */
  protected getByType (): MaskPatternList {
    if (this.type.isDate()) {
      return this.date.getPattern()
    }

    const patterns: MaskPatternList = {}

    this.special.get().forEach(name => {
      patterns[name] = {}
    })

    return patterns
  }
}
