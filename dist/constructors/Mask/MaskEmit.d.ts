import { MaskValidation } from './MaskValidation';
import { type MaskEventData } from './typesBasic';
import { type MaskEmits } from './types';
/**
 * Class for event invocation.<br>
 * Класс для вызова события.
 */
export declare class MaskEmit {
    protected readonly validation: MaskValidation;
    protected readonly callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void;
    protected type?: string & keyof MaskEmits;
    protected event?: Event;
    /**
     * Constructor
     * @param validation
     * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(validation: MaskValidation, callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void);
    /**
     * Checks whether additional data needs to be generated for the current event.<br>
     * Проверяет, надо ли генерировать дополнительные данные для текущего события.
     */
    isValue(): boolean;
    /**
     * Initializes event handling.<br>
     * Инициализирует обработку событий.
     */
    go(): this;
    /**
     * Changes the event type and event data.<br>
     * Изменяет тип события и данные события.
     * @param type event name /<br>название события
     * @param event event object /<br>объект события
     */
    set<E extends Event>(type: string & keyof MaskEmits, event: E): this;
    /**
     * Changes the event type.<br>
     * Изменяет тип события.
     * @param type event name /<br>название события
     */
    setType(type: string & keyof MaskEmits): this;
    /**
     * Changes the event object.<br>
     * Изменяет объект события.
     * @param event event object /<br>объект события
     */
    setEvent<E extends Event>(event: E): this;
    /**
     * Resets the state.<br>
     * Сбрасывает состояние.
     */
    reset(): this;
    /**
     * Resets the type state.<br>
     * Сбрасывает состояние тип.
     */
    resetType(): this;
    /**
     * Resets the event state.<br>
     * Сбрасывает состояние события.
     */
    resetEvent(): this;
}
