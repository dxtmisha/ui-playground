import { PropertiesItems } from '../PropertiesItems';
/**
 * Abstract class for conversion.<br>
 * Абстрактный класс для преобразования.
 */
export declare abstract class PropertiesToAbstract {
    protected items: PropertiesItems;
    protected readonly abstract FILE_CACHE: string;
    /**
     * Constructor
     * @param items data for processing /<br>данные для обработки
     */
    constructor(items: PropertiesItems);
    to(): void;
    protected abstract init(): void;
    /**
     * Saves intermediate data.<br>
     * Сохраняет промежуточные данные.
     */
    protected write(): void;
}
