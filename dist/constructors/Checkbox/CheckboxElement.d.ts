import { InputElement } from '../Input/InputElement';
import { type ConstrValue } from '../../types/constructor';
import { type InputElementItem } from '../Input/typesBasic';
import { type CheckboxProps } from './props';
/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export declare class CheckboxElement extends InputElement {
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     */
    constructor(props: CheckboxProps, element: ConstrValue<InputElementItem>);
    /**
     * Returns data for verification.<br>
     * Возвращает данные для проверки.
     */
    getPattern(): Record<string, any>;
}
