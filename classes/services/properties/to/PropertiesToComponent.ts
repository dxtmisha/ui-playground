import { type PropertiesItemsItem } from '../PropertiesItems'
import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property'

/**
 * A class for transforming components.<br>
 * Класс для преобразования компонент.
 */
export class PropertiesToComponent extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '028-component'

  protected init (): void {
    this.items.findVariable([PropertyType.component, PropertyType.theme]).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(this.items.getReName(name, item), item, parents)
    })
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
      return `${newName}`
    }

    return `${this.items.getParentsName(parents).join('-')}-${newName}`
  }
}
