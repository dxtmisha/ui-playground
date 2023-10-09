import { forEach, isObjectNotArray } from '../../../../functions/data.ts'

import { type PropertiesItemsItem } from '../PropertiesItems.ts'
import { PropertiesToAbstract } from './PropertiesToAbstract.ts'

import {
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../../types/property.ts'

const TYPE = [
  PropertyType.var,
  PropertyType.state
]

/**
 * Class for converting properties with multiple values.<br>
 * Класс для преобразования свойств с множеством значений.
 */
export class PropertiesToMulti extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '012-multi'

  /**
   * Converts property records with multiple types.<br>
   * Преобразует записи свойств со множеством типов.
   */
  protected init (): void {
    this.getList().forEach(({
      item,
      name,
      value
    }) => {
      this.read(this.items.getReName(name, item), value as PropertyList)
      item[PropertyKey.variable] = PropertyType.state
    })
  }

  /**
   * Returns a list of properties with multiple values.<br>
   * Возвращает список свойств с множеством значений.
   */
  private getList (): PropertiesItemsItem[] {
    return this.items.each((property) => {
      const {
        item,
        value
      } = property

      if (
        item?.[PropertyKey.variable] === PropertyType.property &&
        isObjectNotArray(value)
      ) {
        return property
      }
    }) as PropertiesItemsItem[]
  }

  /**
   * Transformation for the element.<br>
   * Преобразование для элемента.
   * @param name property name /<br>название свойства transformed /<br>
   * массив, который нужно преобразовать
   * @param properties array with all property records /<br>массив со всеми записями свойств
   */
  private read (name: string, properties: PropertyList) {
    forEach(properties, item => {
      if (
        typeof item.value === 'string' &&
        item?.[PropertyKey.variable] &&
        TYPE.indexOf(item[PropertyKey.variable]) !== -1
      ) {
        item[PropertyKey.variable] = PropertyType.state
        item.value = {
          [name]: {
            value: item.value,
            [PropertyKey.variable]: PropertyType.property
          }
        }
      }
    })
  }
}
