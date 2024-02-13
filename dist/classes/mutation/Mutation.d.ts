import { MutationData } from './MutationData.ts';
/**
 * A class for global monitoring of changes and searching for new elements to transform into components.<br>
 * Класс для глобального слежения за изменениями и поиска новых элементов для преобразования в компоненты.
 */
export declare class Mutation {
    protected readonly callback: () => void;
    private mutationGlobal;
    private mutationItems;
    readonly items: MutationData;
    /**
     * Constructor
     */
    constructor(callback: () => void);
    /**
     * Start observing the changes.<br>
     * Старт наблюдения за изменениями.
     */
    start(): this;
    /**
     * Termination of observation of changes.<br>
     * Прекращения наблюдения за изменения.
     */
    stop(): this;
    /**
     * Adding an element and its child elements.<br>
     * Добавление элемента и его дочерних элементы.
     * @param element element for deletion /<br>элемент для удаления
     */
    protected add(element: HTMLElement): void;
    /**
     * Adding child elements.<br>
     * Добавления дочерних элементы.
     * @param initial initial element for search /<br>начальный элемент для поиска
     */
    protected addList(initial?: HTMLElement): void;
    /**
     * Removing an element and its child elements from the list.<br>
     * Удаление элемента и его дочерних элементов из списка.
     * @param element element for deletion /<br>элемент для удаления
     */
    protected remove(element: HTMLElement): void;
    /**
     * Removing child elements.<br>
     * Удаление дочерних элементов.
     * @param initial initial element for search /<br>начальный элемент для поиска
     */
    protected removeList(initial?: HTMLElement): void;
}
