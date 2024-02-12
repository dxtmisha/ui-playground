import { type EmptyValue, type FunctionArgs, type Undefined } from '../types/basic.ts';
/**
 * Is the variable equal to null or undefined.<br>
 * Является ли переменная равной null или undefined.
 * @param value input value /<br>входное значение
 */
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;
/**
 * Checks if a value is an object.<br>
 * Проверяет, является ли значение объектом.
 * @param value input value /<br>входное значение
 */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;
/**
 * Checks if the value is an object or not an array.<br>
 * Проверяет, является ли значение объектом и не является массивом.
 * @param value input value /<br>входное значение
 */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;
/**
 * Checks if the values are arrays.<br>
 * Проверяет, являются ли значения массивами.
 * @param value input value /<br>входное значение
 */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;
/**
 * Checks if the value is of type string.<br>
 * Проверяет, является ли значение типом строки.
 * @param value input value /<br>входное значение
 */
export declare function isString<T>(value: T): value is Extract<T, string>;
/**
 * Checks if the function is a callback function.<br>
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked /<br>проверяемое значение
 */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;
/**
 * Checks if the field is filled.<br>
 * Проверяет, заполнено ли поле.
 * @param value input value /<br>входное значение
 */
export declare function isFilled<T>(value: T): value is Exclude<T, EmptyValue>;
/**
 * Checks if value is in the array selected or if value equals selected, if selected is a string.<br>
 * Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.
 * @param value input value /<br>входное значение
 * @param selected array or string for comparison /<br>массив или строка для сравнения
 */
export declare function isSelected<T>(value: T, selected: T | T[]): boolean;
/**
 * Testing isSelected property for the entire list of values.<br>
 * Проверка свойства isSelected для всех значений списка.
 * @param values list of values for comparison /<br>список значений для сравнения
 * @param selected array or string for comparison /<br>массив или строка для сравнения
 */
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;
/**
 * The function performs the specified function once for each element in the object.
 * And returns an array with the results of executing the function.<br>
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте.
 * И возвращает массив с результатами выполнения функции.
 * @param data object for iteration /<br>объект для перебора
 * @param callback a function to execute for each element in the array /<br>
 * функция, которая будет вызвана для каждого элемента
 */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> = T[] | Record<string, T> | Map<string, T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T>), callback: (item: T, key: K, dataMain: typeof data) => R): R[];
/**
 * The function is executed and returns its result. Or returns the input data, if it is not a function.<br>
 * Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция
 * @param callback function or any value /<br>функция или любое значение
 */
export declare function executeFunction<T>(callback: T): Exclude<T, FunctionArgs<any, T>>;
/**
 * Converts the input value to one of the available types.<br>
 * Преобразует входное значение в один из доступных типов
 * @param value input value /<br>входное значение
 * @param isFunction if true, returns the global function by its name /<br>если true,
 * вернет глобальную функцию по ее имени
 */
export declare function transformation(value: any, isFunction?: boolean): any;
