import { PropertiesItems, type PropertiesItemsItem } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const FILE_CACHE = '036-subclass'

/**
 * A class for transforming subclass.<br>
 * Класс для преобразования subclass.
 */
export class PropertiesToSubclass {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable(PropertyType.subclass).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * Checks if the top-level type is a state.<br>
   * Проверяет, является ли тип верхнего уровня - это state.
   * @param parents array of all ancestor properties along the tree from the top level /<br>
   * массив со всеми свойствами предков по дереву от верхнего уровня
   */
  private isParentState (parents: PropertiesItemsItem['parents']): boolean {
    return parents[parents.length - 1].item?.[PropertyKey.variable] === PropertyType.state
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
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `& .${newName}`
    } else if (this.isParentState(parents)) {
      const parentsName = this.items.getParentsName(parents, [PropertyType.subclass])
        .join('__')
        .replace('__', '-')

      return `& .${parentsName}__${newName}`
    }

    return `&__${newName}`
  }
}
