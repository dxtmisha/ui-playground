import { InputVisibility } from './InputVisibility.ts';
import { InputType } from './InputType.ts';
import { InputPattern } from './InputPattern.ts';
import { InputElement } from './InputElement.ts';
import { InputChange } from './InputChange.ts';
import { InputValue } from './InputValue.ts';
import { InputArrow } from './InputArrow.ts';
import { InputMatch } from './InputMatch.ts';
import { InputCode } from './InputCode.ts';
import { InputValidation } from './InputValidation.ts';
import { InputEventItem } from './InputEventItem.ts';
import { type ConstrValue } from '../../types/constructor.ts';
import { type InputValidationItem } from './typesBasic.ts';
import { type InputEmits } from './types.ts';
import { type InputBasicProps } from './props.ts';
/**
 * Base class for working with an input element.<br>
 * Базовый класс для работы с элементом ввода.
 */
export declare class Input<V = string> {
    readonly visibility: InputVisibility;
    readonly type: InputType;
    readonly pattern: InputPattern;
    readonly element: InputElement;
    readonly change: InputChange;
    readonly value: InputValue<V>;
    readonly arrow: InputArrow;
    readonly match: InputMatch;
    readonly code: InputCode;
    readonly validation: InputValidation;
    readonly event: InputEventItem;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     * @param callback callback function /<br>функция обратного вызова
     * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(props: InputBasicProps<V>, element: ConstrValue<HTMLElement | Record<string, any> | undefined>, callback: () => void, callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void);
    /**
     * Returns the current value.<br>
     * Возвращает текущее значение.
     */
    getValue(): V | undefined;
    /**
     * Returns an object for working with values.<br>
     * Возвращает объект для работы со значениями.
     */
    getValueItem(): InputValue;
    /**
     * Returns an object for working with events.<br>
     * Возвращает объект для работы с событиями.
     */
    getEventItem(): InputEventItem;
    /**
     * Value update.<br>
     * Обновление значения.
     */
    update(): this;
}
