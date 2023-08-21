import { isNull } from '../functions/data.ts'
import { getElement, getElementOrWindow, isInDom } from '../functions/element.ts'

import {
  type ElementHtmlType,
  type ElementOrStringType,
  type ElementType
} from '../types/element.ts'

export type ElementItemType<E extends ElementType> = {
  element: E | undefined
  elementHtml: (E & ElementHtmlType) | undefined
  set: (element: ElementOrStringType<E>) => void

  /**
   * Checks if an element exists.<br>
   * Проверяет, существует ли элемент
   */
  is: () => boolean

  /**
   * Checks if an element is still in the DOM tree.<br>
   * Проверяет, находится ли еще элемент в дереве DOM.
   */
  isDom: () => boolean
};

/**
 * Object to work with elements.<br>
 * Объект для работы с элементами.
 * @param elementSelector selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function useElement<E extends ElementType> (
  elementSelector: ElementOrStringType<E>
): ElementItemType<E> {
  let element: E | undefined = getElementOrWindow(elementSelector)

  return {
    get element () {
      return element
    },
    get elementHtml () {
      return getElement<E & ElementHtmlType>(element)
    },
    set (elementSelector: ElementOrStringType<E>) {
      element = getElementOrWindow(elementSelector)
    },
    is: (): boolean => !isNull(element),
    isDom: (): boolean => isInDom(element)
  }
}
