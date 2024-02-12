import { type NumberOrString } from '../types/basic.ts';
/**
 * Checks if the value is between integers.<br>
 * Проверяет, лежит ли значение между целыми числами.
 * @param value input value /<br>входное значение
 * @param between value for rounding /<br>значение для округления
 */
export declare function isIntegerBetween(value: number, between: number): boolean;
/**
 * Generate a random integer.<br>
 * Генерирует случайное число.
 * @param min the lowest value to return /<br>наименьшее значение
 * @param max the highest value to return /<br>наибольшее значение
 */
export declare function random(min: number, max: number): number;
/**
 * The method parses a string argument and returns a floating point number.<br>
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value /<br>входное значение
 */
export declare function toNumber<T extends NumberOrString>(value: T): (T & number) | number;
