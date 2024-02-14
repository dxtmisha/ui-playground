declare const BASIC: {
    api: {
        index: string;
        value: string;
    };
    apiTranslate: {
        index: string;
        value: string;
    };
    cache: {
        index: string;
        value: number;
    };
    iconPath: {
        index: string;
        value: string;
    };
    language: {
        index: string;
        value: string;
    };
    prefix: {
        index: string;
        value: string;
    };
};
export type EnvIndex = keyof typeof BASIC & string;
/**
 * Class for working with Env.<br>
 * Класс для работы с Env.
 */
export declare class Env {
    private index;
    /**
     * Constructor
     * @param index property name /<br>название свойства
     */
    constructor(index: EnvIndex | string);
    /**
     * Returns the values from the env environment.<br>
     * Возвращает значения из окружения env.
     * @param defaultValue default property value /<br>значение свойства по умолчанию
     */
    get<T>(defaultValue?: T): T;
    /**
     * Getting a basic object with a key name and a default value.<br>
     * Получение базового объекта с названием ключа и значения по умолчанию.
     * @private
     */
    private getBasic;
    /**
     * Get the full key name in env.<br>
     * Получаем полное название ключа в env.
     */
    private getName;
    /**
     * Gets values by its keys.<br>
     * Получает значения по его ключам.
     */
    private getValue;
}
export {};
