import { forEach, isFilled, isSelected } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'
import { replaceRecursive } from '../../../functions/object.ts'

import { PropertiesKey } from './PropertiesKey.ts'
import { PropertiesType } from './PropertiesType.ts'

import {
  PropertyFull,
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  type PropertyListOrData
} from '../../../types/property.ts'

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
          PropertiesType.isInName(name)
        ) {
          const value = this.getValue(item)
          const type = value[PropertyKey.type] ?? PropertiesType.getInName(name)
          const key = PropertiesKey.reKey(PropertiesKey.getName(name), type)

          if (
            typeof value === 'object' &&
            'value' in value
          ) {
            this.addType(value, type)
            this.addFull(value, name)
            this.general(value)

            if (key in data) {
              data[key] = replaceRecursive(data[key], value)
              return
            }
          }

          data[key] = value
        } else {
          this.general(item)
          data[PropertiesKey.reKey(name)] = item
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
  private static getValue<T> (value: T | PropertyItem): PropertyItem {
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
        if (PropertiesKey.isSpecialKey(name)) {
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

  /**
   * General processing.<br>
   * Общая обработка.
   * @param item values for conversion /<br>значения для преобразования
   */
  private static general (item: PropertyItem): void {
    this.rename(item)
    this.value(item)
  }

  /**
   * Bring the values of the rename fields to the standard form.<br>
   * Привести значения полей rename в стандартный вид.
   * @param item values for conversion /<br>значения для преобразования
   */
  private static rename (item: PropertyItem): void {
    if (item?.[PropertyKey.rename]) {
      item[PropertyKey.rename] = toKebabCase(item[PropertyKey.rename])
    }
  }

  /**
   * Converts values to string, if they are of type number.<br>
   * Преобразовывает значения в строку, если являются типом число.
   * @param item values for conversion /<br>значения для преобразования
   * @private
   */
  private static value (item: PropertyItem) {
    switch (typeof item?.value) {
      case 'number':
        item.value = item.value.toString()
        break
      case 'string':
        break
    }
  }

  /**
   * Adds the type if it exists.<br>
   * Добавляет тип, если есть.
   * @param item values for conversion /<br>значения для преобразования
   * @param type property type /<br>тип свойства
   */
  private static addType (item: PropertyItem, type: string | string[]): void {
    if (!(PropertyKey.type in item) && type) {
      item[PropertyKey.type] = type
    }
  }

  /**
   * Adds a label that the property name is the final version and does not require additional processing.<br>
   * Добавляет метку, что имя свойства является финальной версией и не требует дополнительной обработки.
   * @param item values for conversion /<br>значения для преобразования
   * @param name key name /<br>название ключа
   */
  private static addFull (item: PropertyItem, name: string): void {
    if (
      PropertiesKey.isFull(name) && (
        !(PropertyKey.full in item) ||
        !isSelected(PropertyFull.name, item[PropertyKey.full])
      )
    ) {
      item[PropertyKey.full] = [PropertyFull.name]
    }
  }
}
