import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
import { type PropertiesItemsItem, type PropertiesItemsParent } from '../PropertiesItems.ts';
import { type PropertyItem } from '../../../../types/property.ts';
/**
 * Class for managing the translation of a property from one branch to another.<br>
 * Класс для управления переводом свойства из одной ветки в другую.
 */
export declare class PropertiesToDrag extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "007-03-drag";
    protected init(): void;
    /**
     * Getting a list with basic settings.<br>
     * Получение списка с базовыми настройками.
     * @param property property value /<br>значение свойства
     */
    protected getDragSetting(property: PropertiesItemsItem): Record<string, PropertyItem> | undefined;
    /**
     * Beginning of data processing.<br>
     * Начало обработки данных.
     * @param properties values for verification /<br>значения для проверки
     */
    protected read(properties?: PropertiesItemsItem): void;
    /**
     * We get an object to transfer data.<br>
     * Получаем объект для переноса данных.
     * @param parents list of ancestors /<br>список предков
     * @param item starting element /<br>начальный элемент
     * @param setting settings for new elements /<br>настройки для новых элементов
     */
    protected drag(parents: PropertiesItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined;
    /**
     * Move elements to a new place.<br>
     * Перенести элементы на новое место.
     * @param item starting element /<br>начальный элемент
     * @param itemDrag place of transfer /<br>место переноса
     */
    protected toGo(item: PropertyItem, itemDrag: PropertyItem): boolean;
}
