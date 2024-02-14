import { PropertiesPath } from './PropertiesPath';
import { type PropertyList } from '../../../types/property';
/**
 * Class for searching all components.<br>
 * Класс для поиск всех компоненты.
 */
export declare class PropertiesSettings {
    private readonly path;
    /**
     * Constructor
     * @param path object of the class for working with paths /<br>объект класса для работы с путями
     */
    constructor(path: PropertiesPath);
    /**
     * Returns the basic settings of the component.<br>
     * Возвращает базовые настройки у компонента.
     */
    get(): PropertyList;
}
