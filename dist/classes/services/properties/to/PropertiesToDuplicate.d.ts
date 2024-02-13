import { PropertiesToAbstract } from './PropertiesToAbstract.ts';
import { type PropertiesItemsItem } from '../PropertiesItems.ts';
type PropertiesDuplicateListItem = {
    value: string;
    property: PropertiesItemsItem;
};
type PropertiesDuplicateList = Record<string, PropertiesDuplicateListItem>;
type PropertiesDuplicateItem = {
    value: string;
    properties: PropertiesDuplicateList;
};
type PropertiesDuplicate = PropertiesDuplicateItem[];
/**
 * Class for searching for duplicate properties and highlighting them.<br>
 * Класс для поиска дублирующих свойств и выделения их.
 */
export declare class PropertiesToDuplicate extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "910-duplicate";
    protected init(): void;
    /**
     * Returns the name of the group for the selected values.<br>
     * Возвращает имя группы для выбранных значений.
     * @param properties list of selected properties /<br>список выбранных свойств
     */
    protected getName(properties: PropertiesDuplicateItem['properties']): string;
    /**
     * Search for duplicate values.<br>
     * Поиск дублирующих значений.
     * @param list list for search /<br>список для поиска
     * @param valueDuplicate values for search /<br>значения для поиска
     * @protected
     */
    protected findDuplicate(list: PropertiesDuplicateList, valueDuplicate: string): PropertiesDuplicateList;
    /**
     * Getting the full list of tree branches.<br>
     * Получение полного списка ветки дерева.
     */
    protected initList(): PropertiesDuplicateList;
    /**
     * Search for duplicate values.<br>
     * Поиск дублирующих значений.
     * @param list list for search /<br>список для поиска
     */
    protected initDuplicate(list: PropertiesDuplicateList): PropertiesDuplicate;
}
export {};
