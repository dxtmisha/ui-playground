import { toKebabCase } from '../../../functions/string.ts'

import { PropertiesType } from './PropertiesType.ts'

import {
  type PropertyItem,
  SEPARATOR,
  SYMBOL_AVAILABLE,
  SYMBOL_SEPARATOR
} from '../../../types/property.ts'

/**
 * Key with all special keys for token processing.<br>
 * Ключ со всеми специальными ключами для обработки токенов.
 */
export class PropertiesKey {
  /**
   * Checks if the variable is a special value.<br>
   * Проверяет, является ли переменная специальным значением.
   * @param key key name /<br>название ключа
   */
  static isSpecialKey (key: string): key is keyof PropertyItem {
    return Boolean(key.match(/^_/)) ||
      [
        'value',
        'type',
        'description'
      ].indexOf(key) !== -1
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
    if (
      PropertiesType.isScss(name) ||
      PropertiesType.isRoot(name)
    ) {
      return name
    }

    return toKebabCase(
      name.replace(new RegExp(`^(.*?)(${SYMBOL_AVAILABLE})$`), '$2')
    )
  }

  /**
   * Transformed key name by its type.<br>
   * Преобразованное название ключа по его типу.
   * @param key property name /<br>название свойства
   * @param type property type /<br>тип свойства
   */
  static reKey (
    key: string,
    type?: string | string[]
  ): string {
    if (
      type &&
      PropertiesType.isMedia(type) &&
      !key.match(/^media-/)
    ) {
      return `media-${key}`
    }

    return toKebabCase(
      SYMBOL_SEPARATOR !== SEPARATOR
        ? key.replaceAll(SYMBOL_SEPARATOR, SEPARATOR)
        : key
    )
  }
}
