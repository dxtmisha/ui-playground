import { type InputPatternItemOrFunction, type InputValidationItem } from './typesBasic';
export type InputCheckItem<V = string> = {
    group: string;
    input: HTMLInputElement;
    pattern: InputPatternItemOrFunction;
    check(value: V): InputValidationItem<V>;
};
export type InputCheckList<V = string> = Record<string, InputCheckItem<V>>;
/**
 * Generates an object to work with the validation of data for input.<br>
 * Генерирует объект для работы с проверкой валидности данных для ввода.
 * @param pattern property for verification /<br>свойство для проверки
 * @param groupName group name /<br>название группы
 */
export declare function useInputCheck<V>(pattern: InputPatternItemOrFunction, groupName?: string): InputCheckItem<V>;
