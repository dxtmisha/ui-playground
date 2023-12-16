import { forEach, isObjectNotArray } from '../../../functions/data.ts'

import { convectorShadow } from './convector/convectorShadow.ts'

import type { PropertyListOrData } from '../../../types/property.ts'

const LIST: Record<string, (value: any) => string> = {
  boxShadow: convectorShadow
}

/**
 * Class for data type conversion.<br>
 * Класс для преобразования типов данных.
 */
export class PropertiesConvector {
  /**
   * Basic value transformation.<br>
   * Базовое преобразование значения.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   */
  static to (properties: PropertyListOrData): void {
    forEach(properties, item => {
      if (
        item?.type &&
        item.type in LIST
      ) {
        console.log('item 2', item.type, item)
        item.value = LIST[item.type](item.value)
      } else if (
        item?.value &&
        isObjectNotArray(item.value)
      ) {
        this.to(item.value)
      } else if (isObjectNotArray(item)) {
        this.to(item)
      }
    })
  }
}
