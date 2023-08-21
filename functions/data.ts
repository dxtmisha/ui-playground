import {
  type EmptyType,
  type FunctionAnyType,
  type FunctionType,
  type ObjectOrArrayType,
  type ObjectType,
  type UndefinedType
} from '../types/basic.ts'

/**
 * Is the variable equal to null or undefined.<br>
 * Является ли переменная равной null или undefined.
 * @param value input value /<br>входное значение
 */
export function isNull<T> (value: T | UndefinedType): value is UndefinedType {
  return value === null || value === undefined
}

/**
 * Checks if a value is an object.<br>
 * Проверяет, является ли значение объектом.
 * @param value input value /<br>входное значение
 */
export function isObject<T> (value: T | ObjectType): value is ObjectType {
  return (value && typeof value === 'object') || false
}

/**
 * Checks if the function is a callback function.<br>
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked /<br>проверяемое значение
 */
export function isFunction<T> (
  callback: T | FunctionType
): callback is FunctionType | FunctionAnyType {
  return callback instanceof Function || typeof callback === 'function'
}

/**
 * Checks if the field is filled.<br>
 * Проверяет, заполнено ли поле.
 * @param value input value /<br>входное значение
 */
export function isFilled<T> (value: T): value is Exclude<T, EmptyType> {
  if (value) {
    switch (typeof value) {
      case 'bigint':
      case 'number':
        return value !== 0
      case 'boolean':
        return value
      case 'function':
      case 'symbol':
        return true
      case 'object':
        if (Array.isArray(value)) {
          return value.length > 0
        }

        return Object.values(value).some(item => !isNull(item))
      case 'string':
        return !['', 'undefined', 'null', '0', 'false', '[]'].includes(value)
      case 'undefined':
        return false
      default:
        return Boolean(value)
    }
  }

  return false
}

/**
 * Checks if value is in the array selected or if value equals selected, if selected is a string.<br>
 * Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.
 * @param value input value /<br>входное значение
 * @param selected array or string for comparison /<br>массив или строка для сравнения
 */
export function isSelected<T> (
  value: T,
  selected: T | Exclude<any, T> | (T | Exclude<any, T>)[]
): boolean {
  if (isNull(value)) {
    return false
  }

  if (Array.isArray(selected)) {
    return selected.includes(value)
  }

  return value === selected
}

/**
 * Testing isSelected property for the entire list of values.<br>
 * Проверка свойства isSelected для всех значений списка.
 * @param values list of values for comparison /<br>список значений для сравнения
 * @param selected array or string for comparison /<br>массив или строка для сравнения
 */
export function isSelectedByList<T> (
  values: T | T[],
  selected: T | Exclude<any, T> | (T | Exclude<any, T>)[]
): boolean {
  if (Array.isArray(values)) {
    return values.every(item => isSelected(item, selected))
  }

  return isSelected(values, selected)
}

/**
 * The function performs the specified function once for each element in the object.
 * And returns an array with the results of executing the function.<br>
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте.
 * И возвращает массив с результатами выполнения функции.
 * @param data object for iteration /<br>объект для перебора
 * @param callback a function to execute for each element in the array /<br>
 * функция, которая будет вызвана для каждого элемента
 */
export function forEach<T, R> (
  data: ObjectOrArrayType<T> | Map<string, T>,
  callback: (item: T, key: string | number, dataMain: typeof data) => R
): R[] {
  if (isObject(data)) {
    const returnData: R[] = []

    if (Array.isArray(data) || data instanceof Map) {
      data.forEach((item: T, key) => returnData.push(callback(item, key, data)))
    } else {
      Object.entries(data).forEach(
        ([key, item]) => returnData.push(callback(item, key, data))
      )
    }

    return returnData.filter((item: R | undefined) => item !== undefined)
  }

  return []
}

/**
 * The function is executed and returns its result. Or returns the input data, if it is not a function.<br>
 * Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция
 * @param callback function or any value /<br>функция или любое значение
 */
export function executeFunction<T> (callback: T | FunctionType<T>): T {
  return isFunction(callback) ? callback() : callback
}

/**
 * Converts the input value to one of the available types.<br>
 * Преобразует входное значение в один из доступных типов
 * @param value input value /<br>входное значение
 * @param isFunction if true, returns the global function by its name /<br>если true,
 * вернет глобальную функцию по ее имени
 */
export function transformation (value: any, isFunction = false): any {
  if (typeof value === 'string') {
    const item = value.trim()

    switch (item) {
      case 'undefined':
        return undefined
      case 'null':
        return null
      case 'true':
        return true
      case 'false':
        return false
      default:
        if (/^[{[]/.exec(item)) {
          try {
            return JSON.parse(item)
          } catch (e) {
          }
        } else if (/^[0-9]+\.[0-9.]+$/.exec(item)) {
          return parseFloat(item)
        } else if (/^[0-9]+$/.exec(item)) {
          return parseInt(item, 10)
        } else if (
          isFunction &&
          item in window &&
          typeof window[item as any] === 'function'
        ) {
          return (window[item as any] as any) as FunctionAnyType
        }
    }
  }

  return value
}