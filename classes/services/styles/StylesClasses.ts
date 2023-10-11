import { isFilled, isObjectNotArray } from '../../../functions/data.ts'

import { PropertiesItems, type PropertiesItemsItem } from '../properties/PropertiesItems.ts'

import { StylesTool } from './StylesTool.ts'
import { StylesProperties } from './StylesProperties.ts'

import {
  PropertyCategory,
  PropertyKey
} from '../../../types/property.ts'

export type StylesClassesItem = {
  data: string[]
  classes: Record<string, string[]>
}

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
  init (): StylesClassesItem {
    const data: StylesClassesItem['data'] = []
    const classes: StylesClassesItem['classes'] = {}
    const space = StylesTool.addSpace(1)

    this.getList().forEach(property => {
      const {
        value,
        item
      } = property

      if (
        isFilled(value) &&
        isObjectNotArray(value)
      ) {
        const name = item[PropertyKey.name] as string

        data.push(StylesTool.addImport(`./classes/${name}.scss`))

        classes[name] = [
          StylesTool.addImportProperties(),
          '',
          `.${name} {`,
          ...(new StylesProperties(space, property)).make(),
          '}'
        ]
      }
    })

    return {
      data,
      classes
    }
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
