import { InputType } from './InputType';
import { InputPattern } from './InputPattern';
import type { ConstrValue } from '../../types/constructor';
import type { InputElementItem } from './typesBasic';
import type { InputBasicProps } from './props';
/**
 * Class for working with input elements.<br>
 * Класс для работы с элементами ввода.
 */
export declare class InputElement {
    protected readonly props: InputBasicProps;
    protected readonly element: ConstrValue<InputElementItem>;
    protected readonly type?: InputType | undefined;
    protected readonly pattern?: InputPattern | undefined;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param element input element /<br>элемент ввода
     * @param type object for working with input type /<br>объект для работы с типом ввода
     * @param pattern object for working with checks by regular expressions /<br>
     * объект для работы с проверкой по регулярным выражениям
     */
    constructor(props: InputBasicProps, element: ConstrValue<InputElementItem>, type?: InputType | undefined, pattern?: InputPattern | undefined);
    /**
     * Returns the input element.<br>
     * Возвращает элемент ввода.
     */
    get(): HTMLInputElement | undefined;
    /**
     * Returns the name of the input element.<br>
     * Возвращает название элемента ввода.
     */
    getName(): string;
    /**
     * Returns data for verification.<br>
     * Возвращает данные для проверки.
     */
    getPattern(): Record<string, any>;
    /**
     * Search for an element by its name inside a group or by selector.<br>
     * Поиск элемента по его названию внутри группы или по селектору.
     * @param nameSelectors element name or selector /<br>название элемента или селектор
     */
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    /**
     * Clear all values to the original ones.<br>
     * Очисти все значения до оригинальных.
     */
    clear(): this;
}
