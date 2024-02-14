import { FieldMessageMessage } from './FieldMessageMessage';
import { FieldMessageCounter } from './FieldMessageCounter';
import { type ConstrClassObject } from '../../types/constructor';
import { type FieldMessageProps } from './props';
/**
 * Class for the component of outputting a message for the input element.<br>
 * Класс для компонента вывода сообщения для элемента ввода.
 */
export declare class FieldMessage {
    protected readonly props: FieldMessageProps;
    readonly message: FieldMessageMessage;
    readonly counter: FieldMessageCounter;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: FieldMessageProps);
    /**
     * Checks if there are values for outputting the element.<br>
     * Проверяет, есть ли значения для вывода элемента.
     */
    is(): boolean;
    /**
     * Returns data for the main style class.<br>
     * Возвращает данные для главного класса стиля.
     */
    classes(): ConstrClassObject;
}
