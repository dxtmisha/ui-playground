import { isString } from '../../../functions/data.ts'

import { MaskSpecial } from './MaskSpecial.ts'

import { type MaskMatchItem } from '../typesBasic.ts'
import { type MaskProps } from '../props.ts'

const MATCH_DEFAULT = /[0-9]/

/**
 * Class for checking the incoming character.<br>
 * Класс для проверки входящего символа.
 */
export class MaskMatch {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param special
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly special: MaskSpecial
  ) {
  }

  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param groupName group for checking /<br>группа для проверки
   */
  is (
    char: string,
    groupName?: string
  ): boolean {
    const match = this.get(groupName)

    if (match instanceof RegExp) {
      return Boolean(char.match(match))
    }

    if (isString(match)) {
      return Boolean(char.match(new RegExp(match)))
    }

    return Boolean(char.match(MATCH_DEFAULT))
  }

  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  get (groupName?: string): MaskMatchItem {
    return (groupName && this.special.getMatch(groupName)) ?? this.props?.match ?? MATCH_DEFAULT
  }

  /**
   * Returns only the characters that can be entered from the string.<br>
   * Возвращает только символы, доступные для ввода из строки.
   * @param text text for checking /<br>текст для проверки
   */
  filter (text: string): string[] {
    const special = this.special.get()

    return text
      .split('')
      .filter(char => special.find(groupName => this.is(char, groupName)))
  }
}
