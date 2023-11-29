import { executeFunction, isFilled, isObjectNotArray, isString } from '../../functions/data.ts'
import { createElement } from '../../functions/element.ts'

import {
  type InputPatternElement,
  type InputPatternItemOrFunction,
  type InputValidationItem
} from './typesBasic.ts'

export type InputCheckItem<P extends InputPatternItemOrFunction = InputPatternItemOrFunction> = {
  group: string
  input: HTMLInputElement
  pattern: P
  check (value: string): InputValidationItem<P>
}

export type InputCheckList = Record<string, InputCheckItem>

/**
 * Generates an object to work with the validation of data for input.<br>
 * Генерирует объект для работы с проверкой валидности данных для ввода.
 * @param pattern property for verification /<br>свойство для проверки
 * @param groupName group name /<br>название группы
 */
export function useInputCheck<P extends InputPatternItemOrFunction> (
  pattern: P,
  groupName: string = 'check'
): InputCheckItem<P> {
  const input = createElement<HTMLInputElement>(undefined, 'input', getAttributes(pattern))

  return {
    group: groupName,
    input,
    pattern,
    check (value: string): InputValidationItem<P> {
      input.value = value

      return {
        group: groupName,
        input,
        status: input.checkValidity(),
        validationMessage: input.validationMessage,
        validity: input.validity,
        pattern
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
