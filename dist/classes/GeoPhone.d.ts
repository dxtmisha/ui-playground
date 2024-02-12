import { type GeoPhoneValue, type GeoPhoneMap, type GeoPhoneMapInfo } from '../types/geo.ts';
/**
 * A class for storing and processing phone number masks.<br>
 * Класс для хранения и обработка маски телефона.
 */
export declare class GeoPhone {
    protected static list: GeoPhoneValue[];
    protected static map: Record<string, GeoPhoneMap>;
    /**
     * Getting an object with information about the phone code and country.<br>
     * Получение объекта с информацией о телефонном коде и стране.
     * @param code country and language code /<br>код страны и языка
     */
    static get(code: string): GeoPhoneValue | undefined;
    /**
     * Getting information by phone.<br>
     * Получение информации по телефону.
     * @param phone phone number /<br>номер телефон
     */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /**
     * We get an array from a list of all phone numbers.<br>
     * Получаем массив из списка всех телефонных кодов.
     */
    static getList(): GeoPhoneValue[];
    /**
     * We get a map of a tree, sorted by its code.<br>
     * Получаем карту дерева, отсортированную по его коду.
     */
    static getMap(): Record<string, GeoPhoneMap>;
    /**
     * Convert to phone mask.<br>
     * Преобразовать в маску телефона.
     * @param phone phone number /<br>номер телефон
     * @param masks a mask to transform a phone number /<br>маска для преобразования номер телефон
     */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /**
     * Deletes the country code from the input number.<br>
     * Удаляет код страны по входному номеру.
     * @param phone phone number /<br>номер телефон
     */
    static removeZero(phone: string): string;
    /**
     * Deletes all characters that do not belong to the mask.<br>
     * Удаляет все символы, не относящиеся к маске.
     * @param mask A mask to transform a phone number /<br>маска для преобразования номер телефон
     */
    protected static getUnnecessaryLength(mask: string): number;
    /**
     * Creating a list for the map.<br>
     * Формирование списка для карты.
     */
    protected static makeList(): void;
    /**
     * Creating a map for search.<br>
     * Создание карты для поиска.
     */
    protected static makeMap(): void;
    /**
     * The method parses a string argument and returns a floating point number.<br>
     * Метод принимает строку в качестве аргумента и возвращает десятичное число.
     * @param value the value to parse /<br>текстовая строка
     */
    protected static toNumber(value: string): string[];
    /**
     * Converts the phone to a standard.<br>
     * Преобразовывает телефон в стандарт.
     * @param phone phone number /<br>номер телефон
     * @param mask a mask to transform a phone number /<br>маска для преобразования номер телефон
     */
    protected static toStandard(phone: string, mask: string): string;
}
