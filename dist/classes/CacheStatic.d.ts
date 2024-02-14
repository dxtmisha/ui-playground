/**
 * Class for working with fast cache during code execution.<br>
 * Класс для работы с быстрым кэшем во время выполнения кода.
 */
export declare class CacheStatic {
    private static cache;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
     * @param name cache name /<br>название кэша
     * @param callback function for the cache /<br>функция для кэша
     * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
     */
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
}
