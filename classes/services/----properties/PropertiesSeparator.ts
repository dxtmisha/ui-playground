import { forEach, isFilled, isObject } from '../../../functions/data.ts'
import { replaceRecursive } from '../../../functions/object.ts'

import {
  type PropertyItem,
  PropertyKey,
  type PropertyList,
  SEPARATOR
} from '../../../types/property.ts'

/**
 * The base name, which is taken as the starting value. Used in grouped names.<br>
 * Базовое название, которое принимается как стартовое значение. Используется в группированных именах.
 */
const BASIC = process.env.TOKEN_SEPARATOR_BASIC || 'basic'

/**
 * Indicates how far inside the array it is necessary to check for the presence of grouped values.<br>
 * Указывает, на сколько внутри массива надо проверять на наличие группированных значений.
 */
const LIMIT = parseInt(process.env.TOKEN_SEPARATOR_LIMIT ?? '3') || 3

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
   * @return {boolean}
   */
  static is (
    properties: PropertyList,
    limit = LIMIT
  ): boolean {
    if (
      limit > 0 &&
      isFilled(properties) &&
      isObject(properties)
    ) {
      for (const item in properties) {
        if (item.match(SEPARATOR)) {
          return true
        }

        const value = properties[item]?.value

        if (
          isObject(value) &&
          !Array.isArray(value) &&
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
  static to (
    properties: PropertyList
  ): PropertyList {
    if (isObject(properties)) {
      let data: PropertyList = {}

      forEach(properties, (item, name) => {
        if (typeof name === 'string') {
          const value = this.getValue(item?.value)
          let newProperties: PropertyList

          if (this.isSeparator(name)) {
            const list = this.removeBasicName(name).split(SEPARATOR)

            newProperties = this.wrap(list, {
              ...item,
              value
            })?.value as PropertyList
          } else {
            newProperties = {
              [name]: {
                ...item,
                value
              }
            }
          }

          data = replaceRecursive(data, newProperties)
        }
      })

      return data
    }

    return properties
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
   * Returns the processed values.<br>
   * Возвращает обработанные значения
   * @param value values to be processed /<br>значения для обработки
   */
  private static getValue<T> (value: T): PropertyList | T {
    if (
      isObject(value) &&
      !Array.isArray(value)
    ) {
      return this.to(value as PropertyList)
    }

    return value
  }

  /**
   * Removing unnecessary characters from the name.<br>
   * Удаление лишних символов из названия.
   * @param name property names /<br>названия свойств
   */
  private static removeBasicName (name: string): string {
    return name
      .replaceAll(`${SEPARATOR}${BASIC}`, '')
      .replace(new RegExp(`${SEPARATOR}$`), '')
  }

  /**
   * Packs a property into objects by an array of titles.<br>
   * Упаковывает свойство в объекты по массиву названий.
   * @param list array of titles /<br>массив названий
   * @param item property values /<br>значения свойств
   */
  private static wrap (list: string[], item: PropertyItem) {
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
          }
        }
      })

    return data
  }
}
