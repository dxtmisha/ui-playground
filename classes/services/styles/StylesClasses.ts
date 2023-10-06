import { isFilled, isObjectNotArray } from '../../../functions/data.ts'

import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'
import { StylesProperties } from './StylesProperties.ts'

import {
  PropertyCategory,
  PropertyKey
} from '../../../types/property.ts'

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

    this.getList().forEach(({
      value,
      item
    }) => {
      if (
        isFilled(value) &&
        isObjectNotArray(value)
      ) {
        data.push(
          '',
          `.${item[PropertyKey.name]} {`,
          ...(new StylesProperties(space, item)).make(),
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
    return this.items.findCategory([
      PropertyCategory.class,
      PropertyCategory.theme
    ])
  }
}
