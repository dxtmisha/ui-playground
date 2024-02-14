import { MaskPattern } from './MaskPattern';
import { MaskValue } from './MaskValue';
import { type InputValidationItem } from '../Input/typesBasic';
/**
 * Class for working with the validity of entered data.<br>
 * Класс для работы с валидностью введенных данных.
 */
export declare class MaskValidation {
    protected readonly pattern: MaskPattern;
    protected readonly value: MaskValue;
    /**
     * Constructor
     * @param pattern
     * @param value
     */
    constructor(pattern: MaskPattern, value: MaskValue);
    /**
     * Checks if the current group has an error.<br>
     * Проверяет, есть ли ошибка у текущей группы.
     * @param groupName group name /<br>название группы
     */
    isError(groupName: string): boolean;
    /**
     * Checks the correctness of filling in the values.<br>
     * Проверяет корректность заполнения значений.
     */
    checkValidity(): boolean;
    /**
     * We get an object with information about the error if there is an error, or undefined.<br>
     * Получаем объект с информацией об ошибке, если есть ошибка, или undefined.
     */
    get(): InputValidationItem;
    /**
     * Getting an error message.<br>
     * Получение сообщения об ошибке.
     */
    getMessage(): string;
    /**
     * Getting global check data.<br>
     * Получение данных глобальной проверки.
     */
    protected getValidationCheck(): InputValidationItem;
}
