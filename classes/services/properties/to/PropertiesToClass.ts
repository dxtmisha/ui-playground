import { PropertiesItems, type PropertiesItemsItem } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const FILE_CACHE = '030-class'

/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export class PropertiesToClass {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable(PropertyType.classType).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private getName (
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsItem['parents']
  ): string {
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `& .${newName}`
    }

    return `& .${parents?.[0]?.name}-${newName}`
  }
}
