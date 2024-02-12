import { type GeoDate } from '../../types/geo.ts';
import { type MaskProps } from './props.ts';
/**
 * Class for defining the mask type.<br>
 * Класс для определения типа маски.
 */
export declare class MaskType {
    protected readonly props: MaskProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: MaskProps);
    /**
     * Is the mask numeric.<br>
     * Является ли маска числовой.
     */
    isNumber(): boolean;
    /**
     * Is the input mask a currency value.<br>
     * Является ли маска для ввода валютным значением.
     */
    isCurrency(): boolean;
    /**
     * Is the input mask one of the numeric types.<br>
     * Является ли маска для ввода одним из числовых типов.
     */
    isCurrencyOrNumber(): boolean;
    /**
     * Is this a mask for email input.<br>
     * Является ли это маской для ввода email.
     */
    isEmail(): boolean;
    /**
     * Is the mask one of the types for time input.<br>
     * Является ли маска одним из типов для ввода времени.
     */
    isTime(): boolean;
    /**
     * Is the mask one of the types for date input.<br>
     * Является ли маска одним из типов для ввода даты.
     */
    isDate(): boolean;
    /**
     * Returns the type of mask.<br>
     * Возвращает тип маски.
     */
    get(): string;
    /**
     * Returns the type of mask for working with dates.<br>
     * Возвращает тип маски для работы с датами.
     */
    getByDate(): GeoDate;
}
