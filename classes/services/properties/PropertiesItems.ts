import { propertyList } from '../../../types/property.ts'

/**
 * Class for working with a list of all properties.<br>
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  private readonly designs: string[]

  /**
   * Constructor
   * @param {Object<string,*>} properties array with all property records /<br>массив со всеми записями свойств
   */
  constructor (
    private properties: propertyList
  ) {
    this.designs = Object.keys(properties)
  }
}
