import { isRef } from 'vue'
import { executeFunction, forEach, isFilled } from '../functions/data.ts'
import { intersectKey, isDifferent, toArray } from '../functions/object.ts'

import { type ArgDemoType, type ArgType } from './types.ts'

import { category } from './media.ts'

/**
 * Checks if the values were changed.<br>
 * Проверяет, были ли изменены значения.
 * @param args list of all input values /<br>список всех входных значений
 * @param value list of selected values /<br>список выбранных значений
 * @param name names of the group /<br>названия группа
 */
export function isArgsDifferent<I, T extends Record<string, I>> (
  args: Record<string, T>,
  value: T,
  name: string
): boolean {
  return args?.[name] && isDifferent(args[name], value)
}

/**
 * Returns the values of input data, grouped by categories.<br>
 * Возвращает значения входных данных, сгруппированные по категориям.
 * @param args list of all input values /<br>список всех входных значений
 * @param argTypes list of parameters and their values /<br>список параметров и их значений
 */
export function getArgsAll<
  I,
  T extends Record<string, I>,
  K extends keyof T
> (
  args: T,
  argTypes: Record<K, ArgType>
): Record<string, Record<keyof T & K, T[K]>> {
  const values: Record<string, Record<keyof T & K, T[K]>> = {}

  forEach(getArgTypes(argTypes), (item, name) => {
    values[name] = intersectKey(args, item)
  })

  return values
}

/**
 * Returns input attributes.<br>
 * Возвращает входные атрибуты.
 * @param args list of all input values /<br>список всех входных значений
 * @param argTypes list of parameters and their values /<br>список параметров и их значений
 */
export function getArgsMain<T> (
  args: Record<string, T>,
  argTypes: Record<string, ArgType>
) {
  return intersectKey(args, getArgTypesByCategory(argTypes, category.arg))
}

/**
 * Returns input values.<br>
 * Возвращает входные значения.
 * @param args list of all input values /<br>список всех входных значений
 * @param argTypes list of parameters and their values /<br>список параметров и их значений
 */
export function getArgsValue<T> (
  args: Record<string, T>,
  argTypes: Record<string, ArgType>
) {
  return intersectKey(args, getArgTypesByCategory(argTypes, category.value))
}

/**
 * Returns the concatenated description.<br>
 * Возвращает склеенное описание.
 * @param texts texts to merge /<br>тексты для объединения
 */
export function getDescription (texts?: string | string[]) {
  return toArray(texts).join('<br>')
}

/**
 * Returns a list of input variables for an output function.<br>
 * Возвращает список входных переменных для функции вывода.
 * @param value input data for a function /<br>входные данные для функции
 * @param args temporary variable for storing intermediate results /<br>
 * временная переменная для хранения промежуточных результатов
 */
export function toArgs<T> (
  value?: ArgDemoType<T>,
  args: T[] = []
) {
  const returnValue: ArgDemoType<T> = []

  if (value) {
    value.shift()?.forEach((arg: T) => {
      if (value.length > 0) {
        returnValue.push(
          ...toArgs([...value], [...args, arg])
        )
      } else {
        returnValue.push([...args, arg])
      }
    })
  }

  return returnValue
}

/**
 * Converts all functions in the input data into variables, calling them.<br>
 * Преобразует все функции во входных данных в переменные, вызывая их.
 * @param args input data for a function /<br>входные данные для функции
 */
export function toCallbackArgs<T> (args: T[]): T[] {
  return forEach(args, arg => executeFunction(arg))
}

/**
 * Converts all input data to a string.<br>
 * Преобразует все входные данные в строку.
 * @param args input data for a function /<br>входные данные для функции
 */
export function toCallbackName<T> (args: T[]): string {
  return forEach(args, arg => toName(arg)).join(', ')
}

/**
 * Converts the function's response.<br>
 * Преобразовывает ответ функции.
 * @param value the function's return value /<br>возвращаемое значение функции
 */
export function toCallbackReturn<T> (value: T): string {
  const text = toName(value)

  return (isFilled(text) && `<b>${text}</b>`) || text
}

/**
 * Converts a single value to a string.<br>
 * Преобразует одно значение в строку.
 * @param value data for conversion /<br>данные для преобразования
 */
export function toName<T> (value: T): string {
  if (value instanceof Date) {
    return toNameObject('Date', String(value))
  }

  if (value instanceof RegExp) {
    return toNameObject('RegExp', String(value))
  }

  if (value instanceof HTMLElement) {
    return toNameElement(value)
  }

  if (value instanceof Window) {
    return toNameObject('Window')
  }

  if (isRef(value)) {
    return toNameObject('Ref', toName(value.value))
  }

  return toNameByType(value)
}

/**
 * Converting a value to a readable name by its type.<br>
 * Преобразование значения в читаемое имя по его типу.
 * @param value data for conversion /<br>данные для преобразования
 */
export function toNameByType<T> (value: T): string {
  switch (typeof value) {
    case 'function':
      return toNameObject('Function', value.name)
    case 'object':
      return JSON.stringify(value)
    case 'string':
      return `'${value}'`
    case 'undefined':
      return 'undefined'
    default:
      return String(value)
  }
}

/**
 * Getting a string, formatted for a non-standard value.<br>
 * Получение строки, отформатированной для значения по нестандартному типу.
 * @param name property type name /<br>название типа свойства
 * @param value property values /<br>значение свойства
 */
export function toNameObject (name: string, value?: string): string {
  return `${name}${isFilled(value) ? `&#60;${value}&#62;` : ''}`
}

/**
 * Type conversion of an element.<br>
 * Преобразование типа элемента.
 * @param value data for conversion /<br>данные для преобразования
 */
export function toNameElement (value: HTMLElement): string {
  if (value.id) {
    return `${value.nodeName}#${value.id}`
  }

  if (value.className) {
    return `${value.nodeName}.${value.className.replace(' ', '.')}`
  }

  return value.nodeName
}

/**
 * The function is called and returns the returned data.<br>
 * Вызывает функция и возвращает возвращенные данные.
 * @param callback function name /<br>имя функции
 * @param args input data for a function /<br>входные данные для функции
 */
export function makeCallback<
  A,
  R,
  C extends (...args: A[]) => R,
> (callback: C, args: Record<string, any> | any[]): R {
  if (Array.isArray(args)) {
    return callback(...args)
  } else {
    return callback(...(Object.values(args) as A[]))
  }
}

/**
 * Returns a list of values, grouped by category names.<br>
 * Возвращает список значений, сгруппированных по названиям категории.
 * @param argTypes list of parameters and their values /<br>список параметров и их значений
 */
function getArgTypes<
  I extends ArgType,
  T extends Record<string, I>,
  K extends keyof T
> (
  argTypes: T
): Record<string, Record<K, I>> {
  const args: Record<string, Record<K, I>> = {}

  forEach(argTypes, (arg: I) => {
    const categoryName = arg?.table?.category ?? category.other

    if (categoryName in args) {
      args[categoryName][arg.name as K] = arg
    } else {
      args[categoryName] = { [arg.name]: arg } as Record<K, I>
    }
  })

  return args
}

/**
 * Returns a list of values by their category.<br>
 * Возвращает список значений по их категории.
 * @param argTypes list of parameters and their values /<br>список параметров и их значений
 * @param category category name /<br>название категории
 */
function getArgTypesByCategory (
  argTypes: Record<string, ArgType>,
  category: string
) {
  const args: Record<string, ArgType> = {}

  forEach(argTypes, arg => {
    if (arg?.table?.category === category) {
      args[arg.name] = arg
    }
  })

  return args
}
