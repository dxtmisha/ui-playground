/**
 * Common class with diverse functionality.<br>
 * Общий класс с разнообразным функционалом.
 */
export class PropertiesTool {
  /**
   * Checks whether a value is a reference.<br>
   * Проверяет, является ли значение ссылкой.
   * @param value values of properties from the value field /<br>значения свойств из поля value
   */
  static isLink<T> (value: T): boolean {
    return typeof value === 'string' && !!value.match(/{[^{}]+}/)
  }

  /**
   * This method returns the names of designs from the environment variable (env).<br>
   * Данный метод возвращает названия дизайнов из переменной окружения (env)
   */
  static getDesigns (): string[] {
    const designs = process.env?.DESIGNS
      ?.toString()
      ?.split(',')

    return designs ?? []
  }
}
