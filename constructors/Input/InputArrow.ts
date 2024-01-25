import { toNumber } from '../../functions/number.ts'

import { InputValue } from './InputValue.ts'

import { type InputBasicProps } from './props.ts'

/**
 * Class for working with input arrows.<br>
 * Класс для работы со стрелками ввода.
 */
export class InputArrow {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param value object for working with values /<br>объект для работы со значениями
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps,
    protected readonly value: InputValue
  ) {
  }

  /**
   * Checks if it is possible to decrease the value.<br>
   * Проверяет, можно ли уменьшить значение.
   * @param value values for checking /<br>значения для проверки
   */
  isPrevious (
    value: number = this.value.getNumber()
  ): boolean {
    const min = this.getMin()
    return min === undefined || value > min
  }

  /**
   * Checks if it is possible to increase the value.<br>
   * Проверяет, можно ли увеличить значение.
   * @param value values for checking /<br>значения для проверки
   */
  isNext (
    value: number = this.value.getNumber()
  ): boolean {
    const max = this.getMax()
    return max === undefined || value < max
  }

  /**
   * Returns the change step.<br>
   * Возвращает шаг изменения.
   */
  getStep (): number {
    if (this.props?.step) {
      return toNumber(this.props.step)
    }

    return 1
  }

  /**
   * Returns the minimum value.<br>
   * Возвращает минимальное значение.
   */
  getMin (): number | undefined {
    if (this.props?.min) {
      return toNumber(this.props.min)
    }

    return undefined
  }

  /**
   * Returns the maximum value.<br>
   * Возвращает максимальное значение.
   */
  getMax (): number | undefined {
    if (this.props?.max) {
      return toNumber(this.props.max)
    }

    return undefined
  }

  /**
   * Decreases the value.<br>
   * Уменьшает значение.
   */
  previous (): this {
    const value = this.value.getNumber() - this.getStep()

    if (this.isPrevious(value)) {
      this.value.set(value.toString())
    } else {
      this.toMin()
    }

    return this
  }

  /**
   * Increases the value.<br>
   * Увеличивает значение.
   */
  next (): this {
    const value = this.value.getNumber() + this.getStep()

    if (this.isNext(value)) {
      this.value.set(value.toString())
    } else {
      this.toMax()
    }

    return this
  }

  /**
   * Decreases to the minimum value.<br>
   * Уменьшает до минимального значения.
   */
  toMin (): this {
    if (this.isPrevious()) {
      const min = this.getMin()

      if (min) {
        this.value.set(min.toString())
      }
    }

    return this
  }

  /**
   * Increases to the maximum value.<br>
   * Увеличивает до максимального значения.
   */
  toMax (): this {
    if (this.isNext()) {
      const max = this.getMax()

      if (max) {
        this.value.set(max.toString())
      }
    }

    return this
  }
}
