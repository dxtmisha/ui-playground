import { toKebabCase } from '../../../../functions/string.ts'

import { PropertiesItems, type PropertiesItemsItem } from '../PropertiesItems.ts'

import { type PropertyItem, PropertyKey, PropertyType } from '../../../../types/property.ts'

const FILE_CACHE = '028-component'

/**
 * A class for transforming components.<br>
 * Класс для преобразования компонент.
 */
export class PropertiesToComponent {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable([PropertyType.component, PropertyType.theme]).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * Name transformation for the component type.<br>
   * Преобразование имени для типа component.
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
    if (item?.[PropertyKey.fullName]) {
      return `${name}`
    }

    return `${this.items.getParentsName(parents).join('-')}-${toKebabCase(name)}`
  }
}
