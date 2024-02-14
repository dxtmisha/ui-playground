import { type PropertyList } from '../../../types/property';
export type PropertiesWrapItem = {
    values: Record<string, PropertyList[]>;
    quantity: number;
};
export type PropertiesWrapList = {
    properties: Record<string, PropertiesWrapItem>;
    quantity: number;
};
export type PropertiesWrapFocus = {
    value: string;
    item: PropertyList[];
};
/**
 * A class for moving data up the level, if the property is used in all records at the same level.<br>
 * Класс для переноса данных выше по уровню, если свойство используется во всех записях на одном уровне.
 */
export declare class PropertiesWrap {
    /**
     * Drag the duplicate properties to the top level to reduce the record.<br>
     * Перетаскивает дублирующиеся свойства на верхний уровень для уменьшения записи.
     * @param properties an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     */
    static to(properties: PropertyList): void;
    /**
     * Adds a new property if it does not exist and returns an object to work with this property.<br>
     * Добавляет новое свойство, если его нет, и возвращает объект для работы с этим свойством.
     * @param data object with all the collected data /<br>объект со всеми собранными данными
     * @param name the name of the property /<br>название свойства
     */
    private static getSelector;
    /**
     * The method processes the properties and returns all the names of the property and its values.<br>
     * Метод обрабатывает свойства и возвращает все названия свойства и его значения.
     * @param properties an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     */
    private static getSelectors;
    /**
     * Returns values with maximum repetitions.<br>
     * Возвращает значения с максимальными повторами.
     * @param properties values for verification /<br>значения для проверки
     */
    private static getMaxRepeat;
    /**
     * Adds values to the current property and returns an array for adding a data source.<br>
     * Добавляет значения к текущему свойству и возвращает массив для добавления источника данных.
     * @param selector an object to work with the current property /<br>объект для работы с текущим свойством
     * @param value the value of the property /<br>значение свойства
     */
    private static getValue;
    /**
     * Adding information about the property and its values.<br>
     * Добавления информация об свойство и его значения.
     * @param data object with all the collected data /<br>объект со всеми собранными данными
     * @param properties list of properties /<br>свойств
     */
    private static addItem;
    /**
     * Deletes all records with the property that was moved up the tree.<br>
     * Удаляет все записи с свойством, которое было перенесено выше по дереву.
     * @param name the name of the property for deletion /<br>название свойства для удаления
     * @param properties an array with properties by the same values /<br>
     * массив со свойствами по одинаковым значениям
     */
    private static removeProperties;
}
