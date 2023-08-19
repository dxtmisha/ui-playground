import { forEach, isObject } from './data.ts'

import {
  type ObjectOrArrayType,
  type ObjectType
} from '../types/basic.ts'

/**
 * Checks if the values of two objects are different.<br>
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values /<br>текущие значения
 * @param old old values /<br>старые значения
 */
export function isDifferent<T> (
  value: ObjectType<T>,
  old: ObjectType<T>
): boolean {
  let different = Object.keys(value).length !== Object.keys(old).length

  if (!different) {
    forEach(value, (item, key) => {
      if (item !== old?.[key]) {
        different = true
      }
    })
  }

  return different
}

/**
 * Returns an array of values for a specific column in the input array.<br>
 * Возвращает массив значений для определенного столбца входного массива.
 * @param array a one array or an array of objects from which to pull a column of values from /<br>
 * многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param column ключ столбца, значения которого нужно вернуть /<br>the column of values to return
 */
export function getColumn<T, K extends keyof T> (
  array: ObjectOrArrayType<T>,
  column: K
): Array<T[K] | undefined> {
  return forEach(array, item => item?.[column])
}

/**
 * Searches for the shortest string in the array and returns its length.<br>
 * Ищет самую короткую строку в массиве и возвращает её длину.
 * @param data array with values /<br>массив с значениями
 */
export function getMinLength (data: ObjectOrArrayType<string>): number {
  return Math.min(...getLength(data))
}

/**
 * Searches for the longest string in the array and returns its length.<br>
 * Ищет самую длинную строку в массиве и возвращает её длину.
 * @param data array with values /<br>массив с значениями
 */
export function getMaxLength (data: ObjectOrArrayType<string>): number {
  return Math.max(...getLength(data))
}

/**
 * Creates a copy of a simple object.<br>
 * Создает копию простого объекта.
 * @param value object for copying /<br>объект для копирования
 */
export function copyObject<T, R extends ObjectOrArrayType<T>> (value: R): R {
  return JSON.parse(JSON.stringify(value)) as R
}

/**
 * Removes duplicate entries in an array.<br>
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value /<br>входное значение
 */
export function uniqueArray<T> (value: T[]): T[] {
  return [...new Set(value)]
}

/**
 * The method creates an array of "count" elements with values equal to "value".<br>
 * Метод создает массив из "count" элементов со значениями равными "value".
 * @param value value to fill the array with /<br>значение, заполняющее массив
 * @param count the number of elements in that array /<br>число элементов этого массива
 */
export function arrFill<T> (value: T, count: number): T[] {
  return Array(count).fill(value) as T[]
}

/**
 * Merge one or more arrays recursively.<br>
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced /<br>массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted /<br>массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays /<br>сливает один или большее количество массивов
 */
export function replaceRecursive<I> (
  array: ObjectType<I>,
  replacement?: ObjectOrArrayType<I>,
  isMerge = true
): ObjectType<I> {
  const returnData: ObjectType<I> = copyObject(array)

  if (
    isObject(array) &&
    isObject(replacement)
  ) {
    forEach(
      replacement,
      (item, index) => {
        const data = array?.[index]

        if (
          isObject(data) &&
          isObject(item)
        ) {
          if (
            isMerge &&
            Array.isArray(data) &&
            Array.isArray(item)
          ) {
            returnData[index] = copyObject(uniqueArray([...data, ...item])) as I
          } else {
            returnData[index] = replaceRecursive(
              Array.isArray(data) ? { ...data } : data,
              item,
              isMerge
            ) as I
          }
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      }
    )
  }

  return returnData
}

/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.<br>
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object /<br>целевой объект
 * @param replacement the source object /<br>исходные объекты
 * @param indexStart index at which to start changing the array /<br>индекс, по которому начинает изменять массив
 */
export function splice<I> (
  array: ObjectType<I>,
  replacement?: ObjectType<I> | I,
  indexStart?: string
): ObjectType<I> {
  if (
    isObject(array) &&
    isObject(replacement)
  ) {
    if (indexStart) {
      let returnData: ObjectType<I> = {}
      let init = false

      forEach(array, (item, index) => {
        if (
          !init && (
            indexStart === index ||
            indexStart === item
          )
        ) {
          init = true
          returnData = replaceRecursive(returnData, replacement)
        } else if (init) {
          returnData = replaceRecursive(returnData, { [index]: item })
        } else {
          returnData[index] = isObject(item) ? copyObject(item) : item
        }
      })

      return init ? returnData : replaceRecursive(array, replacement)
    }

    if (isObject(replacement)) {
      return replaceRecursive(array, replacement)
    }
  }

  return copyObject(array)
}

/**
 * Computes the intersection of arrays using keys for comparison.<br>
 * Вычислить пересечение массивов, сравнивая ключи.
 * @param data the array with master keys to check /<br>основной проверяемый массив
 * @param comparison arrays to compare keys against /<br>массивы, с которыми идёт сравнение
 */
export function intersectKey<
  T,
  KT extends keyof T,
  C,
  KC extends keyof C
> (
  data?: T,
  comparison?: C
): Record<KT & KC, T[KT]> {
  const values = {} as Record<KT & KC, T[KT]>

  if (
    isObject(data) &&
    isObject(comparison)
  ) {
    forEach(data, (item, index) => {
      if (index in comparison) {
        values[index as (KT & KC)] = item
      }
    })
  }

  return values
}

/**
 * Conversion to array.<br>
 * Преобразование в массив.
 * @param value input value /<br>входное значение
 */
export function toArray<T extends any[] | any> (value: T): (T & any[]) | [T] {
  return Array.isArray(value) ? value : [value]
}

/**
 * Returns the length of all elements in an array.<br>
 * Возвращает длину всех элементов в виде массива.
 * @param value input value /<br>входное значение
 */
function getLength (value: ObjectOrArrayType<string>): number[] {
  return forEach(value, item => item.length)
}
