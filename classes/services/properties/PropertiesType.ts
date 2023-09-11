import { isSelected } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'

import {
  PropertyType,
  SYMBOL_AVAILABLE,
  SYMBOLS
} from '../../../types/property.ts'

/**
 * Class with a list of available types.<br>
 * Класс со списком доступных типов.
 */
export class PropertiesType {
  /**
   * Is the property a SCSS selector.<br>
   * Является ли свойство выборки SCSS.
   * @param name key name /<br>название ключа
   */
  static isScss (name: string): boolean {
    return Boolean(name.match(/^&/))
  }

  /**
   * Is the property extraction SCSS for @at-root.<br>
   * Является ли свойство выборки SCSS для @at-root.
   * @param name key name /<br>название ключа
   */
  static isRoot (name: string): boolean {
    return Boolean(name.match(/^&&/))
  }

  /**
   * Checks if it is a media type.<br>
   * Проверяет, если в тип медиа.
   * @param type list of types /<br>список типы
   */
  static isMedia (type: string | string[]): boolean {
    return isSelected(PropertyType.media, type) || isSelected(PropertyType.mediaMax, type)
  }

  /**
   * Checks if there is a type in the name of the property.<br>
   * Проверяет, если есть тип в названии свойства.
   * @param name key name /<br>название ключа
   */
  static isInName (name: string): boolean {
    return !this.isScss(name) &&
      Boolean(name.match(new RegExp(`^.+([|].*?$|${SYMBOL_AVAILABLE})$`)))
  }

  /**
   * Returns the variable type name from the property name.<br>
   * Возвращает название типа переменной из названия свойства.
   * @param name key name /<br>название ключа
   */
  static getInName (name: string): string {
    if (this.isRoot(name)) {
      return PropertyType.root
    }

    if (this.isScss(name)) {
      return PropertyType.scss
    }

    return toKebabCase(
      name.replace(new RegExp(`^(.*?)([|].*?$|${SYMBOL_AVAILABLE}$)`), '$1')
    )
  }

  /**
   * Returns the name of the property by its symbol.<br>
   * Возвращает название свойства по его символу.
   * @param name type names /<br>названия типа
   */
  static getBySymbol (name: string): string | undefined {
    return SYMBOLS?.[name as keyof typeof SYMBOLS]
  }
}
