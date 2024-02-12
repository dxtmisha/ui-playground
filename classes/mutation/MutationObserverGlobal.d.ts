/**
 * Class for working with the tracking object.<br>
 * Класс для работы с объектом слежения.
 */
export declare class MutationObserverGlobal {
    private readonly addCallback;
    private readonly removeCallback;
    private mutation?;
    /**
     * Constructor
     * @param addCallback function for adding an element /<br>функция для добавления элемента
     * @param removeCallback function for removing an element /<br>функция для удаления элемента
     */
    constructor(addCallback: (node: HTMLElement) => void, removeCallback: (node: HTMLElement) => void);
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
