import { isObject } from '../../functions/data'
import { Translate } from '../../classes/Translate'

import { InputElement } from './InputElement'
import { InputValue } from './InputValue'

import { type InputValidationItem } from './typesBasic'
import { type InputBasicProps } from './props'

/**
 * Class for checking the similarity of input data with other elements.<br>
 * Класс для проверки сходства вводимых данных с другими элементами.
 */
export class InputMatch {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param value object for working with values /<br>объект для работы со значениями
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps,
    protected readonly element: InputElement,
    protected readonly value: InputValue
  ) {
  }

  /**
   * Checks if the input correctness check is enabled.<br>
   * Проверяет, включена ли проверка правильности ввода.
   */
  is (): boolean {
    return Boolean(this.props?.match)
  }

  /**
   * Returns the selector for searching the external element.<br>
   * Возвращает селектор для поиска внешнего элемента.
   */
  getSelectors () {
    if (this.is()) {
      if (isObject(this.props.match)) {
        return this.props.match.name
      }

      return this.props.match
    }

    return undefined
  }

  /**
   * Returns the error text.<br>
   * Возвращает текст для ошибки.
   */
  getValidationMessage (): string {
    if (this.is()) {
      if (
        isObject(this.props.match) &&
        this.props.match?.validationMessage
      ) {
        return this.props.match.validationMessage
      }

      return Translate.getSync('Your entries must match.')
    }

    return ''
  }

  /**
   * Checks if the value matches the external element.<br>
   * Проверяет, совпадает ли значение с внешним элементом.
   */
  check (): InputValidationItem | undefined {
    const selectors = this.getSelectors()

    if (selectors) {
      const input = this.element.findByName(selectors)

      if (
        input &&
        input.value.trim() &&
        input.value !== this.value.getString()
      ) {
        return {
          status: false,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.getString()
        }
      }
    }

    return undefined
  }
}
