import {
  forEach,
  isArray,
  isObject,
  isObjectNotArray
} from '../../../functions/data.ts'

import { CacheItem } from '../../../classes/CacheItem.ts'

import { MaskType } from './MaskType.ts'

import { type MaskProps } from '../props.ts'
import {
  MaskMatchItem, InputPatternItemOrFunction,
  type MaskSpecialList,
  type MaskSpecialProp
} from '../typesBasic.ts'

/**
 * A class for working with groups according to their special symbols.<br>
 * Класс для работы с группами по их специальным символам.
 */
export class MaskSpecial extends CacheItem<string[]> {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
    super(() => this.initValue())
  }

  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char symbol for checking /<br>символ для проверки
   */
  isSpecial (char: string): boolean {
    return this.get().indexOf(char) !== -1
  }

  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString (): boolean {
    return this.get().length <= 1
  }

  /**
   * Returns a list of special symbols<br>.
   * Возвращает список специальных символов.
   */
  get (): string[] {
    return this.getCache([
      this.props?.type,
      this.props?.special
    ])
  }

  /**
   * Returns the first special symbol to determine the entry point.<br>
   * Возвращает первый специальный символ для определения места входа.
   */
  getFirst (): string {
    return this.get()?.[0] ?? '*'
  }

  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch (groupName: string) {
    const special = this.getSpecial()

    if (
      isObjectNotArray(special) &&
      special?.[groupName]?.match
    ) {
      return special[groupName].match as MaskMatchItem
    }

    return undefined
  }

  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern (groupName: string): InputPatternItemOrFunction | undefined {
    const special = this.getSpecial()

    if (
      isObjectNotArray(special) &&
      special?.[groupName]?.pattern
    ) {
      return special[groupName].pattern as InputPatternItemOrFunction
    }

    return undefined
  }

  /**
   * Returns an array of all groups that have special symbols.<br>
   * Возвращает массив всех групп, у которых есть специальные символы.
   */
  getRubberList (): MaskSpecialList {
    const data: MaskSpecialList = {}
    const special = this.getSpecial()

    if (isObjectNotArray(special)) {
      forEach(special, (item, index) => {
        if (item?.rubber) {
          data[index] = item
        }
      })
    }

    return data
  }

  /**
   * Getting a special symbol from props.<br>
   * Получение специального символа из props.
   */
  protected getSpecial (): MaskSpecialProp {
    return this.props?.special ?? '*'
  }

  /**
   * Processes all data and returns an array with a list of special symbols.<br>
   * Обрабатывает все данные и возвращает массив со списком специальных символов.
   */
  protected initValue (): string[] {
    if (this.type.isCurrencyOrNumber()) {
      return ['n', 'f']
    }

    if (this.type.isTime()) {
      return ['Y', 'M', 'D', 'h', 'm', 's']
    }

    if (this.type.isDate()) {
      return ['Y', 'M', 'D']
    }

    const special = this.getSpecial()

    if (isArray(special)) {
      return special
    }

    if (isObject(special)) {
      return Object.keys(special)
    }

    return [special]
  }
}
