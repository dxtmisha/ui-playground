import { CheckboxElement } from './CheckboxElement.ts';
import { InputChange } from '../Input/InputChange.ts';
import { InputValue } from '../Input/InputValue.ts';
import { CheckboxIcon } from './CheckboxIcon.ts';
import { InputCode } from '../Input/InputCode.ts';
import { InputValidation } from '../Input/InputValidation.ts';
import { InputEventItem } from '../Input/InputEventItem.ts';
import { type ConstrValue } from '../../types/constructor.ts';
import { type InputValidationItem } from '../Input/typesBasic.ts';
import { type CheckboxEmits } from './types.ts';
import { type CheckboxProps } from './props.ts';
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
