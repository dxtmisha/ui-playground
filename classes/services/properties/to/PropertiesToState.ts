import { isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesToAbstract } from './PropertiesToAbstract.ts'
import { type PropertiesItemsItem } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

/**
 * A class for transforming components.<br>
 * Класс для преобразования состояния.
 */
export class PropertiesToState extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '032-state'

  protected init (): void {
    this.items.findVariable([PropertyType.state]).forEach(({
      name,
      item,
      parents
    }) => {
      item[PropertyKey.name] = this.getName(name, item, parents)
    })
  }

  /**
   * Name transformation for the state type.<br>
   * Преобразование имени для типа state.
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   * @param parents current element /<br>текущий элемент
   */
  private getName (
    name: string,
    item: PropertyItem,
    parents: PropertiesItemsItem['parents']
  ): string {
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `&.${newName}`
    }

    if (
      !item?.[PropertyKey.state] &&
      parents.length > 2 &&
      isObjectNotArray(parents?.[1].item.value) &&
      name in parents?.[1].item.value &&
      parents?.[1].item.value[name][PropertyKey.variable] === PropertyType.state
    ) {
      return `&.${parents?.[1].item[PropertyKey.name]}--${newName}`
    }

    return `&--${newName}`
  }
}
