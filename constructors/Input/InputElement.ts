import { InputType } from './InputType.ts'
import { InputPattern } from './InputPattern.ts'

import type { ConstrValue } from '../../types/constructor.ts'
import type { InputElementItem } from './typesBasic.ts'
import type { InputBasicProps } from './props.ts'

/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export class InputElement {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps,
    protected readonly element: ConstrValue<InputElementItem>,
    protected readonly type?: InputType,
    protected readonly pattern?: InputPattern
  ) {
  }

  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get (): HTMLInputElement | undefined {
    const element = this.element.value

    if (element) {
      if ('input' in element) {
        return element.input
      }

      return element as HTMLInputElement
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
      type: this.type?.get(),

      required: this.props?.required,
      pattern: this.pattern?.get(),

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
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear (): this {
    const element = this.element.value

    if (
      element &&
      'clear' in element
    ) {
      element.clear?.()
    }

    return this
  }
}
