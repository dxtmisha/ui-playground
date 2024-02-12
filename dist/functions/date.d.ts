/**
 * Conversion to Date object.<br>
 * Преобразование в объект Date.
 * @param value input value /<br>входное значение
 */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;
