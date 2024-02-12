/**
 * Class for working with data visualization. This is for working with the password type.<br>
 * Класс для работы с визуализацией данных. Это для работы с типом пароля.
 */
export declare class InputVisibility {
    protected readonly callback: () => void;
    protected visibility: boolean;
    /**
     * Constructor
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(callback: () => void);
    /**
     * Returns the value.<br>
     * Возвращает значение.
     */
    get(): boolean;
    /**
     * Toggles the values.<br>
     * Переключает значения.
     */
    toggle(): this;
}
