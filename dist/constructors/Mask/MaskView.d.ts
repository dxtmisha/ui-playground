import { MaskType } from './MaskType.ts';
import { MaskDate } from './MaskDate.ts';
import { MaskFormat } from './MaskFormat.ts';
import { MaskSpecial } from './MaskSpecial.ts';
import { MaskRubber } from './MaskRubber.ts';
import { MaskItem } from './MaskItem.ts';
import { MaskValueBasic } from './MaskValueBasic.ts';
import { MaskValidation } from './MaskValidation.ts';
import { type MaskProps } from './props.ts';
import { type MaskViewList } from './typesBasic.ts';
/**
 * Class for working with data to output to the screen.<br>
 * Класс для работы с данными для вывода на экран.
 */
export declare class MaskView {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly validation: MaskValidation;
    protected readonly className: string;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type
     * @param date
     * @param format
     * @param special
     * @param rubber
     * @param mask
     * @param valueBasic
     * @param validation
     * @param className define class names for each symbol /<br>определить названия класс для каждого символа
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat, special: MaskSpecial, rubber: MaskRubber, mask: MaskItem, valueBasic: MaskValueBasic, validation: MaskValidation, className?: string);
    /**
     * Returns an array with information for displaying on the screen.<br>
     * Возвращает массив с информацией для вывода на экран.
     */
    get(): MaskViewList;
    /**
     * Getting the basic standard values for the input field.<br>
     * Получение базовых стандартных значений для поля ввода.
     */
    getInput(): string;
    /**
     * Checks if the value is filled in.<br>
     * Проверяет, заполнено ли значение.
     * @param value input values /<br>вводимые значения
     */
    protected isValue(value?: string): value is string;
    /**
     * Returns the status by the entered symbol and the location.<br>
     * Возвращает статус по введенному символу и месту.
     * @param char checkable symbol /<br>проверяемая переменная
     * @param value input values /<br>вводимые значения
     */
    protected getStatus(char: string, value?: string): string;
    /**
     * Returns a symbol from a filled value by mask or special symbol.<br>
     * Возвращает символ из заполненного значения по маске или специальному символу.
     * @param char checkable symbol /<br>проверяемая переменная
     * @param value input values /<br>вводимые значения
     */
    protected getValue(char: string, value?: string): string;
    /**
     * Returns a special symbol for output by the entered symbol.<br>
     * Возвращает специальный символ для вывода по введенному символу.
     * @param char checkable symbol /<br>проверяемая переменная
     */
    protected getSpecialToView(char: string): string;
    /**
     * Returns a special symbol by symbol.<br>
     * Возвращает специальный символ по типу символа.
     * @param groupName group name /<br>название группы
     */
    protected getViewChar(groupName: string): string | undefined;
}
