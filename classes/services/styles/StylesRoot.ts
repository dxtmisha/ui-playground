import { toArray } from '../../../functions/object.ts'

import {
  PropertiesItems,
  type PropertiesItemsItem
} from '../properties/PropertiesItems.ts'

import {
  PropertyCategory,
  PropertyKey,
  PropertyType
} from '../../../types/property.ts'

/**
 * Class for generating base properties from tokens.<br>
 * Класс для генерации базовых свойств из токенов.
 */
export class StylesRoot {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  init (): string[] {
    const data: string[] = []

    this.getList().forEach(property => {
      this.items.each(({ item }) => {
        if (
          item?.[PropertyKey.variable] === PropertyType.var &&
          item?.[PropertyKey.code]
        ) {
          data.push(...toArray(item[PropertyKey.code]))
        }
      }, property)
    })

    return data
  }

  /**
   * Getting all properties from base variables.<br>
   * Получение всех свойств из базовых переменных.
   */
  private getList (): PropertiesItemsItem[] {
    return this.items.findCategory(PropertyCategory.root)
  }
}
