import { forEach, isFilled } from '../../../functions/data.ts'

import { PropertiesTool } from './PropertiesTool.ts'

import {
  type PropertyItem,
  type PropertyList,
  type PropertyListOrData
} from '../../../types/property.ts'
import { PropertiesKey } from './PropertiesKey.ts'

/**
 * A class for transforming a property into a basic structure for work.<br>
 * Класс для преобразования свойства в базовую структуру для работы.
 */
export class PropertiesStandard {
  /**
   * Transforms an array into the required data structure.<br>
   * Преобразует массив в нужную структуру.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to (properties: PropertyListOrData): PropertyList {
    const data: PropertyList = {}

    forEach(properties, (item, name) => {
      if (typeof name === 'string') {
        if (PropertiesKey.isSpecialKey(name)) {
          data[name] = item
        } else if (
          typeof item !== 'object' ||
          !('value' in item) ||
          PropertiesTool.isVariableInName(name)
        ) {
          const value = this.getValue(item)
          const type = value?._type || PropertiesTool.getVariableInName(name)
          const key = PropertiesTool.reKey(PropertiesTool.getName(name), type)

          if (
            typeof value === 'object' &&
            'value' in value
          ) {
            this.__addType(value, type)
            this.__addFull(value, name)
            this.__general(value)

            if (newKey in data) {
              replaceRecursive(data[newKey], value)
              return
            }
          }

          data[key] = value
        } else {

        }
      }
    })

    return data
  }

  /**
   * Transform the property value into the required format.<br>
   * Преобразовать значение свойства в необходимый формат.
   * @param value values for conversion /<br>значения для преобразования
   */
  private static getValue<T> (value: T): PropertyItem | T {
    if (
      typeof value !== 'object' ||
      Array.isArray(value)
    ) {
      return { value } as PropertyItem
    }

    if (isFilled(value)) {
      if (!('value' in value)) {
        return this.getValueAndSpecial(this.to(value as PropertyListOrData))
      }

      if (typeof value.value === 'object') {
        return {
          ...value,
          value: this.to(value.value as PropertyListOrData)
        }
      }

      return value
    }

    return { value: {} }
  }

  /**
   * Separate a special property from regular values.<br>
   * Разделить специальное свойство от обычных значений.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  private static getValueAndSpecial (properties: PropertyList): PropertyItem {
    const value: PropertyList = {}
    const special: PropertyItem = {}

    forEach(properties, (item, name) => {
      if (typeof name === 'string') {
        if (PropertiesTool.isSpecialKey(name)) {
          special[name] = item as any
        } else {
          value[name] = item
        }
      }
    })

    return {
      value,
      ...special
    }
  }
}
