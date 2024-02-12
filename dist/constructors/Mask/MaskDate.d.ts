import { Datetime } from '../../classes/Datetime.ts';
import { MaskType } from './MaskType.ts';
import { type InputPatternList } from '../Input/typesBasic.ts';
import { type MaskGroup } from './typesBasic.ts';
import { type MaskProps } from './props.ts';
/**
 * Class for working with a date type mask.<br>
 * Класс для работы с маской типа даты.
 */
export declare class MaskDate {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type object of the mask type class /<br>объект класса тип маски
     */
    constructor(props: MaskProps, type: MaskType);
    /**
     * Returns a DateTime object.<br>
     * Возвращает объект DateTime.
     * @param date a string with a filled date /<br>строка с заполненной датой
     */
    getDatetime(date?: string): Datetime;
    /**
     * Returns a mask for filling in the date.<br>
     * Возвращает маску для заполнения даты.
     */
    getMask(): string[];
    /**
     * Returns the formatted value.<br>
     * Возвращает отформатированное значение.
     * @param date a string with a filled date /<br>строка с заполненной датой
     */
    getValue(date?: string): string;
    /**
     * Returns the standardized date value.<br>
     * Возвращает стандартизированное значение даты.
     * @param date an object with a filled date, divided into groups of characters /<br>
     * объект с заполненной датой, разделенный на группы символов
     */
    getValueStandard(date: MaskGroup): string;
    /**
     * Returns a validation template for the date.<br>
     * Возвращает шаблон проверки для даты.
     */
    getPattern(): InputPatternList;
    /**
     * Returns a list of symbols for output by group name.<br>
     * Возвращает список символов для вывода по названию группы.
     * @param groupName group name /<br>название группы
     */
    getView(groupName: string): string | undefined;
    /**
     * Returns a list of symbols for output by group.<br>
     * Возвращает список символов для вывода по группе.
     */
    getViewList(): Record<string, string>;
}
