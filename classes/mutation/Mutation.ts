import { MutationCollect } from './MutationCollect.ts'
import { MutationData } from './MutationData.ts'
import { MutationObserverGlobal } from './MutationObserverGlobal.ts'

import { MutationStatus } from '../../types/mutation.ts'

/**
 * A class for global monitoring of changes and searching for new elements to transform into components.<br>
 * Класс для глобального слежения за изменениями и поиска новых элементов для преобразования в компоненты.
 */
export class Mutation {
  private mutationGlobal: MutationObserverGlobal

  readonly items = new MutationData()

  /**
   * Constructor
   */
  constructor (
    protected readonly callback: () => void
  ) {
    this.mutationGlobal = new MutationObserverGlobal(
      (node: HTMLElement) => this.add(node),
      (node: HTMLElement) => this.remove(node)
    )
  }

  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start (): this {
    this.addList()

    requestAnimationFrame(() => this.mutationGlobal.start())

    return this
  }

  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  stop (): this {
    this.mutationGlobal.end()
    return this
  }

  /**
   * Adding an element and its child elements.<br>
   * Добавление элемента и его дочерних элементы.
   * @param element element for deletion /<br>элемент для удаления
   */
  protected add (element: HTMLElement): void {
    this.items.add(element)
    this.addList(element)
    this.callback()
  }

  /**
   * Adding child elements.<br>
   * Добавления дочерних элементы.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  protected addList (initial: HTMLElement = document.body): void {
    MutationCollect.find(initial).forEach(element => this.items.add(element))
  }

  /**
   * Removing an element and its child elements from the list.<br>
   * Удаление элемента и его дочерних элементов из списка.
   * @param element element for deletion /<br>элемент для удаления
   */
  protected remove (element: HTMLElement): void {
    this.items.remove(element)
    this.removeList(element)
    this.callback()
  }

  /**
   * Removing child elements.<br>
   * Удаление дочерних элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  protected removeList (initial: HTMLElement = document.body): void {
    MutationCollect
      .find(initial, MutationStatus.init)
      .forEach(element => this.items.remove(element))
  }
}
