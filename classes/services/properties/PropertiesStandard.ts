import { forEach } from '../../../functions/data.ts'

import {
  type PropertyList,
  type PropertyListOrData
} from '../../../types/property.ts'

export class PropertiesStandard {
  /**
   * Transforms an array into the required data structure.<br>
   * Преобразует массив в нужную структуру.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to (properties: PropertyListOrData): PropertyList {
    const data: PropertyList = {}

    forEach(properties, (item, name) => {
      // console.log('item', item, name)
    })

    return data
  }
}
