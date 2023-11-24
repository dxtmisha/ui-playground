import { executeFunction, isArray } from '../functions/data.ts'

/**
 * Class for working with fast cache during code execution.<br>
 * Класс для работы с быстрым кэшем во время выполнения кода.
 */
export class Cache {
  private static cache: Record<string, any> = {}
  private static comparisons: Record<string, any[]> = {}

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get<T> (
    name: string,
    callback: () => T,
    comparison?: any[]
  ): T | undefined {
    if (!this.is(name, comparison)) {
      this.set<T>(name, callback)
    }

    return this.cache[name]
  }

  /**
   * Check if the cached value exists.<br>
   * Проверяет, если кэшированная значение существует.
   * @param name cache name /<br>название кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  private static is (
    name: string,
    comparison?: any[]
  ): boolean {
    return name in this.cache && this.isComparison(name, comparison)
  }

  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name cache name /<br>название кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  private static isComparison (
    name: string,
    comparison?: any[]
  ): boolean {
    if (isArray(comparison)) {
      if (
        name in this.comparisons &&
        this.comparisons[name].length === comparison.length &&
        this.comparisons[name].find((value, index) => value !== comparison[index])
      ) {
        return true
      }

      this.comparisons[name] = [...comparison]
      return false
    }

    return true
  }

  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   * @param name cache name /<br>название кэша
   * @param valueCallback if you pass a function, it will execute when there is no value
   * and save the values /<br>если вы передадите функцию, она выполнится при отсутствии
   * значения и сохранит значения
   */
  private static set<T> (name: string, valueCallback?: T | (() => T)): void {
    this.cache[name] = executeFunction(valueCallback)
  }
}
