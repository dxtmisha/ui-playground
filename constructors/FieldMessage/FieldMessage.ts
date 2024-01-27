import { FieldMessageMessage } from './FieldMessageMessage.ts'
import { FieldMessageCounter } from './FieldMessageCounter.ts'

import { type ConstrClassObject } from '../../types/constructor.ts'
import { type FieldMessageProps } from './props.ts'

/**
 * Class for the component of outputting a message for the input element.<br>
 * Класс для компонента вывода сообщения для элемента ввода.
 */
export class FieldMessage {
  readonly message: FieldMessageMessage
  readonly counter: FieldMessageCounter

  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor (
    protected readonly props: FieldMessageProps
  ) {
    this.message = new FieldMessageMessage(props)
    this.counter = new FieldMessageCounter(props)
  }

  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is (): boolean {
    return !this.props?.disabled && (this.message.is() || this.counter.is())
  }

  /**
   * Returns data for the main style class.<br>
   * Возвращает данные для главного класса стиля.
   */
  classes (): ConstrClassObject {
    return {
      '??--validation': this.message.isValidation()
    }
  }
}
