import { MutationCollect } from './MutationCollect'
import { MutationDataItem } from './MutationDataItem'

/**
 * Class for storing a list of active elements.<br>
 * Класс для хранения списка активных элементов.
 */
export class MutationData {
  private items: MutationDataItem[] = []

  /**
   * Checks if the element is in the list.<br>
   * Проверяет, есть ли элемент в списке.
   * @param element tracking element /<br>элемент слежения
   */
  is (element: HTMLElement): boolean {
    return Boolean(this.getItem(element))
  }

  /**
   * Checks if the element is a component.<br>
   * Проверяет, является ли элемент компонентом.
   * @param element tracking element /<br>элемент слежения
   */
  isComponent (element: HTMLElement): boolean {
    return Boolean(element.dataset?.[MutationCollect.getKeyUi()])
  }

  /**
   * Retrieving a list of all data.<br>
   * Получение списка всех данных.
   */
  get (): MutationDataItem[] {
    return this.items
  }

  /**
   * Returns an object with information about the element.<br>
   * Возвращает объект с информацией об элементе.
   * @param element tracking element /<br>элемент слежения
   */
  getItem (element: HTMLElement): MutationDataItem | undefined {
    return this.items?.[this.find(element)]
  }

  /**
   * Adding an element for processing.<br>
   * Добавление элемента для обработки.
   * @param element tracking element /<br>элемент слежения
   */
  add (element: HTMLElement): this {
    if (
      this.isComponent(element) &&
      !this.is(element) &&
      !MutationCollect.closestInit(element)
    ) {
      this.items.push(new MutationDataItem(element))
    }

    return this
  }

  /**
   * Removes an element from the list.<br>
   * Удаляет элемент из списка.
   * @param element tracking element /<br>элемент слежения
   */
  remove (element: HTMLElement): this {
    const key = this.find(element)

    if (key >= 0) {
      this.items[key].disconnect()
      this.items.splice(key, 1)
    }

    return this
  }

  /**
   * Searching for an element in the list.<br>
   * Поиск элемента в списке.
   * @param element tracking element /<br>элемент слежения
   */
  private find (element: HTMLElement): number {
    return this.items.findIndex(item => item.is(element))
  }
}
