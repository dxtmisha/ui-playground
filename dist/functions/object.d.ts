import { type ObjectItem, type ObjectOrArray } from '../types/basic.ts';
/**
 * Checks if the values of two objects are different.<br>
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values /<br>текущие значения
 * @param old old values /<br>старые значения
 */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;
/**
 * Checks if the value is in the current array.<br>
 * Проверяет, есть ли значение в текущем массиве.
 * @param array array for checking /<br>массив для проверки
 * @param value value to be checked /<br>проверяемое значение
 */
export declare function inArray<T>(array: T[], value: T): boolean;
/**
 * Returns an array of values for a specific column in the input array.<br>
 * Возвращает массив значений для определенного столбца входного массива.
 * @param array a one array or an array of objects from which to pull a column of values from /<br>
 * многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param column the column of values to return /<br>ключ столбца, значения которого нужно вернуть
 */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];
/**
 * Searches for the shortest string in the array and returns its length.<br>
 * Ищет самую короткую строку в массиве и возвращает её длину.
 * @param data array with data /<br>массив с данными
 */
export declare function getMinLength(data: ObjectOrArray<string>): number;
/**
 * Searches for the longest string in the array and returns its length.<br>
 * Ищет самую длинную строку в массиве и возвращает её длину.
 * @param data array with data /<br>массив с данными
 */
export declare function getMaxLength(data: ObjectOrArray<string>): number;
/**
 * Creates a copy of a simple object.<br>
 * Создает копию простого объекта.
 * @param value object for copying /<br>объект для копирования
 */
export declare function copyObject<T>(value: T): T;
/**
 * Removes duplicate entries in an array.<br>
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value /<br>входное значение
 */
export declare function uniqueArray<T>(value: T[]): T[];
/**
 * The method creates an array of "count" elements with values equal to "value".<br>
 * Метод создает массив из "count" элементов со значениями равными "value".
 * @param value value to fill the array with /<br>значение, заполняющее массив
 * @param count the number of elements in that array /<br>число элементов этого массива
 */
export declare function arrFill<T>(value: T, count: number): T[];
/**
 * Merge one or more arrays recursively.<br>
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced /<br>массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted /<br>массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays /<br>сливает один или большее количество массивов
 */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;
/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.<br>
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object /<br>целевой объект
 * @param replacement the source object /<br>исходные объекты
 * @param indexStart index at which to start changing the array /<br>индекс, по которому начинает изменять массив
 */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;
/**
 * Computes the intersection of arrays using keys for comparison.<br>
 * Вычислить пересечение массивов, сравнивая ключи.
 * @param data the array with master keys to check /<br>основной проверяемый массив
 * @param comparison arrays to compare keys against /<br>массивы, с которыми идёт сравнение
 */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;
/**
 * Conversion to array.<br>
 * Преобразование в массив.
 * @param value input value /<br>входное значение
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];
