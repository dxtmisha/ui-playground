import { PropertiesPath } from './PropertiesPath.ts';
import { PropertyItem, type PropertyList } from '../../../types/property.ts';
/**
 * A class for transforming global tokens.<br>
 * Класс для преобразования глобальных токенов.
 */
export declare class PropertiesMain {
    private readonly path;
    /**
     * Constructor
     * @param path object of the class for working with paths /<br>объект класса для работы с путями
     */
    constructor(path: PropertiesPath);
    /**
     * Returns all main tokens.<br>
     * Возвращает все основные токены.
     */
    get(): PropertyList;
    /**
     * We get the main property taking into account the change of settings.<br>
     * Получаем главное свойство с учетом изменения настроек.
     * @param list list of settings /<br>список настроек
     */
    getBySettings(list: PropertyList): PropertyList;
    /**
     * We copy the settings.<br>
     * Копируем настройки.
     * @param item element with settings /<br>элемент с настройками
     * @param itemCopy element for copying settings /<br>элемент для копирования настроек
     */
    protected copySettings(item: PropertyItem, itemCopy?: PropertyItem): this;
}
