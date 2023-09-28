import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { PropertyCategory, PropertyKey, PropertyStyles, PropertyType } from '../../../types/property.ts'
import { toArray } from '../../../functions/object.ts'

export class StylesRoot {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  init (): PropertyStyles {
    const data: PropertyStyles = {}

    this.getList().forEach(property => {
      this.items.each(({
        design,
        item
      }) => {
        if (
          item?.[PropertyKey.variable] === PropertyType.var &&
          item?.[PropertyKey.code]
        ) {
          if (!(design in data)) {
            data[design] = []
          }

          data[design].push(...toArray(item[PropertyKey.code]))
        }
      }, property)
    })

    return data
  }

  private getList (): PropertiesItemsItem[] {
    return this.items.findCategory(PropertyCategory.root)
  }
}
