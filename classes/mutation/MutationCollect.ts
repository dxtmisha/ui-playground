import {
  CLASS_NAME,
  KEY_END,
  KEY_INIT,
  KEY_UI,
  MutationStatus
} from '../../types/mutation.ts'

/**
 * Class for working with the search of elements for processing.<br>
 * Класс для работы с поиском элементов для обработки.
 */
export class MutationCollect {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi (): string {
    return KEY_UI
  }

  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit (): string {
    return KEY_INIT
  }

  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd (): string {
    return KEY_END
  }

  /**
   * Returns the names of attributes indicating the design name.<br>
   * Возвращает названия атрибутов, обозначающих название дизайна.
   */
  static getAttributeUi (): string {
    return `data-${this.getKeyUi()}`
  }

  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
   */
  static getClassInit (): string {
    return `${CLASS_NAME}--${this.getKeyInit()}`
  }

  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd (): string {
    return `${CLASS_NAME}--${this.getKeyEnd()}`
  }

  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find (
    initial: Node | HTMLElement = document.body,
    status: MutationStatus = MutationStatus.new
  ): HTMLElement[] {
    const data: HTMLElement[] = []

    if ('querySelector' in initial) {
      const selector = this.getSelectorByStatus(status)

      if (initial.querySelector(selector)) {
        initial.querySelectorAll<HTMLElement>(selector)
          .forEach(element => data.push(element))
      }
    }

    return data
  }

  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit (element: HTMLElement): boolean {
    return Boolean(
      element?.closest?.(this.getSelectorInit()) ||
      !element?.closest?.('body')
    )
  }

  /**
   * Returns the select for a new element.<br>
   * Возвращает селект для нового элемента.
   */
  protected static getSelectorNew (): string {
    return `*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`
  }

  /**
   * Returns the select for an element in processing.<br>
   * Возвращает селект для элемента в обработке.
   */
  protected static getSelectorInit (): string {
    return `*[${this.getAttributeUi()}].${this.getClassInit()}`
  }

  /**
   * Returns the select for an element that has already been processed.<br>
   * Возвращает селект для элемента, который уже обработан.
   */
  protected static getSelectorEnd (): string {
    return `*[${this.getAttributeUi()}].${this.getClassEnd()}`
  }

  /**
   * Returns the select for searching elements by their status.<br>
   * Возвращает селект для поиска элементов по их статусу.
   * @param status status name /<br>название статуса
   */
  protected static getSelectorByStatus (status: MutationStatus): string {
    switch (status) {
      case MutationStatus.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`
      case MutationStatus.end:
        return this.getSelectorEnd()
      default:
        return this.getSelectorNew()
    }
  }
}
