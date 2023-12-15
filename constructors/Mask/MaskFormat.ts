import { strFill } from '../../functions/string.ts'

import { GeoIntl } from '../../classes/GeoIntl.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'

import { type MaskProps } from './props.ts'
import {
  type MaskGroup,
  type MaskSpecialList, MaskSpecialProp
} from './typesBasic.ts'

/**
 * A class for working with a formatted number mask.<br>
 * Класс для работы с форматированной маской числа.
 */
export class MaskFormat {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem
  ) {
  }

  /**
   * Checks if there is a group for the remainder.<br>
   * Проверяет, есть ли группа для остатка.
   */
  isFractionRubber (): boolean {
    return this.props.fraction === true
  }

  /**
   * Gets an object for working with number formatting.<br>
   * Получает объект для работы с форматированием числа.
   */
  getIntl (): GeoIntl {
    return new GeoIntl(this.props?.language)
  }

  /**
   * Getting the number of digits in the remainder.<br>
   * Получение количества чисел в остатке.
   */
  getFraction (): number {
    if (this.type.isCurrency()) {
      return 2
    }

    const fraction = this.props?.fraction

    if (
      typeof fraction === 'number'
    ) {
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
   * Returns masks for a number or price.<br>
   * Возвращает маски для числа или цены.
   */
  getMask (): string[] {
    return (this.type.isCurrency() ? this.getCurrency() : this.getNumber())
      .replace(/9/ig, 'n')
      .replace(/3/ig, 'f')
      .split('')
  }

  /**
   * Returns the settings of special characters for input.<br>
   * Возвращает настройки специальных символов для ввода.
   */
  getSpecial (): MaskSpecialProp {
    return {
      n: {},
      f: {
        defaultValue: '0'
      }
    }
  }

  /**
   * Getting instructions for forming a rubber mask.<br>
   * Получение инструкции для формирования резиновой маски.
   */
  getRubber (): MaskSpecialList {
    return {
      n: {
        rubber: true,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    }
  }

  /**
   * Returns the formatted value.<br>
   * Возвращает отформатированное значение.
   * @param value a string with a filled date /<br>строка с заполненной датой
   */
  getValueStandard (value: MaskGroup): string {
    return `${value?.n?.value || '0'}.${value?.f?.value || '0'}`
  }

  /**
   * Returns the data as a formatted number.<br>
   * Возвращает данные в виде отформатированного числа.
   */
  getNumber (): string {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 })
  }

  /**
   * Returns the data as a formatted price with a currency symbol.<br>
   * Возвращает данные в виде отформатированной цены с символом валюты.
   */
  getCurrency (): string {
    return this.getIntl().currency(this.getNumberForString())
  }

  /**
   * Returns a list of delimiter characters for transitioning to the drop group.<br>
   * Возвращает список символов-разделителей для перехода в группу дроп.
   */
  getDecimal (): string[] {
    return [this.getIntl().decimal(), '.']
  }

  /**
   * Returns a list of symbols for output by group name.<br>
   * Возвращает список символов для вывода по названию группы.
   */
  getView (): string {
    return '0'
  }

  /**
   * Returns a string with values for obtaining a formatted value.<br>
   * Возвращает строку со значениями для получения отформатированного значения.
   */
  protected getNumberForString (): string {
    const fraction = this.getFraction()

    const number = strFill('9', this.rubberItem.getByIndex('n') + 1)
    const numberFraction = fraction ? `.${strFill('3', fraction)}` : ''
    const currency = this.type.isCurrency() && this.props?.currency ? ` ${this.props.currency}` : ''

    return `${number}${numberFraction}${currency}`
  }
}
