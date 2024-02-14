import { ComputedRef, Ref } from 'vue';
import { GeoFlag } from './GeoFlag';
import { type GeoFlagItem, type GeoFlagNational } from '../types/geo';
import { type RefOrNormal } from '../types/ref';
/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export declare class GeoFlagRef {
    protected code: Ref<string>;
    protected flag: GeoFlag;
    /**
     * Constructor
     * @param code country and language code /<br>код страны и языка
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * Obtaining a reactive object with the country code.<br>
     * Получение реактивного объекта с кодом страны.
     */
    getCode(): Ref<string>;
    /**
     * Returns information about the country and its flag.<br>
     * Возвращает информацию о стране и её флаге.
     * @param code country code /<br>код страны
     */
    get(code?: string): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Getting a link to the flag.<br>
     * Получение ссылки на флаг.
     * @param code country code /<br>код страны
     */
    getFlag(code?: string): ComputedRef<string | undefined>;
    /**
     * Getting a list of countries by an array of codes.<br>
     * Получение списка стран по массиву с кодами.
     * @param codes country code /<br>код страны
     */
    getList(codes?: string[]): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of countries by an array of codes in national language.<br>
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code /<br>код страны.
     */
    getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>;
}
