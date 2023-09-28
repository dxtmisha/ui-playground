import { type PropertyItemPartial } from '../../../types/property.ts'

/**
 * Class for working with the values.
 * Класс для работы со значениями.
 */
export class PropertiesValues {
  /**
   * Checks if the values are complete.<br>
   * Проверяет, является ли значение полным.
   * @param value property value /<br>значение свойства
   */
  static isFull (value: PropertyItemPartial['value']): value is string {
    return typeof value === 'string' && Boolean(value.match(this.getExpFull()))
  }

  /**
   * Checks if the value is a color value.<br>
   * Проверяет, является ли значение цветом.
   * @param value property value /<br>значение свойства
   */
  static isColor (value: PropertyItemPartial['__c']): boolean {
    return Boolean(
      typeof value === 'string' && (
        value.match(/^(#|rgb|rgba)/i)
      )
    )
  }

  /**
   * Removes unnecessary values from the values.<br>
   * Убирает лишние значения из значений.
   * @param value property value /<br>значение свойства
   */
  static reValue (value: PropertyItemPartial['value']): PropertyItemPartial['value'] {
    if (this.isFull(value)) {
      return value.replace(this.getExpFull(), '')
    }

    if (typeof value === 'number') {
      return value.toString()
    }

    return value
  }

  /**
   * Returns a regular expression for validating the format of a value.<br>
   * Возвращает регулярное выражение для проверки полного формата значения.
   */
  static getExpFull (): RegExp {
    return /^=/
  }
}
