import {
  forEach,
  isArray,
  isObject,
  isObjectNotArray,
  isString
} from '../../../functions/data.ts'

import { MaskType } from './MaskType.ts'

import { type MaskProps } from '../props.ts'
import {
  type MaskSpecialList,
  type MaskSpecialProp
} from '../typesBasic.ts'

/**
 * Class for obtaining data about the character by which we determine the place
 * for replacement with a value.<br>
 * Класс для получения данных о символе, по которому определяем место для замены на значение.
 */
export class MaskSpecial {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type object of the class for obtaining the mask type /<br>объект класса для получения типа маски
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
  }

  /**
   * Checks if the character is special.<br>
   * Проверяет, является ли символ специальным.
   * @param char transition symbol /<br>символ перехода
   */
  isSpecial (char: string): boolean {
    return this.get().indexOf(char) !== -1
  }

  /**
   * Checks if the special character is only 1.<br>
   * Проверяет, является ли специальный символ только 1.
   */
  isString (): boolean {
    return isString(this.getSpecial())
  }

  /**
   * Getting the value of the input character.<br>
   * Получение значения входного символа.
   */
  getSpecial (): MaskSpecialProp {
    return this.props?.special ?? '*'
  }

  /**
   * Returns the character for replacement<br>
   * Возвращает символ для замены.
   */
  get (): string[] {
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

  /**
   * Getting the first type of character to determine the input location.<br>
   * Получение первого типа символа для определения места ввода.
   */
  getFirst (): string {
    return this.get()?.[0] ?? '*'
  }

  /**
   * Gets all types that have a rubber character.<br>
   * Получает все типы, у которых резиновый символ.
   */
  getRubber (): MaskSpecialList {
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
}
