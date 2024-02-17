import { GeoIntl } from './GeoIntl';
import { type GeoFlagItem, type GeoFlagNational, type GeoItemFull } from '../types/geo';
export declare const GEO_FLAG_ICON_NAME = "@flag";
/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export declare class GeoFlag {
    protected code: string;
    static flags: Record<string, string>;
    /**
     * Constructor
     * @param code country and language code /<br>код страны и языка
     */
    constructor(code?: string);
    /**
     * Returns information about the country and its flag.<br>
     * Возвращает информацию о стране и её флаге.
     * @param code country code /<br>код страны
     */
    get(code?: string): GeoFlagItem | undefined;
    /**
     * Getting a link to the flag.<br>
     * Получение ссылки на флаг.
     * @param code country code /<br>код страны
     */
    getFlag(code?: string): string | undefined;
    /**
     * Getting a list of countries by an array of codes.<br>
     * Получение списка стран по массиву с кодами.
     * @param codes country code /<br>код страны
     */
    getList(codes?: string[]): GeoFlagItem[];
    /**
     * Getting a list of countries by an array of codes in national language.<br>
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code /<br>код страны.
     */
    getNational(codes?: string[]): GeoFlagNational[];
    /**
     * To change the location.<br>
     * Изменить местоположение.
     * @param code country and language code /<br>код страны и языка
     */
    setCode(code: string): this;
    /**
     * Returns a special object for formatting.<br>
     * Возвращает специальный объект для работы с форматированием.
     */
    protected getLocation(): GeoIntl;
    /**
     * Returns a list of countries to retrieve data from.<br>
     * Возвращает список стран для получения данных.
     * @param codes country code /<br>код страны
     */
    protected getCodes(codes?: string[]): string[];
    /**
     * Getting the name of the language.<br>
     * Получение названия языка.
     * @param data object with information of data /<br>объект с информацией данных
     */
    protected getLanguage(data: GeoItemFull): string;
    /**
     * Getting the name of the country.<br>
     * Получение названия страны.
     * @param data object with information of data /<br>объект с информацией данных
     */
    protected getCountry(data: GeoItemFull): string;
}
