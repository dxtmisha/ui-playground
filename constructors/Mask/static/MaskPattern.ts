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
 * A class for obtaining data to verify input data by its group.<br>
 * Класс для получения данных для проверки вводимых данных по его группе.
 */
export class MaskPattern {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
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
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get (groupName: string): MaskPatternItemOrFunction | undefined {
    return this.getList()?.[groupName]
  }

  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
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
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern (groupName?: string): MaskPatternItemOrFunction | undefined {
    return (groupName && this.special.getPattern(groupName)) ?? this.props?.pattern
  }

  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck (): MaskPatternItemOrFunction | undefined {
    return this.props?.check
  }

  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
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
