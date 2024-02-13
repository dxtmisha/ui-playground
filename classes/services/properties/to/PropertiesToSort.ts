import { forEach, isObjectNotArray } from '../../../../functions/data'

import { type PropertiesItemsItem } from '../PropertiesItems'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import { type Item } from '../../../../types/object'
import {
  PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property'

import { sortList } from '../../../../media/propertiesListSort'

type PropertiesSortItem = {
  name: string
  item: PropertyItem
  order: number
}
type PropertiesSortList = PropertiesSortItem[]

/**
 * Class for sorting properties.<br>
 * Класс для сортировки свойств.
 */
export class PropertiesToSort extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '048-sort'

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
    const data: PropertiesSortList = []

    this.items.eachMainOnly((property) => {
      const {
        name,
        value,
        item
      } = property
      const sort = this.getKeys(item)

      if (isObjectNotArray(value)) {
        item.value = this.read(property)
      }

      item[PropertyKey.sort] = sort.index
      data.push({
        name,
        item,
        order: sort.value
      })
    }, properties)

    return this.join(data)
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
   * Getting data about sorting by object.<br>
   * Получение данных о сортировке по объекту.
   * @param item current element /<br>текущий элемент
   */
  private getKeys (item: PropertyItem): Item<number> {
    const category = this.getCategoryName(item)
    const variable = item?.[PropertyKey.variable]

    const sortIndex = sortList.findIndex(
      ({ index }) => index === category || index === variable
    )

    if (sortIndex !== -1) {
      const sort = sortList[sortIndex]
      const order = sort.value.findIndex(names => names.indexOf(item?.[PropertyKey.name] ?? '') !== -1)
      let value = (sortIndex + 1) * 1_000_000

      if (order !== -1) {
        const key = sort.value[order]?.findIndex(name => name === item?.[PropertyKey.name])

        value += order * 1_000

        if (key !== -1) {
          value += key
        } else {
          value += 999
        }
      } else {
        value += 999_999
      }

      return {
        index: `${sort.index}${order > 0 ? `@${order}` : ''}`,
        value
      }
    }

    return {
      index: PropertyType.other,
      value: 99_999_999
    }
  }

  /**
   * Merging records into a list.<br>
   * Соединения записи в список.
   * @param data given for connection /<br>данный для соединения
   */
  private join (data: PropertiesSortList): PropertyList {
    const properties: PropertyList = {}

    data.sort((a, b) => a.order - b.order)

    forEach(data, ({
      name,
      item
    }) => {
      properties[name] = item
    })

    return properties
  }
}
