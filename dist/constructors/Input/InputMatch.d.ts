import { InputElement } from './InputElement';
import { InputValue } from './InputValue';
import { type InputValidationItem } from './typesBasic';
import { type InputBasicProps } from './props';
/**
 * Class for checking the similarity of input data with other elements.<br>
 * Класс для проверки сходства вводимых данных с другими элементами.
 */
export declare class InputMatch {
    protected readonly props: InputBasicProps;
    protected readonly element: InputElement;
    protected readonly value: InputValue;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element object for working with the input element /<br>объект для работы с элементом ввода
     * @param value object for working with values /<br>объект для работы со значениями
     */
    constructor(props: InputBasicProps, element: InputElement, value: InputValue);
    /**
     * Checks if the input correctness check is enabled.<br>
     * Проверяет, включена ли проверка правильности ввода.
     */
    is(): boolean;
    /**
     * Returns the selector for searching the external element.<br>
     * Возвращает селектор для поиска внешнего элемента.
     */
    getSelectors(): string | HTMLInputElement | undefined;
    /**
     * Returns the error text.<br>
     * Возвращает текст для ошибки.
     */
    getValidationMessage(): string;
    /**
     * Checks if the value matches the external element.<br>
     * Проверяет, совпадает ли значение с внешним элементом.
     */
    check(): InputValidationItem | undefined;
}
