import { InputVisibility } from './InputVisibility.ts'

import {
  type InputTypeName
} from './typesBasic.ts'
import { type InputValueProps } from './propsBasic.ts'

/**
 * Class for working with the input type.<br>
 * Класс для работы с типом ввода.
 */
export class InputType {
  protected type: InputTypeName

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param visibility object for working with visualization /<br>объект для работы с визуализацией
   */
  constructor (
    protected readonly props: InputValueProps,
    protected readonly visibility: InputVisibility
  ) {
    this.type = this.getOriginal()
  }

  /**
   * Returns the input type.<br>
   * Возвращает тип ввода.
   */
  get (): InputTypeName {
    const type = this.getOriginal()

    if (
      type === 'password' &&
      this.visibility.get()
    ) {
      return 'text'
    }

    return type
  }

  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal (): InputTypeName {
    return this.props?.type ?? 'text'
  }
}
