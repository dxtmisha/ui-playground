import { MaskType } from './MaskType'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'
import { MaskSpecial } from './MaskSpecial'
import { MaskRubber } from './MaskRubber'
import { MaskItem } from './MaskItem'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskValidation } from './MaskValidation'

import { type MaskProps } from './props'
import { CHAR_DELETE, type MaskViewList } from './typesBasic'

const VIEW_DEFAULT = '_'

/**
 * Class for working with data to output to the screen.<br>
 * Класс для работы с данными для вывода на экран.
 */
export class MaskView {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param format
   * @param special
   * @param rubber
   * @param mask
   * @param valueBasic
   * @param validation
   * @param className define class names for each symbol /<br>определить названия класс для каждого символа
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat,
    protected readonly special: MaskSpecial,
    protected readonly rubber: MaskRubber,
    protected readonly mask: MaskItem,
    protected readonly valueBasic: MaskValueBasic,
    protected readonly validation: MaskValidation,
    protected readonly className: string = 'is-character'
  ) {
  }

  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  get (): MaskViewList {
    const data: MaskViewList = []
    const valueBasic = this.valueBasic.get()

    this.mask.getList().forEach((char, index) => {
      const value = valueBasic?.[index]

      data.push({
        className: `${this.className} ${this.className}--${this.getStatus(char, value)}`,
        value: this.getValue(char, value)
      })
    })

    return data
  }

  /**
   * Getting the basic standard values for the input field.<br>
   * Получение базовых стандартных значений для поля ввода.
   */
  getInput (): string {
    const value: string[] = []
    const list = this.mask.getList()

    this.valueBasic.get().split('').forEach((char, index) => {
      if (char === CHAR_DELETE) {
        value.push(
          this.getSpecialToView(list?.[index] ?? '') ?? char
        )
      } else {
        value.push(char)
      }
    })

    return value.join('')
  }

  /**
   * Checks if the value is filled in.<br>
   * Проверяет, заполнено ли значение.
   * @param value input values /<br>вводимые значения
   */
  protected isValue (value?: string): value is string {
    return Boolean(value && value !== CHAR_DELETE)
  }

  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  protected getStatus (char: string, value?: string): string {
    if (this.isValue(value)) {
      if (!this.special.isSpecial(char)) {
        return 'standard'
      }

      if (this.validation.isError(char)) {
        return 'error'
      }

      return 'special'
    }

    if (this.rubber.isTransition(char)) {
      return 'transition'
    }

    return 'placeholder'
  }

  /**
   * Returns a symbol from a filled value by mask or special symbol.<br>
   * Возвращает символ из заполненного значения по маске или специальному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param value input values /<br>вводимые значения
   */
  protected getValue (char: string, value?: string): string {
    return this.isValue(value) ? value : this.getSpecialToView(char)
  }

  /**
   * Returns a special symbol for output by the entered symbol.<br>
   * Возвращает специальный символ для вывода по введенному символу.
   * @param char checkable symbol /<br>проверяемая переменная
   */
  protected getSpecialToView (char: string): string {
    if (this.special.isSpecial(char)) {
      return this.getViewChar(char) ??
        this.special.getView(char) ??
        this.props?.view ??
        VIEW_DEFAULT
    }

    return char
  }

  /**
   * Returns a special symbol by symbol.<br>
   * Возвращает специальный символ по типу символа.
   * @param groupName group name /<br>название группы
   */
  protected getViewChar (groupName: string): string | undefined {
    if (this.type.isDate()) {
      return this.date.getView(groupName)
    }

    if (this.type.isCurrencyOrNumber()) {
      return this.format.getView()
    }

    return undefined
  }
}
