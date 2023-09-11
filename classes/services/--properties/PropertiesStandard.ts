import { forEach, isFilled } from '../../../functions/data.ts'

import { PropertiesTool } from './PropertiesTool.ts'

import {
  type PropertyItem,
  type PropertyList
} from '../../../types/property.ts'

export class PropertiesStandard {
  /**
   * Transforms an array into the required data structure.<br>
   * Преобразует массив в нужную структуру.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to<T extends PropertyList> (properties: T): T {
    const data = {} as T

    forEach(properties, (item, name) => {
      if (typeof name === 'string') {
        if (
          typeof item !== 'object' ||
          !('value' in item) ||
          PropertiesTool.isVariableInName(name)
        ) {
          const newKey = PropertiesTool.reKey(key, type)
        } else {
          this.__general(item)
          data[Tool.reKey(name)] = item
        }
      }
    })

    return data
  }

  /**
   * Добавляет тип, если есть
   * @param {Object<string, *>|string|number} value values for conversion / значения для преобразования
   * @param {string|undefined} type property type / тип свойства
   * @private
   */
  private static addType (value: PropertyItem, type) {
    if (!(Keys.type in value) && type) {
      value[Keys.type] = type
    }
  }
}
