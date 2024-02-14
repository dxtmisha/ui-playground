import { type ConstrClassObject, type ConstrValue } from '../../types/constructor';
import { type ScrollbarProps } from './props';
/**
 * Class for updating the scroll position and displaying the border.<br>
 * Класс для обновления положения скролла и вывода бордера.
 */
export declare class ScrollbarBorder {
    protected readonly props: ScrollbarProps;
    protected readonly element: ConstrValue<HTMLDivElement>;
    protected readonly callback: () => void;
    private event?;
    private top;
    private bottom;
    /**
     * Constructor
     * @param props properties /<br>свойства
     * @param element input element /<br>элемент ввода
     * @param callback callback function /<br>функция обратного вызова
     */
    constructor(props: ScrollbarProps, element: ConstrValue<HTMLDivElement>, callback: () => void);
    /**
     * Returns values for the class.<br>
     * Возвращает значения для класса.
     */
    getClasses(): ConstrClassObject;
    /**
     * Start monitoring the scroll.<br>
     * Начать слежение за скроллом.
     */
    start(): this;
    /**
     * Stopping the monitoring of scroll changes.<br>
     * Остановка слежения за изменениями скролла.
     */
    stop(): this;
    /**
     * Changing the monitoring status depending on the border parameter.<br>
     * Изменение статуса слежения в зависимости от параметра border.
     */
    toggle(): this;
    /**
     * Updating the monitoring element for the event object.<br>
     * Обновление элемента слежения для объекта события.
     */
    reset(): this;
    /**
     * Changing the data for class output.<br>
     * Изменение данных для вывода класса.
     * @param top status of the top border display /<br>статус отображения верхнего бордера
     * @param bottom status of the bottom border display /<br>статус отображения нижнего бордера
     */
    protected setData(top: boolean, bottom: boolean): this;
    /**
     * Function for the event of monitoring scroll changes.<br>
     * Функция для события слежения за изменениями скролла.
     */
    protected on(): void;
}
