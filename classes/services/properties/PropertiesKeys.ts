import { toCamelCase } from '../../../functions/string.ts'

import { PropertiesTypes } from './PropertiesTypes.ts'

import {
  type PropertyItem,
  SEPARATOR,
  SYMBOL_SEPARATOR
} from '../../../types/property.ts'

/**
 * Key with all special keys for token processing.<br>
 * Ключ со всеми специальными ключами для обработки токенов.
 */
export class PropertiesKeys {
  /**
   * Checks if the variable is a special value.<br>
   * Проверяет, является ли переменная специальным значением.
   * @param key key name /<br>название ключа
   */
  static isSpecialKey (key: string | number): key is keyof PropertyItem {
    return typeof key === 'string' && (
      ['value', 'type', 'description'].indexOf(key) !== -1 ||
      Boolean(key.match(/^_/))
    )
  }

  /**
   * Checks whether the name is complete.<br>
   * Проверяет, является ли название полным.
   * @param name key name /<br>название ключа
   */
  static isFull (name: string): boolean {
    return Boolean(name.match(/^=|\|=/))
  }

  /**
   * Returns the property name, discarding its prefix.<br>
   * Возвращает имя свойства, отбрасывая его префикс.
   * @param name key name /<br>название ключа
   */
  static getName (name: string): string {
    let newName = name.replace(PropertiesTypes.getExpSymbols(), '$2')

    if (
      SYMBOL_SEPARATOR !== SEPARATOR &&
      newName.match(SYMBOL_SEPARATOR)
    ) {
      newName = newName.replaceAll(SYMBOL_SEPARATOR, SEPARATOR)
    }

    return toCamelCase(newName)
  }

  /**
   * Transformed key name by its type.<br>
   * Преобразованное название ключа по его типу.
   * @param key property name /<br>название свойства
   * @param type property type /<br>тип свойства
   */
  static reKey (
    key: string,
    type?: PropertyItem['_type']
  ): string {
    const name = this.getName(key)

    if (
      type &&
      PropertiesTypes.isMedia(type) &&
      !name.match(/^media[A-Z]/)
    ) {
      return toCamelCase(`media-${name}`)
    }

    return name
  }
}
