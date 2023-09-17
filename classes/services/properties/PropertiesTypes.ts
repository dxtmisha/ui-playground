import { isFilled, isSelected } from '../../../functions/data.ts'
import { toKebabCase } from '../../../functions/string.ts'
import { toArray } from '../../../functions/object.ts'

import {
  type PropertyItem,
  PropertyType
} from '../../../types/property.ts'

/**
 * Class with a list of available types.<br>
 * Класс со списком доступных типов.
 */
export class PropertiesTypes {
  private static readonly SYMBOLS: Record<string, string> = {
    $: PropertyType.var,
    '::': PropertyType.virtual,
    ':': PropertyType.selector,
    '~': PropertyType.state,
    '#': PropertyType.subclass,
    '@@': PropertyType.linkClass,
    '@': PropertyType.link,
    '&&': PropertyType.root,
    '&': PropertyType.scss,
    '--': PropertyType.none
  }

  /**
   * Checks if the list contains such a type.<br>
   * Проверяет, входит ли в список такой тип.
   * @param type property type /<br>тип свойства
   * @param name key name /<br>название ключа
   */
  static isInType (
    type?: PropertyItem['_type'],
    name?: PropertyType[]
  ): boolean {
    if (
      isFilled(type) &&
      isFilled(name)
    ) {
      return Boolean(toArray(type).find(item => isSelected(item, name)))
    }

    return false
  }

  /**
   * Checks if there is a type in the name of the property.<br>
   * Проверяет, если есть тип в названии свойства.
   * @param name key name /<br>название ключа
   */
  static isTypeInName (name: string): boolean {
    return Boolean(name.match(this.getExpSymbols()))
  }

  /**
   * Checks if it is a media type.<br>
   * Проверяет, если в тип медиа.
   * @param type list of types /<br>список типы
   */
  static isMedia (type: PropertyItem['_type']): boolean {
    return this.isInType(type, [PropertyType.media, PropertyType.mediaMax])
  }

  /**
   * Is the property a SCSS selector.<br>
   * Является ли свойство выборки SCSS.
   * @param name key name /<br>название ключа
   */
  static isScss (name: string): boolean {
    return Boolean(name.match(/^&(?!&)/))
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
   * Returns the variable type name from the property name.<br>
   * Возвращает название типа переменной из названия свойства.
   * @param name key name /<br>название ключа
   */
  static getTypeInName (name: string): PropertyType {
    if (this.isTypeInName(name)) {
      const type = name.replace(this.getExpSymbols(), '$1')

      if (type in this.SYMBOLS) {
        return this.SYMBOLS[type] as PropertyType
      }

      return toKebabCase(type) as PropertyType
    }

    return PropertyType.state
  }

  /**
   * Returns the name of the property by its symbol.<br>
   * Возвращает название свойства по его символу.
   * @param name type names /<br>названия типа
   */
  static getBySymbol (name: string): string | undefined {
    return this.SYMBOLS?.[name]
  }

  /**
   * Returns a regular expression for searching symbols in names.<br>
   * Возвращает регулярное выражение для поиска символов в названиях.
   */
  static getExpSymbols (): RegExp {
    return new RegExp(`^(${this.symbolsToString()}|[\\w-]+(?=[|]))(.*?)$`)
  }

  /**
   * Converting symbol keys to strings.<br>
   * Преобразование ключей-символов в строки.
   */
  private static symbolsToString (): string {
    return Object.keys(this.SYMBOLS).join('|')
  }
}
