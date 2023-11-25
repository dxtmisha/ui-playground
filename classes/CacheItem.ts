/**
 * Class for managing a single caching value.
 * Класс для управления одним значением кэширования.
 */
export class CacheItem<T> {
  private cache?: T
  private comparisons: any[] = []

  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly callback: () => T
  ) {
  }

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache (comparison: any[]): T {
    if (this.isUpdate(comparison)) {
      this.setCache()
    }

    return this.cache as T
  }

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync (comparison: any[]): Promise<T> {
    if (this.isUpdate(comparison)) {
      await this.setCacheAsync()
    }

    return this.cache as T
  }

  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  private setCache (): void {
    this.cache = this.callback()
  }

  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  private async setCacheAsync (): Promise<void> {
    this.cache = await this.callback()
  }

  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  private isUpdate (comparison: any[]): boolean {
    if (
      this.comparisons.length !== comparison.length ||
      this.comparisons.findIndex((value, index) => value !== comparison[index]) >= 0
    ) {
      this.comparisons = [...comparison]
      return true
    }

    return false
  }
}
