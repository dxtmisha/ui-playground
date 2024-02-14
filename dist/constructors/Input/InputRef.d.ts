import { Ref } from 'vue';
import { Input } from './Input';
import type { InputValidationItem } from './typesBasic';
import type { InputEmits } from './types';
import type { InputBasicProps } from './props';
/**
 * Class for working with reactive input data.<br>
 * Класс для работы с реактивными данными ввода.
 */
export declare class InputRef<V = string> {
    protected readonly input: Input<V>;
    readonly value: Ref<V | undefined>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
     */
    constructor(props: InputBasicProps<V>, element: Ref<HTMLElement | Record<string, any> | undefined>, callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void);
    /**
     * Triggering the event for changes in the checkbox.<br>
     * Вызов события для изменения в checkbox.
     * @param event event object /<br>объект события
     */
    onChecked(event: Event): void;
    /**
     * Data update.<br>
     * Обновление данных.
     */
    protected update(): this;
}
