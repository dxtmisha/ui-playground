import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import { type PropertiesItemsItem, PropertiesItemsParent } from '../PropertiesItems.ts'
import { PropertyItem, PropertyKey } from '../../../../types/property.ts'

export class PropertiesToDrag extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '007-02-drag'

  protected init (): void {
    this.read()
  }

  protected read (
    properties?: PropertiesItemsItem
  ) {
    this.items.eachMainOnly(
      property => {
        this.read(property)

        const {
          item,
          parents
        } = property

        if (item?.[PropertyKey.drag]) {
          this.drag(parents, item)
        }
      },
      properties
    )
  }

  protected drag (
    parents: PropertiesItemsParent[],
    item: PropertyItem
  ): void {
    console.log('item.value', item.value)
  }
}
