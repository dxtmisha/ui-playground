/**
 * Class for working with localStorage.<br>
 * Класс для работы с localStorage.
 */
export declare class DataStorage<T> {
    private name;
    private isSession;
    private value?;
    private age?;
    /**
     * Constructor
     * @param name value name /<br>название значения
     * @param isSession should we use a session? /<br>использовать ли сессию?
     */
    constructor(name: string, isSession?: boolean);
    /**
     * Getting data from local storage.<br>
     * Получение данных из локального хранилища.
     * @param defaultValue default value /<br>значение по умолчанию
     * @param cache cache time /<br>время кэширования
     */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /**
     * Changing data in storage.<br>
     * Изменение данных в хранилище.
     * @param value new values /<br>новые значения
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Checks for storage time limit.<br>
     * Проверяет на лимит времени хранения.
     * @param cache cache time /<br>время кэширования
     */
    private isCache;
    /**
     * Returns an object for working with storage.<br>
     * Возвращает объект для работы с хранилищем.
     */
    private getMethod;
    /**
     * Getting the user name in the storage.<br>
     * Получение имени пользователя в хранилище.
     */
    private getIndex;
    /**
     * Getting data from storage.<br>
     * Получение данных из хранилища.
     */
    private getValue;
}
