import { executeFunction, forEach, isFilled, isObject } from './data.ts'
import { random } from './number.ts'

import { type ObjectType } from '../types/basic.ts'
import {
  type ElementAttributes,
  type ElementHtmlType,
  type ElementOrStringType,
  type ElementType,
  type WindowType
} from '../types/element.ts'

/**
 * Checks if object is Window.<br>
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function isWindow<E extends WindowType> (element: E | Exclude<any, E>): element is E {
  return element === window
}

/**
 * Checks if an element is still in the DOM tree.<br>
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function isInDom<E extends ElementType> (element?: ElementOrStringType<E>): boolean {
  return Boolean(getElement(element)?.closest?.('html'))
}

/**
 * Returns the first Element in the document that matches the specified selector or the element.<br>
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function getElement<E extends ElementHtmlType> (
  element?: ElementOrStringType<E> | WindowType
): E | undefined {
  if (isWindow(element)) {
    return document.body as E
  }

  if (typeof element === 'string') {
    return document.querySelector<E>(element) ?? undefined
  }

  return element
}

/**
 * Returns window or element.<br>
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function getElementOrWindow<E extends ElementType> (
  element?: ElementOrStringType<E>
): E | undefined {
  if (isWindow(element)) {
    return element
  }

  return getElement(element) as E
}

/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.<br>
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID /<br>элемент, с которого получаете ID
 * @param selector selectors for matching /<br>селекторов для сопоставления
 */
export function getElementId<E extends ElementHtmlType> (element?: E, selector?: string): string {
  const elementItem = getElement(element)

  if (elementItem) {
    if (!isFilled(elementItem.id)) {
      elementItem.setAttribute('id', `id-${idLast++}`)
    }

    return selector ? `#${elementItem.id}${selector}`.trim() : elementItem.id
  }

  return `id-${idLast++}`
}

/**
 * Returns the value of an element by its key.<br>
 * Возвращает значение элемента по его ключу.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param defaultValue returns this parameter if the value is missing /<br>возвращает этот параметр,
 * если значение отсутствует
 */
export function getElementItem<
  T extends ElementHtmlType,
  D,
  K extends keyof T = keyof T
> (
  element: T,
  index: K | string,
  defaultValue?: D
): T[K] | D {
  return element?.[index as K] ?? (defaultValue as D)
}

/**
 * Gets a list of attributes of an element.<br>
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function getAttributes<E extends ElementHtmlType> (element?: ElementOrStringType<E>): ElementAttributes {
  const attributes: ElementAttributes = {}
  const item = getElement(element)

  if (item) {
    for (const attribute of item.attributes) {
      attributes[attribute.name] = (attribute?.value || attribute?.textContent) ?? undefined
    }
  }

  return attributes
}

/**
 * Modifies the value of an element identified by its key
 *
 * Изменяет значение элемента, определенного ключом
 * @param element checked element / проверяемый элемент
 * @param index index at which we retrieve values / индекс, по которому получаем значения
 * @param value new value / новое значение
 */
export function setElementItem<
  E extends ElementHtmlType,
  K extends keyof E = keyof E,
  V extends E[K] = E[K]
> (
  element: ElementOrStringType<E>,
  index: K,
  value: V | ObjectType<V>
): E | undefined {
  const elementItem = getElement(element)

  if (elementItem) {
    const data = getElementItem(elementItem, index)

    if (
      isObject(data) &&
      isObject(value)
    ) {
      forEach(value, (item, key) => {
        data[key] = executeFunction(item)
      })
    } else {
      const newValue = executeFunction(value)

      if (
        !(index in elementItem) &&
        typeof newValue === 'string'
      ) {
        elementItem.setAttribute(index.toString(), newValue)
      } else {
        elementItem[index] = executeFunction(value) as V
      }
    }
  }

  return elementItem
}

/**
 * In an HTML document.<br>
 * В HTML-документах создаёт элемент c тем тегом, что указан в аргументе.
 * @param parentElement the DOM node's parent Element /<br>родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created /<br>строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element /<br>объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted /<br>элемент,
 * перед которым будет вставлен newElement
 */
export function createElement<T extends ElementHtmlType> (
  parentElement?: ElementHtmlType,
  tagName = 'div',
  options?: Record<keyof T, T[keyof T]> | ((element: T) => void),
  referenceElement?: ElementHtmlType
): T {
  const element = document.createElement(tagName) as T

  if (typeof options === 'function') {
    options(element)
  } else if (isObject(options)) {
    forEach(options, (value, key) => {
      setElementItem(element, key as keyof T, value)
    })
  }

  parentElement?.insertBefore<T>(element, referenceElement ?? null)
  return element
}

/**
 * Counter generator of ID number of element.<br>
 * Счетчик генератор номера ID элемента.
 */
let idLast = random(100000, 900000)
