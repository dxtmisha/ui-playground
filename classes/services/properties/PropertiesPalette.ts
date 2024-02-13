import { forEach, isObjectNotArray } from '../../../functions/data'
import { getColumn } from '../../../functions/object'

import { PropertiesItems } from './PropertiesItems'

import {
  PropertyCategory,
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/property'

export type PropertiesPaletteItem = {
  design: string
  value: PropertyItem['value'][]
}
export type PropertiesPaletteList = PropertiesPaletteItem[]

export type PropertiesPaletteUsed = {
  name: string
  value: string[]
}

/**
 * Class for working with colors.<br>
 * Класс для работы с цветами.
 */
export class PropertiesPalette {
  /**
   * Constructor
   * @param items
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (private items: PropertiesItems) {
  }

  /**
   * Returns a list of available saturation levels.<br>
   * Возвращает список доступных уровней насыщенности.
   */
  getShade (): PropertiesPaletteList {
    return forEach(this.items.findCategory(PropertyCategory.shade), ({
      design,
      value
    }) => {
      if (isObjectNotArray(value)) {
        return {
          design,
          value: getColumn(value, 'value')
        }
      }

      return undefined
    }) as PropertiesPaletteList
  }

  /**
   * Getting a list of used values.<br>
   * Получаем список использованных значений.
   */
  getUsed (): PropertiesPaletteUsed[] {
    const list = this.getList()
    const data: PropertiesPaletteUsed[] = []

    this.items.each(({
      design,
      component,
      value,
      item,
      parents
    }) => {
      if (
        component &&
        typeof value === 'string' &&
        item?.[PropertyKey.variable] === PropertyType.var &&
        item?.[PropertyKey.category] !== PropertyCategory.color &&
        item?.[PropertyKey.name] &&
        list.indexOf(this.items.getLink(
          design,
          component,
          value
        )) !== -1
      ) {
        const name = item[PropertyKey.name]
        const code = data.find(code => code.name === name)
        const theme = parents.find(parent => parent.item[PropertyKey.category] === 'theme')?.name || 'basic'
        const color = `--${design}-palette-${theme}-${value.match(/\.([^.{}]+)}/)?.[1]}`

        if (code) {
          code.value.push(color)
        } else {
          data.push({
            name,
            value: [color]
          })
        }
      }
    })

    return data
  }

  /**
   * Getting a list of all colors.<br>
   * Получение списка всех цветов.
   */
  private getList (): PropertyItem['value'][] {
    return forEach(
      this.items.findCategory(PropertyCategory.color),
      ({ value }) => value
    )
  }
}
