/**
 * Class for getting the scroll width.<br>
 * Класс для получения ширины скролла.
 */
export declare class ScrollbarWidth {
    private static storage;
    private static calculate;
    /**
     * Checks whether to enable scroll hiding.<br>
     * Проверяет, надо ли включить скрытие скролла.
     */
    static is(): Promise<boolean>;
    /**
     * Returns the width of the scroll.<br>
     * Возвращает ширину скролла.
     */
    static get(): Promise<number>;
    /**
     * Creates elements to check the width of the scroll.<br>
     * Создает элементы для проверки ширины скролла.
     */
    private static createElement;
    /**
     * Initialization of data to check the width of the scroll.<br>
     * Инициализация данных для проверки ширины скролла.
     */
    private static init;
}
