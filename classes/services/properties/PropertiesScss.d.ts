import { PropertiesItems } from './PropertiesItems.ts';
/**
 * Class for working with SCSS.<br>
 * Класс для работы с SCSS.
 */
export declare class PropertiesScss {
    private items;
    /**
     * Constructor
     * @param items
     */
    constructor(items: PropertiesItems);
    /**
     * Returns a formatted string for SCSS.<br>
     * Возвращает отформатированную строку для SCSS.
     */
    get(): string;
    /**
     * Returns a list of connected designs.<br>
     * Возвращает список подключенных дизайнов.
     */
    protected getDesigns(): string;
    /**
     * Returns a list of properties for the root.<br>
     * Возвращает список свойств для root.
     */
    protected getRoot(): string;
    /**
     * Returns a list of device sizes.<br>
     * Возвращает список размеров устройства.
     */
    protected getMedia(): string;
    /**
     * Returns a list of all classes for generation.<br>
     * Возвращает список всех классов для генерации.
     */
    protected getClasses(): string;
    /**
     * Returns a list of colors.<br>
     * Возвращает список цветов.
     */
    protected getPalette(): string;
    /**
     * Returns a list of color saturation codes.<br>
     * Возвращает список кодов насыщенности цветов.
     */
    protected getShade(): string;
    /**
     * Returns a list of properties.<br>
     * Возвращает список свойств.
     */
    getProperties(): string;
    /**
     * Returns a list of all records with the selected type.<br>
     * Возвращает список всех записей с выбранным типом.
     * @param category category names /<br>названия категорий
     */
    private getByCategory;
    /**
     * Returns the property value.<br>
     * Возвращает значение свойства.
     * @param property property value /<br>значение свойства
     * @param space пробелы
     */
    private getValue;
    /**
     * Returns the value of a property.<br>
     * Возвращает значение свойства.
     * @param item property value /<br>значение свойства
     */
    private getValueItem;
    /**
     * Method for iterating over all properties and converting them to a SCSS structure.<br>
     * Метод для обхода всех свойств и преобразования их в структуру SCSS.
     * @param properties list of properties /<br>свойств
     * @param space пробелы
     */
    private to;
}
