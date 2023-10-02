import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'
import { StylesProperties } from './StylesProperties.ts'

import { PropertyCategory, PropertyKey } from '../../../types/property.ts'
import { isFilled, isObjectNotArray } from '../../../functions/data.ts'

/**
 * A class for generating base classes.<br>
 * Класс для генерации базовых классов.
 */
export class StylesClasses {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Generating all base classes.<br>
   * Генерация всех базовых классов.
   */
  init (): string[] {
    const data: string[] = []
    const space = StylesTool.addSpace(1)
    const stylesProperties = new StylesProperties(this.items)

    this.getList().forEach(property => {
      if (
        isObjectNotArray(property.value) &&
        isFilled(property.value)
      ) {
        data.push(
          '',
          `.${property.item[PropertyKey.name]} {`,
          ...stylesProperties.init(property, space),
          '}'
        )
      }
    })

    return [
      StylesTool.addImportProperties(),
      StylesTool.join(data)
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
