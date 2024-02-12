import { InputValue } from './InputValue.ts';
import { type InputBasicProps } from './props.ts';
/**
 * Class for working with input arrows.<br>
 * Класс для работы со стрелками ввода.
 */
export declare class InputArrow {
    protected readonly props: InputBasicProps;
    protected readonly value: InputValue;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param value object for working with values /<br>объект для работы со значениями
     */
    constructor(props: InputBasicProps, value: InputValue);
    /**
     * Checks if it is possible to decrease the value.<br>
     * Проверяет, можно ли уменьшить значение.
     * @param value values for checking /<br>значения для проверки
     */
    isPrevious(value?: number): boolean;
    /**
     * Checks if it is possible to increase the value.<br>
     * Проверяет, можно ли увеличить значение.
     * @param value values for checking /<br>значения для проверки
     */
    isNext(value?: number): boolean;
    /**
     * Returns the change step.<br>
     * Возвращает шаг изменения.
     */
    getStep(): number;
    /**
     * Returns the minimum value.<br>
     * Возвращает минимальное значение.
     */
    getMin(): number | undefined;
    /**
     * Returns the maximum value.<br>
     * Возвращает максимальное значение.
     */
    getMax(): number | undefined;
    /**
     * Decreases the value.<br>
     * Уменьшает значение.
     */
    previous(): this;
    /**
     * Increases the value.<br>
     * Увеличивает значение.
     */
    next(): this;
    /**
     * Decreases to the minimum value.<br>
     * Уменьшает до минимального значения.
     */
    toMin(): this;
    /**
     * Increases to the maximum value.<br>
     * Увеличивает до максимального значения.
     */
    toMax(): this;
}
