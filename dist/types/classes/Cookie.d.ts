type CookieSameSite = 'strict' | 'lax';
export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    arguments?: string[];
};
/**
 * Class for working with cookies.<br>
 * Класс для управления Cookie.
 */
export declare class Cookie<T> {
    private name;
    value?: T | string;
    private options;
    constructor(name: string);
    /**
     * Get data or update if none.<br>
     * Получает данные или обновляет, если их нет.
     * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
     * @param options additional parameters /<br>дополнительные параметры
     */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /**
     * Updates cookie data.<br>
     * Обновляет данные cookie.
     * @param value value or function to change data /<br>значение или функция для изменения данных
     * @param options additional parameters /<br>дополнительные параметры
     */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /**
     * Delete cookie data.<br>
     * Удаление данных из cookie.
     */
    remove(): void;
    /**
     * Returns cache time.<br>
     * Возвращает время кэширования.
     */
    private getAge;
    /**
     * Update cookie data.<br>
     * Обновление данных cookie.
     */
    private update;
}
export {};
