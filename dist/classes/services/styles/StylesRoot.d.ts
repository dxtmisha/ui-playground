import { PropertiesItems } from '../properties/PropertiesItems.ts';
/**
 * Class for generating base properties from tokens.<br>
 * Класс для генерации базовых свойств из токенов.
 */
export declare class StylesRoot {
    private items;
    /**
     * Constructor
     * @param items
     */
    constructor(items: PropertiesItems);
    /**
     * Generating all basic token values.<br>
     * Генерация всех базовых значений токенов.
     */
    init(): string[];
    /**
     * Getting all properties from base variables.<br>
     * Получение всех свойств из базовых переменных.
     */
    private getList;
}
