import { type FieldMessageProps } from './props';
/**
 * Class for working with the number of input numbers.<br>
 * Класс для работы с количеством вводимых чисел.
 */
export declare class FieldMessageCounter {
    protected readonly props: FieldMessageProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: FieldMessageProps);
    /**
     * Checks if it is necessary to display the number of input characters.<br>
     * Проверяет, надо ли выводить количество вводимых символов.
     */
    is(): boolean;
    /**
     * Checks if it is necessary to display the maximum available number of characters.<br>
     * Проверяет, надо ли выводить максимальное доступное количество символов.
     */
    isMax(): boolean;
    /**
     * Returns text for output.<br>
     * Возвращает текст для вывода.
     */
    get(): string;
    /**
     * Returns the number of input characters.<br>
     * Возвращает количество вводимых символов.
     */
    getCounter(): number;
    /**
     * Returns the maximum available input number.<br>
     * Возвращает максимально доступное вводимое число.
     */
    getMax(): number;
}
