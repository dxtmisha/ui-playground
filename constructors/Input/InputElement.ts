import { InputType } from './InputType.ts'
import { InputPattern } from './InputPattern.ts'

import type { InputElementItem } from './typesBasic.ts'
import type { InputProps } from './props.ts'

/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export class InputElement {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputProps,
    protected readonly type: InputType,
    protected readonly pattern: InputPattern,
    protected element: InputElementItem,
    protected readonly callback: () => void
  ) {
  }

  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get (): HTMLInputElement | undefined {
    if (this.element) {
      if ('input' in this.element) {
        return this.element.input
      }

      return this.element as HTMLInputElement
    }

    return undefined
  }

  /**
   * Returns the name of the input element.<br>
   * Возвращает название элемента ввода.
   */
  getName (): string {
    return this.get()?.name ?? ''
  }

  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern (): Record<string, any> {
    return {
      name: this.props?.name,
      type: this.type.get(),

      required: this.props?.required,
      pattern: this.pattern.get(),

      step: this.props?.step,
      min: this.props?.min,
      max: this.props?.max,

      minlength: this.props?.minlength,
      maxlength: this.props?.maxlength,

      ...(this.props?.input ?? {})
    }
  }

  /**
   * Search for an element by its name inside a group or by selector.<br>
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName (nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined {
    if (nameSelectors instanceof Element) {
      return nameSelectors
    }

    const form = this.get()?.form

    if (form) {
      const item = form.querySelector<HTMLInputElement>(`[name="${nameSelectors}"]`)

      if (item) {
        return item
      }
    }

    const globalItem = document.querySelector<HTMLInputElement>(nameSelectors)

    if (globalItem) {
      return globalItem
    }

    return undefined
  }

  /**
   * Changes the input element.<br>
   * Изменяет элемент ввода.
   * @param element element for change /<br>элемент для изменения
   */
  set (element: InputElementItem): this {
    if (this.element !== element) {
      this.element = element
      this.callback()
    }

    return this
  }

  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear (): this {
    if (
      this.element &&
      'clear' in this.element
    ) {
      this.element.clear?.()
    }

    return this
  }
}
