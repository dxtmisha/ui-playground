import { type PropertyList, type PropertyListOrData } from '../../../types/property';
/**
 * A class for transforming a property into a basic structure for work.<br>
 * Класс для преобразования свойства в базовую структуру для работы.
 */
export declare class PropertiesStandard {
    /**
     * Transforms an array into the required data structure.<br>
     * Преобразует массив в нужную структуру.
     * @param properties an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     */
    static to(properties: PropertyListOrData): PropertyList;
    /**
     * We get the values that have been updated.<br>
     * Получаем доработанные значения.
     * @param name key name /<br>название ключа
     * @param item values for conversion /<br>значения для преобразования
     */
    private static getItem;
    /**
     * Separate a special property from regular values.<br>
     * Разделить специальное свойство от обычных значений.
     * @param property an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     */
    private static getValueAndSpecial;
    /**
     * Adds the type if it exists.<br>
     * Добавляет тип, если есть.
     * @param name key name /<br>название ключа
     * @param item values for conversion /<br>значения для преобразования
     */
    private static addType;
    /**
     * Adds a label that the property name is the final version and does not require additional processing.<br>
     * Добавляет метку, что имя свойства является финальной версией и не требует дополнительной обработки.
     * @param name key name /<br>название ключа
     * @param item values for conversion /<br>значения для преобразования
     */
    private static addFull;
    /**
     * Bring the values of the rename fields to the standard form.<br>
     * Привести значения полей rename в стандартный вид.
     * @param name key name /<br>название ключа
     * @param item values for conversion /<br>значения для преобразования
     */
    /**
     * Converts values to string, if they are of type number.<br>
     * Преобразовывает значения в строку, если являются типом число.
     * @param item values for conversion /<br>значения для преобразования
     * @private
     */
    private static addValue;
    /**
     * Transform the property value into the required format.<br>
     * Преобразовать значение свойства в необходимый формат.
     * @param value values for conversion /<br>значения для преобразования
     */
    private static toItem;
}
