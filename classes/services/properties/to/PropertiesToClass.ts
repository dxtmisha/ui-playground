import { type PropertiesItemsItem } from '../PropertiesItems'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property'

/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export class PropertiesToClass extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '030-class'

  protected init (): void {
    this.items.findVariable(PropertyType.classType).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })
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
