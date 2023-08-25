import { type NumberOrString } from '../types/basic.ts'

/**
 * Checks if the value is between integers.<br>
 * Проверяет, лежит ли значение между целыми числами.
 * @param value input value /<br>входное значение
 * @param between value for rounding /<br>значение для округления
 */
export function isIntegerBetween (value: number, between: number): boolean {
  const floor = Math.floor(between)
  return value >= floor && value < floor + 1
}

/**
 * Generate a random integer.<br>
 * Генерирует случайное число.
 * @param min the lowest value to return /<br>наименьшее значение
 * @param max the highest value to return /<br>наибольшее значение
 */
export function random (min: number, max: number): number {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

/**
 * The method parses a string argument and returns a floating point number.<br>
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value /<br>входное значение
 */
export function toNumber<T extends NumberOrString> (value: T): (T & number) | number {
  if (typeof value === 'number') {
    return value
  }

  return getNumber(value) || 0
}

/**
 * Method for processing a number.<br>
 * Метод для обработки числа
 * @param value input value /<br>входное значение
 */
function getNumber (value: string): number {
  let number = value.replace(/[^\d., ]+/ig, '')

  if (number.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig)) {
    number = number
      .replace(/ /ig, '')
      .replace(/,/ig, '.')
  } else if (number.match(/,[0-9]{3}[,.]/ig)) {
    number = number.replace(/,/ig, '')
  } else if (number.match(/[.][0-9]{3}[,.]/ig)) {
    number = number
      .replace(/[.]/ig, '')
      .replace(/,/ig, '.')
  } else {
    number = number.replace(/,/ig, '.')
  }

  return parseFloat(number)
}
