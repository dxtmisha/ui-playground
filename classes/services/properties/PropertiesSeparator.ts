import { forEach, isObjectNotArray } from '../../../functions/data.ts'
import { replaceRecursive } from '../../../functions/object.ts'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  SEPARATOR
} from '../../../types/property.ts'

const BASIC = process.env.TOKEN_SEPARATOR_BASIC || 'basic'
const LIMIT = parseInt(process.env.TOKEN_SEPARATOR_LIMIT ?? '6') || 6

/**
 * Class for working with property splitting into multiple sub-properties.<br>
 * Класс для работы с разделением свойства на множество под-свойств.
 */
export class PropertiesSeparator {
  /**
   * Checks if the structure has grouped records.<br>
   * Проверяет, есть ли у структуры сгруппированные записи.
   * @param properties an array that needs to be transformed /<br>
   * массив, который нужно преобразовать
   * @param limit the maximum permissible level of verification /<br>
   * максимальный допустимый уровень проверки
   */
  static is (
    properties: PropertyList,
    limit = LIMIT
  ): boolean {
    if (limit > 0) {
      for (const item in properties) {
        if (item.match(SEPARATOR)) {
          return true
        }

        const value = properties[item].value

        if (
          value &&
          isObjectNotArray(value) &&
          this.is(value, limit - 1)
        ) {
          return true
        }
      }
    }

    return false
  }

  /**
   * Transforming a property with long names with separators into a set of sub-properties.<br>
   * Преобразование свойства с длинными названиями с разделителями на множество под-свойств.
   * @param properties an array that needs to be transformed /<br>массив, который нужно преобразовать
   */
  static to (properties: PropertyList): PropertyList {
    let data: PropertyList = {}

    forEach(properties, (item, name) => {
      const newItem: PropertyItem = {
        ...item,
        value: isObjectNotArray(item.value) ? this.to(item.value) : item.value
      }

      if (this.isSeparator(name)) {
        data = replaceRecursive(data, this.wrap(newItem, this.removeBasicName(name)))
      } else {
        data = replaceRecursive(data, { [name]: newItem })
      }
    })

    return data
  }

  /**
   * Checks if the property is suitable for splitting.<br>
   * Проверяет, подходит ли свойство для разделения.
   * @param name property names /<br>названия свойств
   * @private
   */
  private static isSeparator (name: string): boolean {
    return Boolean(name.match(SEPARATOR))
  }

  /**
   * Removing unnecessary characters from the name.<br>
   * Удаление лишних символов из названия.
   * @param name property names /<br>названия свойств
   */
  private static removeBasicName (name: string): string[] {
    return name
      .replaceAll(`${SEPARATOR}${BASIC}`, '')
      .replace(new RegExp(`${SEPARATOR}$`), '')
      .split(SEPARATOR)
  }

  /**
   * Packs a property into objects by an array of titles.<br>
   * Упаковывает свойство в объекты по массиву названий.
   * @param item property values /<br>значения свойств
   * @param list array of titles /<br>массив названий
   */
  private static wrap (item: PropertyItem, list: string[]): PropertyList {
    let data = item;

    [...list]
      .reverse()
      .forEach(name => {
        data = {
          value: {
            [name]: {
              ...data,
              [PropertyKey.wrap]: true
            }
          },
          [PropertyKey.type]: null
        }
      })

    return data.value as PropertyList
  }
}
