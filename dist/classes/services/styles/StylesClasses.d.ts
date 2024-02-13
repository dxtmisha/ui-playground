import { PropertiesItems } from '../properties/PropertiesItems';
export type StylesClassesItem = {
    data: string[];
    classes: Record<string, string[]>;
};
/**
 * A class for generating base classes.<br>
 * Класс для генерации базовых классов.
 */
export declare class StylesClasses {
    private items;
    /**
     * Constructor
     * @param items
     */
    constructor(items: PropertiesItems);
    /**
     * Generating all base classes.<br>
     * Генерация всех базовых классов.
     */
    init(): StylesClassesItem;
    /**
     * Getting all properties from base variables.<br>
     * Получение всех свойств из базовых переменных.
     */
    private getList;
}
