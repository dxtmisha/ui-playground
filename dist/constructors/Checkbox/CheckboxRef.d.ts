import { type Ref } from 'vue';
import { Checkbox } from './Checkbox';
import { type InputValidationItem } from '../Input/typesBasic';
import { type InputEmits } from '../Input/types';
import { type CheckboxProps } from './props';
/**
 * Class for working with checkbox (Ref).<br>
 * Класс для работы с checkbox (Ref).
 */
export declare class CheckboxRef {
    protected checkbox: Checkbox;
    readonly value: import("vue").ShallowRef<boolean>;
    readonly iconBind: import("vue").ShallowRef<{}>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(props: CheckboxProps, element: Ref<HTMLElement | Record<string, any> | undefined>, callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void);
    readonly onInput: (event: Event) => void;
    /**
     * Data update.<br>
     * Обновление данных.
     */
    protected update(): this;
}
