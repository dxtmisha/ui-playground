import { InputType } from './InputType.ts';
import type { InputBasicProps } from './props.ts';
/**
 * Class for working with checks by regular expressions.<br>
 * Класс для работы с проверкой по регулярным выражениям.
 */
export declare class InputPattern {
    protected readonly props: InputBasicProps;
    protected readonly type: InputType;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type object for working with input type /<br>объект для работы с типом ввода
     */
    constructor(props: InputBasicProps, type: InputType);
    /**
     * Returns regular expressions.<br>
     * Возвращает регулярные выражения.
     */
    get(): string | undefined;
}
