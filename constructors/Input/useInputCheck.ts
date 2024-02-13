import { executeFunction, isFilled, isObjectNotArray, isString } from '../../functions/data'
import { anyToString } from '../../functions/string'
import { createElement } from '../../functions/element'

import {
  type InputPatternElement,
  type InputPatternItemOrFunction,
  type InputValidationItem
} from './typesBasic'

export type InputCheckItem<V = string> = {
  group: string
  input: HTMLInputElement
  pattern: InputPatternItemOrFunction
  check (value: V): InputValidationItem<V>
}

export type InputCheckList<V = string> = Record<string, InputCheckItem<V>>

/**
 * Generates an object to work with the validation of data for input.<br>
 * Генерирует объект для работы с проверкой валидности данных для ввода.
 * @param pattern property for verification /<br>свойство для проверки
 * @param groupName group name /<br>название группы
 */
export function useInputCheck<V> (
  pattern: InputPatternItemOrFunction,
  groupName: string = 'check'
): InputCheckItem<V> {
  const input = createElement<HTMLInputElement>(undefined, 'input', getAttributes(pattern))

  return {
    group: groupName,
    input,
    pattern,
    check<V> (value: V): InputValidationItem<V> {
      input.value = anyToString(value)

      return {
        group: groupName,
        input,
        status: input.checkValidity(),
        validationMessage: input.validationMessage,
        validity: input.validity,
        pattern,
        value
      }
    }
  }
}

/**
 * Getting a list of attributes for verification.<br>
 * Получение списка атрибутов для проверки.
 * @param pattern property for verification /<br>свойство для проверки
 */
function getAttributes (
  pattern: InputPatternItemOrFunction
): InputPatternElement {
  if (isFilled(pattern)) {
    const attributes: InputPatternElement = executeFunction(pattern)

    if (isString(pattern)) {
      return { pattern }
    }

    if (isObjectNotArray(attributes)) {
      return attributes
    }
  }

  return {}
}
