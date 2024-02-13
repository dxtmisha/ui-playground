import { isFilled } from '../../functions/data'

import { type FieldMessageProps } from './props'

/**
 * Class for working with text.<br>
 * Класс для работы с текстом.
 */
export class FieldMessageMessage {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: FieldMessageProps
  ) {
  }

  /**
   * Checks if there is text.<br>
   * Проверяет, есть ли текст.
   */
  is (): boolean {
    return Boolean(this.get())
  }

  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isValidation (): boolean {
    return isFilled(this.props?.validationMessage)
  }

  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get (): string | undefined {
    if (this.isValidation()) {
      return this.props.validationMessage
    }

    if (isFilled(this.props?.helperMessage)) {
      return this.props.helperMessage
    }

    return undefined
  }
}
