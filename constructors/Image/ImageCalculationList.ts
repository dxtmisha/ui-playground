import { ImageCalculation } from './ImageCalculation.ts'

/**
 * Class for managing all ImageCalculation objects.<br>
 * Класс для управления всеми объектами ImageCalculation.
 */
export class ImageCalculationList {
  protected static items: ImageCalculation[] = []

  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  static isSize (): boolean {
    return this.items.find(item => item.isSize()) !== undefined
  }

  /**
   * Returns an object with data for calculation by the name of its group.<br>
   * Возвращает объект с данными для вычисления по названию его группы.
   * @param name group name /<br>название группы
   */
  static get (name: string): ImageCalculation {
    return this.find(name) || this.init(name)
  }

  /**
   * Resets all parameters for all groups.<br>
   * Сбрасывает все параметры для всех групп.
   */
  static reset (): void {
    this.items.forEach(item => item.reset())
  }

  /**
   * Search for the ImageCalculation object by the name of the group.<br>
   * Поиск объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  protected static find (name: string): ImageCalculation | undefined {
    return this.items.find(item => item.is(name))
  }

  /**
   * Creating a new ImageCalculation object by the name of the group.<br>
   * Создание нового объекта ImageCalculation по названию группы.
   * @param name group name /<br>название группы
   */
  protected static init (name: string): ImageCalculation {
    const item = new ImageCalculation(name)

    this.items.push(item)
    return item
  }
}
