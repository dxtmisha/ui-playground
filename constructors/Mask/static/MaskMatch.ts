import { isObjectNotArray, isString } from '../../../functions/data.ts'

import { type MaskMatchItem } from '../typesBasic.ts'
import { type MaskProps } from '../props.ts'

/**
 * Class for checking the incoming character.<br>
 * Класс для проверки входящего символа.
 */
export class MaskMatch {
  /**
   * Constructor
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps
  ) {
  }

  /**
   * Checks if the symbol fits.<br>
   * Проверяет, подходит ли символ.
   * @param char symbol for checking /<br>символ для проверки
   * @param index group for checking /<br>группа для проверки
   */
  is (
    char: string,
    index?: string
  ): boolean {
    const match = this.get(index)

    if (match instanceof RegExp) {
      return Boolean(char.match(match))
    }

    if (isString(match)) {
      return Boolean(char.match(new RegExp(match)))
    }

    return Boolean(char.match(/[0-9]/))
  }

  /**
   * Returns the value of the regular expression for checking.<br>
   * Возвращает значение регулярного выражения для проверки.
   * @param index group for checking /<br>группа для проверки
   */
  get (index?: string): MaskMatchItem {
    if (index) {
      const special = this.props?.special

      if (
        isObjectNotArray(special) &&
        special?.[index]?.match
      ) {
        return special[index].match as MaskMatchItem
      }
    }

    return this.props?.match ?? /[0-9]/
  }

  /**
   * Returns only characters available for input.<br>
   * Возвращает только символы, доступные для ввода.
   * @param text text for checking /<br>текст для проверки
   */
  filter (text: string): string[] {
    return text
      .split('')
      .filter(char => this.is(char))
  }
}
