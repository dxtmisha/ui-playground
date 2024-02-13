import { type PropertyList } from '../../../types/property.ts';
/**
 * Class for working with property splitting into multiple sub-properties.<br>
 * Класс для работы с разделением свойства на множество под-свойств.
 */
export declare class PropertiesSeparator {
    /**
     * Checks if the structure has grouped records.<br>
     * Проверяет, есть ли у структуры сгруппированные записи.
     * @param properties an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     * @param limit the maximum permissible level of verification /<br>
     * максимальный допустимый уровень проверки
     */
    static is(properties: PropertyList, limit?: number): boolean;
    /**
     * Transforming a property with long names with separators into a set of sub-properties.<br>
     * Преобразование свойства с длинными названиями с разделителями на множество под-свойств.
     * @param properties an array that needs to be transformed /<br>массив, который нужно преобразовать
     */
    static to(properties: PropertyList): PropertyList;
    /**
     * Removing unnecessary characters from the name.<br>
     * Удаление лишних символов из названия.
     * @param name property names /<br>названия свойств
     */
    private static removeBasicName;
    /**
     * Packs a property into objects by an array of titles.<br>
     * Упаковывает свойство в объекты по массиву названий.
     * @param item property values /<br>значения свойств
     * @param list array of titles /<br>массив названий
     */
    private static wrap;
}
