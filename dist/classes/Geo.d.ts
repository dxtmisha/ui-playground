import { type GeoItem, type GeoItemFull } from '../types/geo.ts';
/**
 * Base class for working with geographic data.<br>
 * Базовый класс для работы с географическими данными.
 */
export declare class Geo {
    private static storage;
    private static location;
    private static item;
    private static language;
    /**
     * Information about the current country.<br>
     * Информация об текущей стране.
     */
    static get(): GeoItemFull;
    /**
     * Current country.<br>
     * Текущая страна.
     */
    static getCountry(): string;
    /**
     * Current language.<br>
     * Текущий язык.
     */
    static getLanguage(): string;
    /**
     * Full format according to the standard.<br>
     * Полный формат согласно стандарту.
     */
    static getStandard(): string;
    /**
     * Returns the first day of the week.<br>
     * Возвращает первый день недели.
     */
    static getFirstDay(): string;
    /**
     * Full format.<br>
     * Полный формат.
     */
    static getLocation(): string;
    /**
     * Obtaining processed data.<br>
     * Получение обработанных данных.
     */
    static getItem(): GeoItemFull;
    /**
     * Returns the full list of countries.<br>
     * Возвращает полный список стран.
     */
    static getList(): GeoItem[];
    /**
     * Determines the current country by its full name.<br>
     * Определяет текущую страну по ее полному названию.
     * @param code country code, full form language-country or one of them /<br>
     * код страны, полный вид язык-страна или один из них
     */
    static find(code: string): GeoItemFull;
    /**
     * Returns a complete string with the country code and language.<br>
     * Возвращает полную строку с кодом страны и языка.
     * @param item object with data about the current country /<br>
     * объект с данными об текущей стране
     */
    static toStandard(item: GeoItem): string;
    /**
     * Changes the data by the full code.<br>
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them /<br>
     * код страны, полный вид язык-страна или один из них
     * @param save save the result /<br>сохранить результат
     */
    static set(code: string, save?: boolean): void;
    /**
     * Returns the data about the country by its full code.<br>
     * Возвращает данные о стране по ее полному коду.
     * @param code country code, full form language-country or one of them /<br>
     * код страны, полный вид язык-страна или один из них
     */
    private static getByCode;
    /**
     * Returns the full data by language and country.<br>
     * Возвращает полные данные по языку и стране.
     * @param code string in the form of language-country /<br>строка в виде язык-страна
     */
    private static getByCodeFull;
    /**
     * Returns the full data by country.<br>
     * Возвращает полные данные по стране.
     * @param country country /<br>страна
     */
    private static getByCountry;
    /**
     * Returns the full data by language.<br>
     * Возвращает полные данные по языку.
     * @param language language /<br>язык
     */
    private static getByLanguage;
    /**
     * Determines the current location.<br>
     * Определяет текущую локацию.
     */
    private static findLocation;
    /**
     * Determines the current language.<br>
     * Определяет текущий язык.
     * @param code country code, full form language-country or one of them /<br>
     * код страны, полный вид язык-страна или один из них
     */
    private static findLanguage;
    /**
     * Returns the country code by its full language-country.<br>
     * Возвращает код страны по ее полному язык-страна.
     * @param code country code /<br>код страна
     */
    private static toCountry;
    /**
     * Returns the language code by its full language-country.<br>
     * Возвращает код языка по его полному язык-страна.
     * @param code country code /<br>код страна
     */
    private static toLanguage;
    /**
     * Adding missing data.<br>
     * Добавление недостающих данных.
     * @param item object with data about the current country /<br>
     * объект с данными об текущей стране
     */
    private static toFull;
}
