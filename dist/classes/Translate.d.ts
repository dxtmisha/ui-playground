export type TranslateList<T extends string[]> = {
    [K in T[number]]: string;
};
export type TranslateItemOrList<T extends string | string[]> = T extends string[] ? TranslateList<T> : string;
/**
 * Class for getting the translated text.
 * Класс для получения переведенного текста.
 */
export declare class Translate {
    protected static readonly url: string;
    protected static readonly urlLocalhost = "translate.json";
    protected static readonly data: Record<string, string>;
    protected static cache: string[];
    protected static resolveList: (() => void)[];
    protected static timeout?: any;
    /**
     * Getting the translation text by its code.<br>
     * Получение текста перевода по его коду.
     * @param name code name /<br>название кода
     */
    static get(name: string): Promise<string>;
    /**
     * Getting the translation text by its code (Sync).<br>
     * Получение текста перевода по его коду (Sync).
     * @param name code name /<br>название кода
     */
    static getSync(name: string): string;
    /**
     * Getting a list of translations by an array of text codes.<br>
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations /<br>список кодов для получения переводов
     */
    static getList<T extends string[]>(names: T): Promise<TranslateList<T>>;
    /**
     * Added a list of translated texts.<br>
     * Добавлен список переведенных текстов.
     * @param names list of codes to get translations /<br>список кодов для получения переводов
     */
    static add(names: string | string[]): Promise<void>;
    /**
     * Getting the full title for translation.<br>
     * Получение полного названия для перевода.
     * @param name code name /<br>название кода
     */
    protected static getName(name: string): string;
    /**
     * Getting the list of translations from the server.<br>
     * Получение списка переводов с сервера.
     */
    protected static getResponse(): Promise<Record<string, string>>;
    /**
     * Adding translation data from the server.<br>
     * Добавление данных по переводу с сервера.
     */
    protected static make(): Promise<void>;
}
