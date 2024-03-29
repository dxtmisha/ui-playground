import { type FunctionReturn } from '../types/basic';
/**
 * The object is used for matching text with a pattern.<br>
 * Конструктор создаёт объект регулярного выражения для сопоставления текста с шаблоном.
 * @param value test for replacement /<br>тест для замены
 * @param flags если определён, может принимать любую комбинацию нижеследующих значений:
 * g - глобальное сопоставление,
 * i - игнорирование регистра при сопоставлении
 * m - сопоставление по нескольким строкам.
 * @param pattern Regular expression text in which the value :value will be replaced with the optimized value of value /<br>
 * Текст регулярного выражения, в котором значение :value заменится на оптимизированное значение value
 */
export declare function getExp(value: string, flags?: string, pattern?: string): RegExp;
/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.<br>
 * Метод извлекает данные перетаскивания (в виде строки) для указанного типа.
 * @param event the ClipboardEvent interface represents events providing information
 * related to modification of the clipboard, that is cut, copy, and paste events /<br>интерфейс
 * ClipboardEvent представляет события, предоставляющие информацию, связанную с изменением буфера обмена,
 * этими события являются cut, copy и paste.
 */
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;
/**
 * Conversion of a value to a string.<br>
 * Преобразование значения в строку.
 * @param value values for conversion /<br>значения для преобразования
 */
export declare function anyToString<V>(value: V): string;
/**
 * Convert a String to Camel Case (upper).<br>
 * Преобразование строки в Camel Case (upper).
 * @param value input value /<br>входное значение
 */
export declare function toCamelCase(value: string): string;
/**
 * Convert a String to Camel Case (+ first letter).<br>
 * Преобразование строки в Camel Case (+ первая буква).
 * @param value input value /<br>входное значение
 */
export declare function toCamelCaseFirst(value: string): string;
/**
 * Convert a string to kebab case (lower).<br>
 * Преобразование строки в kebab case (lower).
 * @param value input value /<br>входное значение
 */
export declare function toKebabCase(value: string): string;
/**
 * Replacing the value from replaces in value.<br>
 * Замена значения из replaces в value.
 * @param value template string /<br>строка шаблона
 * @param replaces object with data for replacement /<br>объект с данными для замены
 */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;
/**
 * The method creates a string of length count, consisting of the characters value.<br>
 * Метод создает строку длиной count, состоящую из символов value.
 * @param value character for filling /<br>символ для заполнения
 * @param count length of the string /<br>длина строки
 */
export declare function strFill(value: string, count: number): string;
