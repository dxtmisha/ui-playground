import { InputChange } from './InputChange';
import { InputValue } from './InputValue';
import { InputValidation } from './InputValidation';
import type { InputValidationItem } from './typesBasic';
import type { InputEmits } from './types';
import type { InputBasicProps } from './props';
/**
 * Class for working with events.<br>
 * Класс для работы с событиями.
 */
export declare class InputEventItem {
    protected readonly props: InputBasicProps;
    protected readonly change: InputChange;
    protected readonly value: InputValue;
    protected readonly validation: InputValidation;
    protected readonly callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
     * @param value object for working with values /<br>объект для работы со значениями
     * @param validation object for working with validity /<br>объект для работы с валидностью
     * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(props: InputBasicProps, change: InputChange, value: InputValue, validation: InputValidation, callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void);
    /**
     * Call of data change event.<br>
     * Вызов события изменения данных.
     * @param event event object /<br>объект события
     */
    onInput(event: InputEvent): void;
    /**
     * Triggering the change event after losing focus.<br>
     * Вызов события изменения после потери фокуса.
     * @param event event object /<br>объект события
     */
    onChange(event?: InputEvent | Event): void;
    /**
     * Triggering the event for select change.<br>
     * Вызов события для изменения селект.
     * @param event event object /<br>объект события
     */
    onSelect(event: Event): void;
    /**
     * Triggering the event for changes in the checkbox.<br>
     * Вызов события для изменения в checkbox.
     * @param event event object /<br>объект события
     */
    onChecked(event: Event): void;
    /**
     * Triggering the event for changes in the radio.<br>
     * Вызов события для изменения в radio.
     * @param event event object /<br>объект события
     */
    onRadio(event: Event): void;
    /**
     * Triggering the event to delete all values.<br>
     * Вызов события для удаления всех значений.
     * @param event event object /<br>объект события
     */
    onClear(event: MouseEvent): void;
    /**
     * Triggering the event.<br>
     * Вызов события.
     * @param event event object /<br>объект события
     * @param type event type /<br>тип события
     */
    on<E>(event?: E, type?: string & keyof InputEmits): this;
    /**
     * Checks whether additional data needs to be generated for the current event.<br>
     * Проверяет, надо ли генерировать дополнительные данные для текущего события.
     * @param type event type /<br>тип события
     */
    protected isValue(type: string & keyof InputEmits): boolean;
    /**
     * Returns input data.<br>
     * Возвращает данные об вводе.
     */
    protected getData(): InputValidationItem;
    /**
     * Returns validity data.<br>
     * Возвращает данные валидности.
     * @param type event type /<br>тип события
     */
    protected getValidation(type: string & keyof InputEmits): InputValidationItem;
}
