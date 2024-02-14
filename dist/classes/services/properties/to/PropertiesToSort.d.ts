import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * Class for sorting properties.<br>
 * Класс для сортировки свойств.
 */
export declare class PropertiesToSort extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "048-sort";
    protected init(): void;
    /**
     * Sorts all records.<br>
     * Сортирует все записи.
     * @param properties an array that needs to be transformed /<br>
     * массив, который нужно преобразовать
     */
    private read;
    /**
     * Getting the category name of an element.<br>
     * Получение названия категории у элемента.
     * @param item current element /<br>текущий элемент
     */
    private getCategoryName;
    /**
     * Getting data about sorting by object.<br>
     * Получение данных о сортировке по объекту.
     * @param item current element /<br>текущий элемент
     */
    private getKeys;
    /**
     * Merging records into a list.<br>
     * Соединения записи в список.
     * @param data given for connection /<br>данный для соединения
     */
    private join;
}
