import { forEach, isObjectNotArray } from '../../../../functions/data.ts'

import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  PropertyItem,
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
      const sort = this.getIndex(item)

      if (isObjectNotArray(value)) {
        item.value = this.read(property)
      }

      item[PropertyKey.sort] = sort
      data[sort][name] = item
    }, properties)

    return this.join(data)
  }

  /**
   * Getting a basic list of empty variables, sorted.<br>
   * Получение базового списка пустых переменных, отсортированного.
   */
  private getBasic (): PropertiesSortBasic {
    const data: PropertiesSortBasic = {}

    sortList.forEach(({
      index,
      value
    }) => {
      if (value.length > 0) {
        for (const key in value) {
          data[`${index}-${key}`] = {}
        }
      }

      data[index] = {}
    })

    return data
  }

  /**
   * Getting the category name of an element.<br>
   * Получение названия категории у элемента.
   * @param item current element /<br>текущий элемент
   */
  private getCategoryName (item: PropertyItem): string {
    return `category-${item?.[PropertyKey.category]}`
  }

  /**
   * Getting the index name of an element.<br>
   * Получение названия индекса у элемента.
   * @param item current element /<br>текущий элемент
   */
  private getIndex (item: PropertyItem): string {
    const category = this.getCategoryName(item)
    const variable = item?.[PropertyKey.variable]

    const sort = sortList.find(
      ({ index }) => index === category || index === variable
    )

    if (sort) {
      const key = sort.value.findIndex(names => names.indexOf(item?.[PropertyKey.name] ?? '') !== -1)

      return `${sort.index}${key > 0 ? `-${key}` : ''}`
    }

    return PropertyType.other
  }

  /**
   * Merging records into a list.<br>
   * Соединения записи в список.
   * @param data given for connection /<br>данный для соединения
   */
  private join (data: PropertiesSortBasic): PropertyList {
    const properties: PropertyList = {}

    forEach(data, items => {
      Object.assign(properties, items)
    })

    return properties
  }
}
