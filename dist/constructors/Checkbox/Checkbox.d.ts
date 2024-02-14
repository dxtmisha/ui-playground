import { CheckboxElement } from './CheckboxElement';
import { InputChange } from '../Input/InputChange';
import { InputValue } from '../Input/InputValue';
import { CheckboxIcon } from './CheckboxIcon';
import { InputCode } from '../Input/InputCode';
import { InputValidation } from '../Input/InputValidation';
import { InputEventItem } from '../Input/InputEventItem';
import { type ConstrValue } from '../../types/constructor';
import { type InputValidationItem } from '../Input/typesBasic';
import { type CheckboxEmits } from './types';
import { type CheckboxProps } from './props';
/**
 * Class for working with checkbox.<br>
 * Класс для работы с checkbox.
 */
export declare class Checkbox {
    readonly element: CheckboxElement;
    readonly change: InputChange;
    readonly value: InputValue<boolean>;
    readonly icon: CheckboxIcon;
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
    constructor(props: CheckboxProps, element: ConstrValue<HTMLElement | Record<string, any> | undefined>, callback: () => void, callbackEmit: (type: string & keyof CheckboxEmits, event: Event, value: InputValidationItem) => void);
    /**
     * Value update.<br>
     * Обновление значения.
     */
    update(): this;
}
