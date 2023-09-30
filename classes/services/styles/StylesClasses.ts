import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'
import { StylesProperties } from './StylesProperties.ts'

import { PropertyCategory, PropertyKey } from '../../../types/property.ts'

export class StylesClasses {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  init (): string[] {
    const data: string[] = ['color:red;']
    const space = StylesTool.addSpace(1)
    const stylesProperties = new StylesProperties(this.items)

    this.getList().forEach(property => {
      data.push(
        '',
        `${space}.${property.item[PropertyKey.name]} {`,
        ...stylesProperties.init(property, StylesTool.increaseSpace(space)),
        `${space}}`
      )
    })

    return [
      StylesTool.addImportProperties(),
      `${data.join('\r\n')}`
    ]
  }

  /**
   * Getting all properties from base variables.<br>
   * Получение всех свойств из базовых переменных.
   */
  private getList (): PropertiesItemsItem[] {
    return this.items.findCategory([PropertyCategory.class, PropertyCategory.theme])
  }
}
