import { PropertiesItems } from '../PropertiesItems.ts';
import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export declare class PropertiesToMedia extends PropertiesToAbstract {
    protected items: PropertiesItems;
    protected readonly FILE_CACHE = "040-media";
    private readonly media;
    /**
     * Constructor
     * @param items data for processing /<br>данные для обработки
     */
    constructor(items: PropertiesItems);
    protected init(): void;
    /**
     * @param design design name /<br>название дизайна
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     */
    private getName;
    /**
     * Updates data if the alias is entered.<br>
     * Изменяет данные, если введен алиас.
     * @param design design name /<br>название дизайна
     * @param values a list of values for media /<br>список значений для медиа
     */
    private toValueForMedia;
}
