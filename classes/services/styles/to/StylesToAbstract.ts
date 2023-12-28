import { forEach } from '../../../../functions/data.ts'

import { type PropertiesItemsItem } from '../../properties/PropertiesItems.ts'

import { type PropertyItem, PropertyKey } from '../../../../types/property.ts'

/**
 * Base class for conversion.<br>
 * Базовый класс для преобразования.
 */
export abstract class StylesToAbstract {
  protected item: PropertyItem

  /**
   * Constructor
   * @param property current branch /<br>текущая ветка
   * @param space space /<br>пробел
   * @param content callable function for sub property /<br>вызываемая функция для под свойства
   * @param first the first element in the list /<br>первый элемент в списке
   */
  constructor (
    protected property: PropertiesItemsItem,
    protected space: string,
    protected content: () => string[] = () => [],
    protected first: boolean = true
  ) {
    this.item = property.item
  }

  /**
   * Getting processed data.<br>
   * Получение обработанных данных.
   */
  make (): string[] {
    return this.addSpace(this.treatment())
  }

  /**
   * Getting the name of a property.<br>
   * Получение названия свойства.
   */
  protected getName (): string {
    return this.item?.[PropertyKey.name] ?? ''
  }

  /**
   * Gets the value of a property.<br>
   * Получает значение свойства.
   */
  protected getValue (): string | undefined {
    return this.item?.[PropertyKey.css]
  }

  /**
   * Method for converting data into a style structure.<br>
   * Метод преобразования данных в структуру стиля.
   */
  protected abstract treatment (): string[]

  /**
   * Adding a space in each line.<br>
   * Добавление пробела в каждую строку.
   * @param data data for processing /<br>данные для обработки
   */
  protected addSpace (data: string[]): string[] {
    return forEach(data, item => `${this.space}${item}`)
  }

  /**
   * Adds an empty line if the element is not the first in the tree.<br>
   * Добавляет пустую строку, если элемент не является первым в дереве.
   */
  protected addEmptyString (): string[] {
    return (this.first ? [''] : [])
  }
}
