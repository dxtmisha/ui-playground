import { PropertiesItems } from '../properties/PropertiesItems.ts';
/**
 * Base class for generating basic properties.<br>
 * Базовый класс для генерации базовых свойств.
 */
export declare class Styles {
    private readonly properties;
    /**
     * Constructor
     */
    constructor();
    /**
     * Generating all basic data.<br>
     * Генерация всех базовых данных.
     */
    make(): this;
    /**
     * Generating basic variables.<br>
     * Генерация базовых переменных.
     * @param design design name /<br>название дизайна
     * @param items current element /<br>текущий элемент
     */
    protected initRoot(design: string, items: PropertiesItems): this;
    /**
     * Generating all base classes.<br>
     * Генерация всех базовых классов.
     * @param design design name /<br>название дизайна
     * @param items current element /<br>текущий элемент
     */
    protected initClasses(design: string, items: PropertiesItems): this;
    protected initProperties(design: string, items: PropertiesItems): this;
    /**
     * Generating a list of properties from a design.<br>
     * Получение списка свойств по дизайну.
     * @param callback data processing function /<br>функция для обработки данных
     */
    private getByDesigns;
}
