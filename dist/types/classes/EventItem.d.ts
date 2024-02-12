import { type ElementOrString, type ElementOrWindow, type EventActivityItem, type EventListenerDetail, type EventOptions } from '../types/element.ts';
/**
 * Class for working with events.<br>
 * Класс для работа с события.
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    protected listener?: EventListenerDetail<O, D> | undefined;
    protected options?: EventOptions;
    protected detail?: D | undefined;
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    protected element?: E;
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    protected elementControl?: ElementOrWindow;
    protected elementControlEdit?: boolean;
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    protected type: string[];
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    protected activity: boolean;
    protected activityItems: EventActivityItem<E>[];
    /**
     * Classes Constructor
     * @param elementSelector element /<br>элемент
     * @param type type /<br>тип
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs /<br>объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param options object that specifies characteristics /<br>объект options
     * @param detail an event-dependent value associated with the event /<br>зависимое от события
     * значение, связанное с событием
     */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /**
     * Checks whether event listening is currently enabled.<br>
     * Проверяет, включено ли сейчас прослушивание события.
     */
    isActive(): boolean;
    /**
     * Change of an element for tracking.<br>
     * Изменение элемента для прослеживания.
     * @param elementSelector element /<br>элемент
     */
    setElement(elementSelector?: ElementOrString<E>): this;
    /**
     * Modifies the object that receives the notification.<br>
     * Модифицирует объект, который получает уведомление.
     * @param elementSelector element /<br>элемент
     */
    setElementControl(elementSelector?: ElementOrString<E>): this;
    /**
     * Changes the type of the handled event.<br>
     * Изменяет тип обрабатываемого события.
     * @param type type /<br>тип
     */
    setType(type: string | string[]): this;
    /**
     * Modifies the object that receives the notification.<br>
     * Модифицирует объект, который получает уведомление.
     * @param listener
     */
    setListener(listener: EventListenerDetail<O, D>): this;
    /**
     * Modifying the options object that defines the characteristics of an object.<br>
     * Изменение объекта options, который определяет характеристики объекта.
     * @param options
     */
    setOptions(options?: EventOptions): this;
    /**
     * Modifying a dependent value for the dispatch method.<br>
     * Изменение зависимого значения для метода dispatch.
     * @param detail
     */
    setDetail(detail?: D): this;
    /**
     * The method of the EventTarget sends an Event to the object, (synchronously) invoking
     * the affected EventListeners in the appropriate order.<br>
     * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
     * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
     * @param detail an event-dependent value associated with the event /<br>зависимое от события
     * значение, связанное с событием
     */
    dispatch(detail?: D | undefined): this;
    /**
     * Starting event listening.<br>
     * Запуск прослушивания события.
     */
    start(): this;
    /**
     * Stopping event listening.<br>
     * Остановка прослушивания события.
     */
    stop(): this;
    /**
     * Toggling event handler state.<br>
     * Переключение состояния работы события.
     * @param activity event activation /<br>активация события
     */
    toggle(activity: boolean): this;
    /**
     * Overloads the listening events.<br>
     * Перегружает события прослушивания.
     */
    reset(): this;
    /**
     * Checks if the ResizeObserver object exists.<br>
     * Проверяет, существует ли объект ResizeObserver.
     */
    protected isObserver(): boolean;
    /**
     * The implementation of the resize event for an element.<br>
     * Реализация события изменения размера для элемента.
     * @protected
     */
    protected makeResize(): boolean;
    /**
     * Implementation of the scroll event for an element.<br>
     * Реализация события изменения положения скролла для элемента.
     * @protected
     */
    protected makeScroll(): boolean;
}
