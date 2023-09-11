import { type PropertyList } from '../../../types/property.ts'

/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  /**
   * Constructor
   * @param properties array with all property records /<br>массив со всеми записями свойств
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private properties?: PropertyList
  ) {
  }

  /**
   * Getting full structure property.<br>
   * Получение полной структуры свойства.
   */
  get (): PropertyList | undefined {
    return this.properties
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  getDesigns (): string[] {
    return (this.properties && Object.keys(this.properties)) ?? []
  }
}
