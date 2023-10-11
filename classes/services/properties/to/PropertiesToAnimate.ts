import { forEach, isObjectNotArray } from '../../../../functions/data.ts'

import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

/**
 * A class for transforming animate.<br>
 * Класс для преобразования animate.
 */
export class PropertiesToAnimate extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '044-animate'

  protected init (): void {
    this.items.findVariable(PropertyType.animate).forEach(({
      name,
      value,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(this.items.getReName(name, item), item, parents)

      if (isObjectNotArray(value)) {
        forEach(value, (frame, code) => {
          frame[PropertyKey.variable] = PropertyType.animateFrame
          frame[PropertyKey.name] = frame?.[PropertyKey.index] ?? code
        })
      }
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
  ) {
    if (item?.[PropertyKey.fullName]) {
      return name
    } else {
      return `${this.items.getParentsName(parents).join('-')}-${name}`
    }
  }
}
