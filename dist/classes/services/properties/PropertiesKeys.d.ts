import { type PropertyItem } from '../../../types/property.ts';
/**
 * Key with all special keys for token processing.<br>
 * Ключ со всеми специальными ключами для обработки токенов.
 */
export declare class PropertiesKeys {
    /**
     * Checks if the variable is a special value.<br>
     * Проверяет, является ли переменная специальным значением.
     * @param key key name /<br>название ключа
     */
    static isSpecialKey(key: string | number): key is keyof PropertyItem;
    /**
     * Checks whether the name is complete.<br>
     * Проверяет, является ли название полным.
     * @param name key name /<br>название ключа
     */
    static isFull(name: string): boolean;
    /**
     * Checks if the property is suitable for splitting.<br>
     * Проверяет, подходит ли свойство для разделения.
     * @param name property names /<br>названия свойств
     * @private
     */
    static isSeparator(name: string): boolean;
    /**
     * Returns the property name, discarding its prefix.<br>
     * Возвращает имя свойства, отбрасывая его префикс.
     * @param name key name /<br>название ключа
     * @param camelCase to convert case /<br>преобразуйте этот текст в верхний регистр
     */
    static getName(name: string, camelCase?: boolean): string;
    /**
     * Transformed key name by its type.<br>
     * Преобразованное название ключа по его типу.
     * @param key property name /<br>название свойства
     * @param type property type /<br>тип свойства
     */
    static reKey(key: string, type?: PropertyItem['_type']): string;
}
