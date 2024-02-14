import { type PropertyItemPartial } from '../../../types/property';
/**
 * Class for working with the values.
 * Класс для работы со значениями.
 */
export declare class PropertiesValues {
    /**
     * Checks if the values are complete.<br>
     * Проверяет, является ли значение полным.
     * @param value property value /<br>значение свойства
     */
    static isFull(value: PropertyItemPartial['value']): value is string;
    /**
     * Checks if the value is a color value.<br>
     * Проверяет, является ли значение цветом.
     * @param value property value /<br>значение свойства
     */
    static isColor(value: PropertyItemPartial['__c']): boolean;
    /**
     * Checks if the value is a color with transparency.<br>
     * Проверяет, является ли значение цветом с прозрачности.
     * @param value property value /<br>значение свойства
     */
    static isColorWithOpacity(value: PropertyItemPartial['__c']): boolean;
    /**
     * Removes unnecessary values from the values.<br>
     * Убирает лишние значения из значений.
     * @param value property value /<br>значение свойства
     */
    static reValue(value: PropertyItemPartial['value']): PropertyItemPartial['value'];
    /**
     * Returns a regular expression for validating the format of a value.<br>
     * Возвращает регулярное выражение для проверки полного формата значения.
     */
    static getExpFull(): RegExp;
}
