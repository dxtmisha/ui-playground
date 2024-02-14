import { MutationData } from './MutationData';
/**
 * Class for working with the tracking object of the most active elements.<br>
 * Класс для работы с объектом слежения самых активных элементов.
 */
export declare class MutationObserverItems {
    private readonly items;
    private readonly update;
    private mutation?;
    /**
     * Constructor
     * @param items object for working with elements /<br>объект для работы с элементами
     * @param update function for updating data /<br>функция обновления данных
     */
    constructor(items: MutationData, update: (element: HTMLElement) => void);
    /**
     * Start observing the changes.<br>
     * Старт наблюдения за изменениями.
     */
    start(): this;
    /**
     * Stop observing the DOM changes.<br>
     * Остановка наблюдения за изменениями DOM.
     */
    end(): this;
    /**
     * A method for tracking changes.<br>
     * Метод для слежения за изменениями.
     * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
     */
    private callback;
}
