import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

/**
 * Class for sorting properties.<br>
 * Класс для сортировки свойств.
 */
export class PropertiesToSort extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '48-sort'

  protected init (): void {
    this.read()
  }

  /**
   * Sorts all records.<br>
   * Сортирует все записи.
   * @param property an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  private read (property?: PropertiesItemsItem): void {
    this.items.eachMainOnly(() => {

    }, property)
  }
}
