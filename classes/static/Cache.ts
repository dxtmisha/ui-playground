import { executeFunction } from '../../functions/data.ts'

/**
 * Class for working with fast cache during code execution.<br>
 * Класс для работы с быстрым кэшем во время выполнения кода.
 */
export class Cache {
  private static cache: Record<string, any> = {}

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  static get<T> (
    name: string,
    callback: () => T
  ): T | undefined {
    if (!this.is(name)) {
      this.set<T>(name, callback)
    }

    return this.cache[name]
  }

  /**
   * Check if the cached value exists.<br>
   * Проверяет, если кэшированная значение существует.
   * @param name cache name /<br>название кэша
   */
  private static is (name: string): boolean {
    return name in this.cache
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
