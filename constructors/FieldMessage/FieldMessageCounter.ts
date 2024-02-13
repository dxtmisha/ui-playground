import { toNumber } from '../../functions/number'

import { type FieldMessageProps } from './props'

/**
 * Class for working with the number of input numbers.<br>
 * Класс для работы с количеством вводимых чисел.
 */
export class FieldMessageCounter {
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
   * Checks if it is necessary to display the number of input characters.<br>
   * Проверяет, надо ли выводить количество вводимых символов.
   */
  is (): boolean {
    return this.getCounter() > 0 || this.isMax()
  }

  /**
   * Checks if it is necessary to display the maximum available number of characters.<br>
   * Проверяет, надо ли выводить максимальное доступное количество символов.
   */
  isMax (): boolean {
    return this.getMax() > 0
  }

  /**
   * Returns text for output.<br>
   * Возвращает текст для вывода.
   */
  get (): string {
    if (this.isMax()) {
      return `${this.getCounter()} / ${this.getMax()}`
    }

    return this.getCounter().toString()
  }

  /**
   * Returns the number of input characters.<br>
   * Возвращает количество вводимых символов.
   */
  getCounter (): number {
    return toNumber(this.props?.counter ?? 0)
  }

  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax (): number {
    return toNumber(this.props?.maxlength ?? 0)
  }
}
