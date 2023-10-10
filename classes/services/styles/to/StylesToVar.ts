import { isFilled, isObjectNotArray } from '../../../../functions/data.ts'

import { PropertiesItems } from '../../properties/PropertiesItems.ts'
import { PropertiesValues } from '../../properties/PropertiesValues.ts'

import { StylesToAbstract } from './StylesToAbstract.ts'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../../types/property.ts'

/**
 * CSS variable converter class.<br>
 * Класс для преобразования в переменные CSS.
 */
export class StylesToVar extends StylesToAbstract {
  /**
   * Getting all variables in the current branch.<br>
   * Получение всех переменных в текущей ветке.
   */
  protected treatment (): string[] {
    const { value } = this.property

    if (isObjectNotArray(value)) {
      const data: string[] = []

      new PropertiesItems(value).each(({ item }) => {
        if (
          item?.[PropertyKey.variable] === PropertyType.var &&
          item?.[PropertyKey.css]
        ) {
          data.push(this.getCode(item))
        }
      })

      return data
    }

    return [this.getCode()]
  }

  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   * @param item current element /<br>текущий элемент
   */
  private getCode (
    item: PropertyItem = this.item
  ): string {
    let value = item?.[PropertyKey.css]

    if (!isFilled(value)) {
      value = 'unset'
    } else if (PropertiesValues.isColor(value)) {
      value = `#{toColorRbg(${value})}`
    }

    return `${item?.[PropertyKey.name]}: ${value};`
  }
}
