import { PropertiesItems } from './PropertiesItems.ts';
import { type PropertyList } from '../../../types/property.ts';
/**
 * The main class for working with tokens.<br>
 * Главный класс для работы с токенами.
 */
export declare class Properties {
    private readonly designs;
    private readonly items;
    /**
     * Constructor
     */
    constructor();
    get(): PropertiesItems;
    /**
     * Getting structured data for use in an SCSS file.<br>
     * Получение структурированных данных для работы в SCSS файле.
     */
    getScss(): string;
    /**
     * Processing of basic data.<br>
     * Обработка базовых данных.
     */
    protected read(): PropertyList;
    /**
     * Returns the name of the cache file. It contains all processed properties.<br>
     * Возвращает название файла для кэша.
     * Это полный массив со всеми обработанными свойствами.
     */
    private getPathName;
    /**
     * Reads the content from the file and merges all records into a single object.<br>
     * Читает содержимое из файла и объединяет все записи в один объект.
     */
    private readFiles;
    /**
     * Basic transformations.<br>
     * Базовые преобразования.
     * @param properties a class that contains all data /<br>класс со всеми данными
     * @private
     */
    private toBasic;
}
