import { PropertiesItems } from '../PropertiesItems';
import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * Class for working with colors.<br>
 * Класс для работы с цветами.
 */
export declare class PropertiesToPalette extends PropertiesToAbstract {
    protected items: PropertiesItems;
    protected readonly FILE_CACHE = "002-palette";
    private palette;
    /**
     * Constructor
     * @param items data for processing /<br>данные для обработки
     */
    constructor(items: PropertiesItems);
    /**
     * Adding a class for working with colors.<br>
     * Добавление класса для работы со цветами.
     */
    protected init(): void;
    /**
     * Adding a group of properties based on the design name.<br>
     * Добавление группы свойств по названию дизайна.
     * @param category category names /<br>названия категорий
     * @param parent the property object, by which it will be added /<br>объект свойства, по которому будет добавлять
     */
    private getParent;
    /**
     * Adding a new class with the name of the color.<br>
     * Добавление нового класса по имени цвета.
     * @param items list of classes /<br>список классов
     * @param name class name /<br>название класса
     */
    private getClass;
    /**
     * Returns names for light.<br>
     * Возвращает названия для света.
     * @param theme the name of the theme /<br>название темы
     * @param name names of colors /<br>названия цвета
     */
    private getName;
    /**
     * Returns values for color.<br>
     * Возвращает значения для цвета.
     * @param link base link /<br>базовая ссылка
     * @param name names of colors /<br>названия цвета
     */
    private getValue;
    /**
     * Checking the default value.<br>
     * Проверка значения по умолчанию.
     * @param item the value to be checked /<br>проверяемое значение
     * @param theme the name of the theme /<br>название темы
     */
    private getValueDefault;
    /**
     * Adding a color property by the name of the theme.<br>
     * Добавление свойства цвета по названию темы.
     * @param root the property object, by which it will be added /<br>
     * объект свойства, по которому будет добавлять
     * @param theme the name of the theme /<br>название темы
     * @param designParent design name /<br>название дизайна
     */
    private read;
    /**
     * Adding a saturation property.<br>
     * Добавление свойства насыщенности.
     * @param parent list of available values for the class /<br>список доступных значений у класса
     * @param link list of classes /<br>список классов
     * @param theme the name of the theme /<br>название темы
     * @param palette the list of saturation /<br>список насыщенности
     * @private
     */
    private addItem;
    /**
     * Adding a default value.<br>
     * Добавление значения по умолчанию.
     * @param parent list of available values for the class /<br>список доступных значений у класса
     * @param theme the name of the theme /<br>название темы
     * @param palette list of classes /<br>список классов
     * @private
     */
    private addDefault;
}
