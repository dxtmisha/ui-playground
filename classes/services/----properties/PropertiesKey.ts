import { toKebabCase } from '../../../functions/string.ts'

import { PropertiesType } from './PropertiesType.ts'

import {
  type PropertyItem,
  SEPARATOR,
  SYMBOL_AVAILABLE,
  SYMBOL_SEPARATOR
} from '../../../types/property.ts'

export class PropertiesKey {
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
