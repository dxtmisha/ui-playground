import { PropertyItem } from '../../../types/property.ts'

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
  static isSpecialKey (key: string): key is keyof PropertyItem {
    return ['value', 'type', 'description'].indexOf(key) !== -1 ||
      Boolean(key.match(/^_/))
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
}
