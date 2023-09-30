import { isFilled } from '../../../functions/data.ts'

import { PropertiesValues } from '../properties/PropertiesValues.ts'

import {
  type PropertyItem,
  PropertyKey
} from '../../../types/property.ts'

/**
 * CSS variable converter class.<br>
 * Класс для преобразования в переменные CSS.
 */
export class StylesVar {
  static get (item: PropertyItem, space: string): string {
    return `${space}${this.getCode(item)}`
  }

  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   * @param item current element /<br>текущий элемент
   */
  private static getCode (item: PropertyItem): string | string[] {
    let value = item[PropertyKey.css]

    if (!isFilled(value)) {
      value = 'unset'
    } else if (PropertiesValues.isColor(value)) {
      value = `#{toColorRbg(${value})}`
    }

    return `${item[PropertyKey.name]}: ${value};`
  }
}
