import { isObjectNotArray } from './data'

import { type ConstrItem } from '../types/constructor'

/**
 * Returns the name of the class from the property.<br>
 * Возвращает название класса из свойства.
 * @param props property of the component /<br>свойство компонента
 */
export function getClassName<T extends ConstrItem> (props?: T): string | undefined {
  return props && 'class' in props && typeof props.class === 'string' ? props.class : undefined
}

/**
 * Returns or generates a new element.<br>
 * Возвращает или генерирует новый элемент.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param index the name of the key /<br>названия ключа
 */
export function getIndex<T extends ConstrItem> (
  name: string,
  props?: T,
  index?: string
) {
  const className = getClassName(props)

  if (index && className) {
    return `${index}.${className}`
  }

  if (index) {
    return index
  }

  if (className) {
    return className
  }

  return name
}

/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export function getBind<T, R extends ConstrItem> (
  value: T | R | undefined,
  nameExtra: ConstrItem | string = {},
  name = 'value'
): R {
  const isName = typeof nameExtra === 'string'
  const index = isName ? nameExtra : name
  const extra = isName ? {} : nameExtra

  if (value) {
    if (
      value &&
      isObjectNotArray(value) &&
      index in value
    ) {
      return {
        ...extra,
        ...value
      } as R
    }

    return {
      ...extra,
      [index]: value
    } as R
  }

  return {} as R
}
