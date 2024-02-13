import { forEach, isObjectNotArray } from '../../../../functions/data'
import { getColumn } from '../../../../functions/object'
import { toCamelCase } from '../../../../functions/string'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import { type PropertiesItemsItem } from '../PropertiesItems'

import { PropertyKey, SEPARATOR } from '../../../../types/property'

type PropertiesDuplicateListItem = {
  value: string
  property: PropertiesItemsItem
}
type PropertiesDuplicateList = Record<string, PropertiesDuplicateListItem>
type PropertiesDuplicateItem = {
  value: string
  properties: PropertiesDuplicateList
}
type PropertiesDuplicate = PropertiesDuplicateItem[]

/**
 * Class for searching for duplicate properties and highlighting them.<br>
 * Класс для поиска дублирующих свойств и выделения их.
 */
export class PropertiesToDuplicate extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '910-duplicate'

  protected init (): void {
    const list = this.initList()
    const duplicate = this.initDuplicate(list)

    forEach(duplicate, (item) => {
      const name = this.getName(item.properties)

      Object.values(item.properties).forEach(property => {
        property.property.item[PropertyKey.duplicate] = name
      })
    })
  }

  /**
   * Returns the name of the group for the selected values.<br>
   * Возвращает имя группы для выбранных значений.
   * @param properties list of selected properties /<br>список выбранных свойств
   */
  protected getName (
    properties: PropertiesDuplicateItem['properties']
  ): string {
    const list: Record<string, string[]> = {}
    const data: string[] = []

    Object.keys(properties).forEach(item => {
      let parentName: string = 'main'

      item.split(SEPARATOR).forEach(name => {
        if (!(parentName in list)) {
          list[parentName] = [name]
        } else {
          list[parentName].push(name)
        }

        parentName = name
      })
    })

    Object.values(list).forEach(item => {
      item.forEach(name => {
        if (data.indexOf(name) === -1) {
          data.push(name)
        }
      })
    })

    return toCamelCase(data.join('-'))
  }

  /**
   * Search for duplicate values.<br>
   * Поиск дублирующих значений.
   * @param list list for search /<br>список для поиска
   * @param valueDuplicate values for search /<br>значения для поиска
   * @protected
   */
  protected findDuplicate (
    list: PropertiesDuplicateList,
    valueDuplicate: string
  ): PropertiesDuplicateList {
    const data: PropertiesDuplicateList = {}

    forEach(list, (item, link) => {
      const { value } = item

      if (value === valueDuplicate) {
        data[link] = item
      }
    })

    return data
  }

  /**
   * Getting the full list of tree branches.<br>
   * Получение полного списка ветки дерева.
   */
  protected initList (): PropertiesDuplicateList {
    const data: PropertiesDuplicateList = {}

    this.items.each(property => {
      if (
        property?.design &&
        property?.component &&
        isObjectNotArray(property.value) &&
        Object.keys(property.value).length >= 5
      ) {
        const name = getColumn(property.parents, 'name').join(SEPARATOR)

        data[`${name}${SEPARATOR}${property.name}`] = {
          value: `${property.design}::${property.component}::${JSON.stringify(property.value)}`,
          property
        }
      }
    })

    return data
  }

  /**
   * Search for duplicate values.<br>
   * Поиск дублирующих значений.
   * @param list list for search /<br>список для поиска
   */
  protected initDuplicate (
    list: PropertiesDuplicateList
  ): PropertiesDuplicate {
    const duplicate: string[] = []
    const data: PropertiesDuplicate = []

    forEach(list, ({ value }, link) => {
      if (duplicate.indexOf(link) === -1) {
        const properties = this.findDuplicate(list, value)
        const keys = Object.keys(properties)

        if (keys.length > 1) {
          data.push({
            value,
            properties
          })
        }

        duplicate.push(...keys)
      }
    })

    return data
  }
}
