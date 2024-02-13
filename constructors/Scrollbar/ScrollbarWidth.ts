import { createElement } from '../../functions/element'

import { DataStorage } from '../../classes/DataStorage'

/**
 * Class for getting the scroll width.<br>
 * Класс для получения ширины скролла.
 */
export class ScrollbarWidth {
  private static storage = new DataStorage<number>('scrollbar', true)
  private static calculate = false

  /**
   * Checks whether to enable scroll hiding.<br>
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is (): Promise<boolean> {
    const width = await this.get()

    return width !== -1 && width <= 8
  }

  /**
   * Returns the width of the scroll.<br>
   * Возвращает ширину скролла.
   */
  static async get (): Promise<number> {
    const width = this.storage.get() ?? -1

    if (
      !this.calculate &&
      width === -1
    ) {
      const newWidth = await this.init()

      this.storage.set(newWidth)
      return newWidth
    }

    return width
  }

  /**
   * Creates elements to check the width of the scroll.<br>
   * Создает элементы для проверки ширины скролла.
   */
  private static createElement (): HTMLDivElement {
    return createElement<HTMLDivElement>(document.body, 'div', element => {
      element.style.height = '24px'
      element.style.overflowY = 'scroll'
      element.style.position = 'fixed'
      element.style.width = '100%'

      createElement(element, 'div', element => {
        element.style.height = '100px'
      })
    })
  }

  /**
   * Initialization of data to check the width of the scroll.<br>
   * Инициализация данных для проверки ширины скролла.
   */
  private static init (): Promise<number> {
    return new Promise(resolve => {
      this.calculate = true
      const element = this.createElement()

      requestAnimationFrame(() => {
        resolve(element.offsetWidth - element.clientWidth)

        element.remove()
        this.calculate = false
      })
    })
  }
}
