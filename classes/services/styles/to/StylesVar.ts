import { isFilled, isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesItems, type PropertiesItemsItem } from '../../properties/PropertiesItems.ts'
import { PropertiesValues } from '../../properties/PropertiesValues.ts'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property.ts'

/**
 * CSS variable converter class.<br>
 * Класс для преобразования в переменные CSS.
 */
export class StylesVar {
  /**
   * Getting all variables in the current branch.<br>
   * Получение всех переменных в текущей ветке.
   * @param property current branch /<br>текущая ветка
   * @param space space /<br>пробел
   */
  static get (property: PropertiesItemsItem, space: string): string[] {
    const data: string[] = []

    if (isObjectNotArray(property.value)) {
      new PropertiesItems(property.value as PropertyList)
        .each(({ item }) => {
          if (
            item?.[PropertyKey.variable] === PropertyType.var &&
            item?.[PropertyKey.css]
          ) {
            data.push(this.getCode(item, space))
          }
        })
    } else {
      data.push(this.getCode(property.item, space))
    }

    return data
  }

  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   * @param item current element /<br>текущий элемент
   * @param space space /<br>пробел
   */
  private static getCode (item: PropertyItem, space: string): string {
    let value = item[PropertyKey.css]

    if (!isFilled(value)) {
      value = 'unset'
    } else if (PropertiesValues.isColor(value)) {
      value = `#{toColorRbg(${value})}`
    }

    return `${space}${item[PropertyKey.name]}: ${value};`
  }
}
