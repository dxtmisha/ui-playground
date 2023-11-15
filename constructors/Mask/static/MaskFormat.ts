import { strFill } from '../../../functions/string.ts'

import { GeoIntl } from '../../../classes/static/GeoIntl.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'

import { type MaskProps } from '../props.ts'
import {
  type MaskGroup,
  type MaskSpecialGroup
} from '../typesBasic.ts'

/**
 * Class for getting a formatted number.<br>
 * Класс для получения форматированного числа.
 */
export class MaskFormat {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type object of the class for obtaining the mask type /<br>объект класса для получения типа маски
   * @param rubberItem объект класса для управления резиновый номера
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem
  ) {
  }

  /**
   * Checks if the number is rubber.<br>
   * Проверяет, является ли число резиновым.
   */
  isFractionRubber (): boolean {
    return this.props.fraction === true
  }

  /**
   * Gets an object for working with data formatting.<br>
   * Получает объект для работы с форматированием данных.
   */
  getIntl (): GeoIntl {
    return new GeoIntl(this.props?.lang)
  }

  /**
   * Getting the number of remainder digits.<br>
   * Получение количества чисел остатка.
   */
  getFraction (): number {
    const fraction = this.props?.fraction

    if (this.type.isCurrency()) {
      return 2
    }

    if (typeof fraction === 'number') {
      return fraction
    }

    if (
      typeof fraction === 'string' &&
      fraction.match(/[0-9]+/)
    ) {
      return Number(fraction)
    }

    if (this.rubberItem.is('f')) {
      return this.rubberItem.getByIndex('f') + 1
    }

    if (fraction === true) {
      return 1
    }

    return 0
  }

  /**
   * Returns the standard form of the number.<br>
   * Возвращает стандартный вид числа.
   */
  getStandardForNumber (): string {
    return `${this.toNumber()}${this.toFraction()}${this.toCurrency()}`
  }

  /**
   * Returns the number type.<br>
   * Возвращает тип номера.
   */
  getNumber (): string {
    return this.getIntl().number(this.getStandardForNumber(), { maximumFractionDigits: 9 })
  }

  /**
   * Returns the currency type.<br>
   * Возвращает тип валюты.
   */
  getCurrency (): string {
    return this.getIntl().currency(this.getStandardForNumber())
  }

  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  getDecimal (): string[] {
    return [this.getIntl().decimal(), '.']
  }

  /**
   * Getting the mask for a number or currency.<br>
   * Получение маски для числа или валюты.
   */
  getMask (): string[] {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber())
      .replace(/9/ig, 'n')
      .replace(/3/ig, 'f')
      .split('')
  }

  /**
   * Getting instructions for data management.<br>
   * Получение инструкции для управления данными.
   */
  getRubber (): MaskSpecialGroup {
    return {
      n: {
        rubber: true,
        transitionChar: this.getDecimal(),
        maxLength: 12
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 6
      }
    }
  }

  /**
   * Returns the value in standard form.<br>
   * Проверяет, является ли число резиновым.
   * @param value значения для преобразования
   */
  getValue (value: MaskGroup): string {
    return `${value?.n?.value || '0'}.${value?.f?.value || '0'}`
  }

  /**
   * Gets the number of digits for substitution in the mask.<br>
   * Получает количество чисел для подстановки в маске.
   */
  protected toNumber (): string {
    return strFill('9', this.rubberItem.getByIndex('n') + 1)
  }

  /**
   * Gets the number of digits for the remainder.<br>
   * Получает количество чисел для остатка.
   */
  protected toFraction (): string {
    const data = this.getFraction()
    return data ? `.${strFill('3', data)}` : ''
  }

  /**
   * Getting the currency value.<br>
   * Получение значения валюты.
   */
  protected toCurrency (): string {
    return this.type.isCurrency() && this.props?.currency ? ` ${this.props.currency}` : ''
  }
}
