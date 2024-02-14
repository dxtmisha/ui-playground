import { type PropertyItem, PropertyType } from '../../../types/property';
/**
 * Class with a list of available types.<br>
 * Класс со списком доступных типов.
 */
export declare class PropertiesTypes {
    private static readonly SYMBOLS;
    /**
     * Checks if the list contains such a type.<br>
     * Проверяет, входит ли в список такой тип.
     * @param type property type /<br>тип свойства
     * @param name key name /<br>название ключа
     */
    static isInType(type?: PropertyItem['_type'], name?: PropertyType[]): boolean;
    /**
     * Checks if there is a type in the name of the property.<br>
     * Проверяет, если есть тип в названии свойства.
     * @param name key name /<br>название ключа
     */
    static isTypeInName(name: string): boolean;
    /**
     * Checks if it is a media type.<br>
     * Проверяет, если в тип медиа.
     * @param type list of types /<br>список типы
     */
    static isMedia(type: PropertyItem['_type']): boolean;
    /**
     * Is the property a SCSS selector.<br>
     * Является ли свойство выборки SCSS.
     * @param name key name /<br>название ключа
     */
    static isScss(name: string): boolean;
    /**
     * Is the property extraction SCSS for @at-root.<br>
     * Является ли свойство выборки SCSS для @at-root.
     * @param name key name /<br>название ключа
     */
    static isRoot(name: string): boolean;
    /**
     * Returns the variable type name from the property name.<br>
     * Возвращает название типа переменной из названия свойства.
     * @param name key name /<br>название ключа
     */
    static getTypeInName(name: string): PropertyItem['_type'];
    /**
     * Returns the name of the property by its symbol.<br>
     * Возвращает название свойства по его символу.
     * @param name type names /<br>названия типа
     */
    static getBySymbol(name: string): string | undefined;
    /**
     * Returns a regular expression for searching symbols in names.<br>
     * Возвращает регулярное выражение для поиска символов в названиях.
     */
    static getExpSymbols(): RegExp;
    /**
     * Converting symbol keys to strings.<br>
     * Преобразование ключей-символов в строки.
     */
    private static symbolsToString;
}
