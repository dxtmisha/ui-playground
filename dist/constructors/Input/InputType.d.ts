import { InputVisibility } from './InputVisibility';
import { type InputTypeName } from './typesBasic';
import { type InputBasicProps } from './props';
/**
 * Class for working with the input type.<br>
 * Класс для работы с типом ввода.
 */
export declare class InputType {
    protected readonly props: InputBasicProps;
    protected readonly visibility: InputVisibility;
    protected type: InputTypeName;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param visibility object for working with visualization /<br>объект для работы с визуализацией
     */
    constructor(props: InputBasicProps, visibility: InputVisibility);
    /**
     * Returns the input type.<br>
     * Возвращает тип ввода.
     */
    get(): InputTypeName;
    /**
     * Returns the original value.<br>
     * Возвращает оригинальное значение.
     */
    getOriginal(): InputTypeName;
}
