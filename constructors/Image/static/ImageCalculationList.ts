import { ImageCalculation } from './ImageCalculation'

/**
 * Class for managing all ImageCalculation objects.<br>
 * Класс для управления всеми объектами ImageCalculation.
 */
export class ImageCalculationList {
  protected static items: ImageCalculation[] = []

  /**
   If the element has a size.
   * Если у элемента есть размер.<br>
   */
  static isSize (): boolean {
    return this.items.find(item => item.isSize()) !== undefined
  }

  /**
   * Returning an object for calculation by its name.<br>
   * Возвращение объекта для вычисления по его имени.
   * @param name group name /<br>название группы
   */
  static get (name: string): ImageCalculation {
    return this.find(name) || this.init(name)
  }

  /**
   * Updating all records for all groups.<br>
   * Обновление всех записей у всех групп.
   */
  static reset () {
    this.items.forEach(item => item.reset())
  }

  /**
   * Searching for a value by the group name.<br>
   * Поиск значения по названию группы.
   * @param name group name /<br>название группы
   */
  protected static find (name: string): ImageCalculation | undefined {
    return this.items.find(item => item.is(name))
  }

  /**
   * Creating a new object.<br>
   * Создание нового объекта.
   * @param name group name /<br>название группы
   */
  protected static init (name: string): ImageCalculation {
    const item = new ImageCalculation(name)

    this.items.push(item)
    return item
  }
}
