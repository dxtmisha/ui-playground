import { InputElementItem } from './typesBasic.ts'

/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export class InputElement {
  /**
   * Constructor
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
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
