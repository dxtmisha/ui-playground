import { MutationStatus } from '../../types/mutation.ts';
/**
 * Class for working with the search of elements for processing.<br>
 * Класс для работы с поиском элементов для обработки.
 */
export declare class MutationCollect {
    /**
     * Returns the names of keys indicating the design name.<br>
     * Возвращает названия ключей, обозначающих название дизайна.
     */
    static getKeyUi(): string;
    /**
     * Returns the names of keys indicating that the element is being processed.<br>
     * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
     */
    static getKeyInit(): string;
    /**
     * Returns the names of keys indicating that the element has already been processed.<br>
     * Возвращает названия ключей, обозначающих, что элемент уже обработан.
     */
    static getKeyEnd(): string;
    /**
     * Returns the names of attributes indicating the design name.<br>
     * Возвращает названия атрибутов, обозначающих название дизайна.
     */
    static getAttributeUi(): string;
    /**
     * Returns the names of attributes indicating that the element is being processed.<br>
     * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
     */
    static getClassInit(): string;
    /**
     * Returns the names of attributes indicating that the element is being processed.<br>
     * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
     */
    static getClassEnd(): string;
    /**
     * Initial stage, start of searching for all unprocessed elements.<br>
     * Начальный этап, начало поиска всех необработанных элементов.
     * @param initial initial element for search /<br>начальный элемент для поиска
     * @param status status name /<br>название статуса
     */
    static find(initial?: Node | HTMLElement, status?: MutationStatus): HTMLElement[];
    /**
     * Checks if the parent element is in processing.<br>
     * Проверяет, находится ли родительский элемент в обработке.
     * @param element tracking element /<br>элемент слежения
     */
    static closestInit(element: HTMLElement): boolean;
    /**
     * Returns the select for a new element.<br>
     * Возвращает селект для нового элемента.
     */
    protected static getSelectorNew(): string;
    /**
     * Returns the select for an element in processing.<br>
     * Возвращает селект для элемента в обработке.
     */
    protected static getSelectorInit(): string;
    /**
     * Returns the select for an element that has already been processed.<br>
     * Возвращает селект для элемента, который уже обработан.
     */
    protected static getSelectorEnd(): string;
    /**
     * Returns the select for searching elements by their status.<br>
     * Возвращает селект для поиска элементов по их статусу.
     * @param status status name /<br>название статуса
     */
    protected static getSelectorByStatus(status: MutationStatus): string;
}
