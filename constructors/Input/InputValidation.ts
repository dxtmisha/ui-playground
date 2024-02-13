import { type InputCheckItem, useInputCheck } from './useInputCheck'

import { InputElement } from './InputElement'
import { InputValue } from './InputValue'
import { InputMatch } from './InputMatch'
import { InputCode } from './InputCode'

import { type InputValidationItem } from './typesBasic'
import { type InputBasicProps } from './props'

/**
 * Class for working with validity.<br>
 * Класс для работы с валидностью.
 */
export class InputValidation<V = any> {
  protected item: InputCheckItem<V>
  protected validation?: InputValidationItem<V>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps<V>,
    protected readonly element: InputElement,
    protected readonly value: InputValue,
    protected readonly code: InputCode,
    protected readonly match?: InputMatch
  ) {
    this.item = useInputCheck<V>(this.element.getPattern())
  }

  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError (): boolean {
    return !this.get()?.status
  }

  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  get (): InputValidationItem<V> {
    return this.checkGlobal() ??
      this.checkItem() ??
      this.match?.check() as InputValidationItem<V> | undefined ??
      {
        value: undefined
      } as InputValidationItem<V>
  }

  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  getMessage (): string {
    return this.get()?.validationMessage ?? ''
  }

  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set (validation: Record<string, any> | InputValidationItem<V>): this {
    if (
      'status' in validation &&
      'validationMessage' in validation &&
      'value' in validation
    ) {
      this.validation = {
        status: validation.status,
        required: validation?.required,
        input: validation?.input,
        validationMessage: validation.validationMessage,
        validity: validation?.validity,
        pattern: validation?.pattern,
        value: validation.value
      }
    } else {
      this.validation = undefined
    }

    return this
  }

  /**
   * Updating data for input.<br>
   * Обновление данных для input.
   */
  update (): this {
    this.item = useInputCheck<V>(this.element.getPattern())
    return this
  }

  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  protected checkGlobal (): InputValidationItem<V> | undefined {
    if (this.props?.validationMessage) {
      return {
        status: false,
        validationMessage: this.props.validationMessage,
        value: this.value.get()
      }
    }

    return this.validation ?? undefined
  }

  /**
   * Check for selected data.<br>
   * Проверка для выбранных данных.
   */
  protected checkItem (): InputValidationItem<V> | undefined {
    const check = this.item.check(this.value.get())

    if (check?.status) {
      return undefined
    }

    return check
  }
}
