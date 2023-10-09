import { forEach, isObjectNotArray } from '../../../../functions/data.ts'

import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property.ts'

import { sortList } from '../../../../media/propertiesListSort.ts'

type PropertiesSortBasic = Record<string, PropertyList>

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
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  private read (properties?: PropertiesItemsItem): PropertyList {
    const data = this.getBasic()

    this.items.eachMainOnly((property) => {
      const {
        name,
        value,
        item
      } = property

      const category = `category-${item?.[PropertyKey.category]}`
      const variable = item?.[PropertyKey.variable]

      if (isObjectNotArray(value)) {
        item.value = this.read(property)
      }

      if (category && category in data) {
        data[category][name] = item
      } else if (variable && variable in data) {
        data[variable][name] = item
      } else {
        data[PropertyType.other][name] = item
      }
    }, properties)

    return this.join(data)
  }

  private getBasic (): PropertiesSortBasic {
    const data: PropertiesSortBasic = {}

    sortList.forEach(({ index }) => {
      data[index] = {}
    })

    return data
  }

  private join (data: PropertiesSortBasic): PropertyList {
    const properties: PropertyList = {}

    forEach(data, items => {
      Object.assign(properties, items)
    })

    return properties
  }
}
