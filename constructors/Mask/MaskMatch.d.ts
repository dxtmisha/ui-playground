import { MaskSpecial } from './MaskSpecial.ts';
import { type MaskMatchItem } from './typesBasic.ts';
import { type MaskProps } from './props.ts';
/**
 * Class for checking the incoming character.<br>
 * Класс для проверки входящего символа.
 */
export declare class MaskMatch {
    protected readonly props: MaskProps;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param special
     */
    constructor(props: MaskProps, special: MaskSpecial);
    /**
     * Checks if the symbol fits.<br>
     * Проверяет, подходит ли символ.
     * @param char symbol for checking /<br>символ для проверки
     * @param groupName group for checking /<br>группа для проверки
     */
    is(char: string, groupName?: string): boolean;
    /**
     * Returns the value of the regular expression for checking.<br>
     * Возвращает значение регулярного выражения для проверки.
     * @param groupName group for checking /<br>группа для проверки
     */
    get(groupName?: string): MaskMatchItem;
    /**
     * Returns only the characters that can be entered from the string.<br>
     * Возвращает только символы, доступные для ввода из строки.
     * @param text text for checking /<br>текст для проверки
     */
    filter(text: string): string[];
}
