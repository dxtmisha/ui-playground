import { type InputCheckItem } from './useInputCheck';
import { InputElement } from './InputElement';
import { InputValue } from './InputValue';
import { InputMatch } from './InputMatch';
import { InputCode } from './InputCode';
import { type InputValidationItem } from './typesBasic';
import { type InputBasicProps } from './props';
/**
 * Class for working with validity.<br>
 * Класс для работы с валидностью.
 */
export declare class InputValidation<V = any> {
    protected readonly props: InputBasicProps<V>;
    protected readonly element: InputElement;
    protected readonly value: InputValue;
    protected readonly code: InputCode;
    protected readonly match?: InputMatch | undefined;
    protected item: InputCheckItem<V>;
    protected validation?: InputValidationItem<V>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element object for working with the input element /<br>объект для работы с элементом ввода
     * @param value object for working with values /<br>объект для работы со значениями
     * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
     * @param code object for working with error codes /<br>объект для работы с кодами ошибок
     */
    constructor(props: InputBasicProps<V>, element: InputElement, value: InputValue, code: InputCode, match?: InputMatch | undefined);
    /**
     * Checks if there is an error.<br>
     * Проверяет, есть ли ошибка.
     */
    isError(): boolean;
    /**
     * Returns error data.<br>
     * Возвращает данные об ошибке.
     */
    get(): InputValidationItem<V>;
    /**
     * Returns error string.<br>
     * Возвращает строку об ошибке.
     */
    getMessage(): string;
    /**
     * Changes the validity data.<br>
     * Изменяет данные о валидности.
     * @param validation values for validity /<br>значения для валидности
     */
    set(validation: Record<string, any> | InputValidationItem<V>): this;
    /**
     * Updating data for input.<br>
     * Обновление данных для input.
     */
    update(): this;
    /**
     * Check for global data.<br>
     * Проверка для глобальных данных.
     */
    protected checkGlobal(): InputValidationItem<V> | undefined;
    /**
     * Check for selected data.<br>
     * Проверка для выбранных данных.
     */
    protected checkItem(): InputValidationItem<V> | undefined;
}
