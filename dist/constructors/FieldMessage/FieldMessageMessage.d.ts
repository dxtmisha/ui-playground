import { type FieldMessageProps } from './props.ts';
/**
 * Class for working with text.<br>
 * Класс для работы с текстом.
 */
export declare class FieldMessageMessage {
    protected readonly props: FieldMessageProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: FieldMessageProps);
    /**
     * Checks if there is text.<br>
     * Проверяет, есть ли текст.
     */
    is(): boolean;
    /**
     * Checks if there is an error.<br>
     * Проверяет, есть ли ошибка.
     */
    isValidation(): boolean;
    /**
     * Returns text.<br>
     * Возвращает текст.
     */
    get(): string | undefined;
}
