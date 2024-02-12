/**
 * Working with data stored in hash.<br>
 * Работа с данными сохраненными в хеш.
 */
export declare class Hash {
    private static hash;
    private static watch;
    private static block;
    /**
     * Get data from hash.<br>
     * Получение данных из хэша.
     * @param name variable names /<br>названия переменных
     * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data in hash.<br>
     * Изменение данных в хэше.
     * @param name variable names /<br>названия переменных
     * @param callback value or function to change data /<br>значение или функция для изменения данных
     */
    static set<T>(name: string, callback: T | (() => T)): void;
    /**
     * Adding an event when data is changed.<br>
     * Добавление события при изменении данных.
     * @param name variable names /<br>названия переменных
     * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
     */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Obtaining data from the URL string.<br>
     * Получение данных из строки URL.
     */
    private static getLocation;
    /**
     * Update hash string in URL.<br>
     * Обновление строки хэша в URL.
     */
    private static update;
    /**
     * Update hash variable from URL string.<br>
     * Обновление переменной хэша из строки URL.
     */
    private static reload;
    /**
     * Calling all functions whose data has changed.<br>
     * Вызов всех функций, у которых были изменены данные.
     * @param location fresh data /<br>свежий данные
     */
    private static makeWatch;
}
