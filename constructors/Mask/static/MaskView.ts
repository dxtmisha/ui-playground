import { MaskType } from './MaskType.ts'
import { MaskDate } from './MaskDate.ts'
import { MaskFormat } from './MaskFormat.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskRubber } from './MaskRubber.ts'
import { MaskItem } from './MaskItem.ts'
import { MaskValueBasic } from './MaskValueBasic.ts'
import { MaskValidation } from './MaskValidation.ts'

import { type MaskProps } from '../props.ts'
import { type MaskViewList } from '../typesBasic.ts'

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

    this.mask.getList().forEach((char, index) => {
      data.push({
        className: `${this.className} ${this.className}--${this.getStatus(char, index)}`,
        value: this.getValue(char, index)
      })
    })

    return data
  }

  /**
   * Returns the status by the entered symbol and the location.<br>
   * Возвращает статус по введенному символу и месту.
   * @param char checkable symbol /<br>проверяемая переменная
   * @param index key symbol number in a mask /<br>номер ключа символа в маске
   */
  protected getStatus (char: string, index: number): string {
    if (this.valueBasic.getLength() > index) {
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
   * @param index key symbol number in a mask /<br>номер ключа символа в маске
   */
  protected getValue (char: string, index: number): string {
    return this.valueBasic.getChar(index) ?? this.getSpecialToView(char)
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
