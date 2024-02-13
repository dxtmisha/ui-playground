import { MutationDataItem } from './MutationDataItem.ts';
/**
 * Class for storing a list of active elements.<br>
 * Класс для хранения списка активных элементов.
 */
export declare class MutationData {
    private items;
    /**
     * Checks if the element is in the list.<br>
     * Проверяет, есть ли элемент в списке.
     * @param element tracking element /<br>элемент слежения
     */
    is(element: HTMLElement): boolean;
    /**
     * Checks if the element is a component.<br>
     * Проверяет, является ли элемент компонентом.
     * @param element tracking element /<br>элемент слежения
     */
    isComponent(element: HTMLElement): boolean;
    /**
     * Retrieving a list of all data.<br>
     * Получение списка всех данных.
     */
    get(): MutationDataItem[];
    /**
     * Returns an object with information about the element.<br>
     * Возвращает объект с информацией об элементе.
     * @param element tracking element /<br>элемент слежения
     */
    getItem(element: HTMLElement): MutationDataItem | undefined;
    /**
     * Adding an element for processing.<br>
     * Добавление элемента для обработки.
     * @param element tracking element /<br>элемент слежения
     */
    add(element: HTMLElement): this;
    /**
     * Removes an element from the list.<br>
     * Удаляет элемент из списка.
     * @param element tracking element /<br>элемент слежения
     */
    remove(element: HTMLElement): this;
    /**
     * Searching for an element in the list.<br>
     * Поиск элемента в списке.
     * @param element tracking element /<br>элемент слежения
     */
    private find;
}
