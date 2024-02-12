/**
 * Class for managing a single caching value.
 * Класс для управления одним значением кэширования.
 */
export declare class CacheItem<T> {
    private readonly callback;
    private cache?;
    private comparisons;
    /**
     * Constructor
     * @param callback function for the cache /<br>функция для кэша
     */
    constructor(callback: () => T);
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
     * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
     */
    getCache(comparison: any[]): T;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
     * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
     */
    getCacheAsync(comparison: any[]): Promise<T>;
    /**
     * Overwrites or adds new values for the cache.<br>
     * Перезаписывает или добавляет новые значения для кэша.
     */
    private setCache;
    /**
     * Overwrites or adds new values for the cache (Async).<br>
     * Перезаписывает или добавляет новые значения для кэша (Async).
     */
    private setCacheAsync;
    /**
     * Checking additional data.<br>
     * Проверка дополнительных данных.
     * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
     */
    private isUpdate;
}
