import {
  forEach,
  isArray,
  isObject,
  isObjectNotArray,
  isSelected
} from '../../functions/data'

import { CacheItem } from '../../classes/CacheItem'

import { MaskType } from './MaskType'
import { MaskFormat } from './MaskFormat'

import { type InputPatternItemOrFunction } from '../Input/typesBasic'
import { type MaskProps } from './props'
import {
  type MaskMatchItem,
  type MaskSpecialList,
  type MaskSpecialProp,
  type MaskSpecialItem
} from './typesBasic'

/**
 * A class for working with groups according to their special symbols.<br>
 * Класс для работы с группами по их специальным символам.
 */
export class MaskSpecial extends CacheItem<string[]> {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param format
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly format: MaskFormat
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
   * Returns the transition symbol for the selected group.<br>
   * Проверяет, является ли символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  isTransitionChar (groupName: string, char: string): boolean {
    const list = this.getTransitionChar(groupName)

    if (list) {
      return isSelected(char, list)
    }

    return false
  }

  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString (): boolean {
    return this.get().length <= 1
  }

  /**
   * Checks if there are default values.<br>
   * Проверяет, есть ли значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  isDefault (groupName: string): boolean {
    return Boolean(this.getDefault(groupName))
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
   * Returns the default values.<br>
   * Возвращает значения по умолчанию.
   * @param groupName group name /<br>название группы
   */
  getDefault (groupName: string): MaskMatchItem | undefined {
    return this.getSpecialItem(groupName)?.defaultValue
  }

  /**
   * Returns the transition symbol for the selected group.<br>
   * Возвращает символ перехода для выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getTransitionChar (groupName: string): string | string[] | undefined {
    return this.getSpecialItem(groupName)?.transitionChar
  }

  /**
   * Returns a regular expression for checking the incoming character by groups.<br>
   * Возвращает регулярное выражение для проверки входящего символа по группам.
   * @param groupName group name /<br>название группы
   */
  getMatch (groupName: string): MaskMatchItem | undefined {
    return this.getSpecialItem(groupName)?.match
  }

  /**
   * Returns data for checking the selected group.<br>
   * Возвращает данные для проверки выбранной группы.
   * @param groupName group name /<br>название группы
   */
  getPattern (groupName: string): InputPatternItemOrFunction | undefined {
    return this.getSpecialItem(groupName)?.pattern
  }

  /**
   * Возвращает данные, по который будет отображать на экране.
   * @param groupName group name /<br>название группы
   */
  getView (groupName: string): string | undefined {
    return this.getSpecialItem(groupName)?.view
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
    if (this.type.isCurrencyOrNumber()) {
      return this.format.getSpecial()
    }

    return this.props?.special ?? '*'
  }

  /**
   * Getting data about a special symbol by group.<br>
   * Получение данных о специальном символе по группе.
   * @param groupName group name /<br>название группы
   */
  protected getSpecialItem (groupName: string): MaskSpecialItem | undefined {
    const special = this.getSpecial()

    if (
      isObjectNotArray(special) &&
      groupName in special
    ) {
      return special[groupName]
    }

    return undefined
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
