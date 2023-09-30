import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { type PropertyItem, PropertyKey, PropertyType } from '../../../types/property.ts'
import { StylesTool } from './StylesTool.ts'
import { StylesVar } from './StylesVar.ts'

const TYPE_AUXILIARY = [
  'selector',
  'virtual'
]

const TYPE_BASIC = [
  'var',
  'property',
  'scss'
]

export class StylesProperties {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  init (
    property: PropertiesItemsItem,
    space: string,
    parent?: PropertyItem
  ): string[] {
    const data: string[] = []

    this.items.eachMainOnly(propertyItem => {
      if (
        this.isTypeAuxiliary(parent) &&
        this.isTypeAuxiliary(propertyItem.item) &&
        !this.isTypeBasic(property)
      ) {
        data.push(
          `${space}& {`,
          ...this.init(property, StylesTool.increaseSpace(space)),
          `${space}}`
        )
      } else {
        data.push(...this.toByType(property, space))
      }
    }, property)

    return data
  }

  private isTypeAuxiliary (item?: PropertyItem): boolean {
    return Boolean(item && TYPE_AUXILIARY.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  private isTypeBasic (item: PropertyItem): boolean {
    return Boolean(item && TYPE_BASIC.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  private toByType (
    property: PropertiesItemsItem,
    space: string
  ) {
    const data: string[] = []
    const {
      value,
      item
    } = property

    switch (item?.[PropertyKey.variable]) {
      case PropertyType.var:
        data.push(new StylesVar(this.items))
        break
    }

    return data
  }
}
