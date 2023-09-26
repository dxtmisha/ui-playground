import { PropertiesItems } from '../PropertiesItems.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

const FILE_CACHE = '032-state'

/**
 * A class for transforming components.<br>
 * Класс для преобразования состояния.
 */
export class PropertiesToState {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  to () {
    this.items.findVariable([PropertyType.state]).forEach(({
      name,
      item
    }) => {
      item[PropertyKey.name] = this.getName(name, item)
    })

    this.items.write(FILE_CACHE)
  }

  /**
   * Name transformation for the state type.<br>
   * Преобразование имени для типа state.
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   */
  private getName (name: string, item: PropertyItem): string {
    const newName = this.items.getReName(name, item)

    if (item?.[PropertyKey.fullName]) {
      return `&.${newName}`
    }

    return `&--${newName}`
  }
}
