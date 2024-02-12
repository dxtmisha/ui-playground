import { type PropertiesItemsItem } from '../../properties/PropertiesItems.ts';
import { type PropertyItem } from '../../../../types/property.ts';
/**
 * Base class for conversion.<br>
 * Базовый класс для преобразования.
 */
export declare abstract class StylesToAbstract {
    protected property: PropertiesItemsItem;
    protected space: string;
    protected content: () => string[];
    protected first: boolean;
    protected item: PropertyItem;
    /**
     * Constructor
     * @param property current branch /<br>текущая ветка
     * @param space space /<br>пробел
     * @param content callable function for sub property /<br>вызываемая функция для под свойства
     * @param first the first element in the list /<br>первый элемент в списке
     */
    constructor(property: PropertiesItemsItem, space: string, content?: () => string[], first?: boolean);
    /**
     * Getting processed data.<br>
     * Получение обработанных данных.
     */
    make(): string[];
    /**
     * Getting the name of a property.<br>
     * Получение названия свойства.
     */
    protected getName(): string;
    /**
     * Gets the value of a property.<br>
     * Получает значение свойства.
     */
    protected getValue(): string | undefined;
    /**
     * Method for converting data into a style structure.<br>
     * Метод преобразования данных в структуру стиля.
     */
    protected abstract treatment(): string[];
    /**
     * Adding a space in each line.<br>
     * Добавление пробела в каждую строку.
     * @param data data for processing /<br>данные для обработки
     */
    protected addSpace(data: string[]): string[];
    /**
     * Adds an empty line if the element is not the first in the tree.<br>
     * Добавляет пустую строку, если элемент не является первым в дереве.
     */
    protected addEmptyString(): string[];
}
