import { type Ref, shallowRef, watch } from 'vue'
import { toRefItem } from '../../functions/ref.ts'

import { type ElementItemType, useElement } from '../useElement.ts'

import {
  type ElementOrStringType,
  type ElementType
} from '../../types/element.ts'

import { type RefOrValueType } from '../../types/ref.ts'

export type ElementItemRefType<E extends ElementType = ElementType> =
  Omit<ElementItemType<E>, 'element' | 'elementHtml'>
  & {
  item: Ref
  element: Ref<ElementItemType<E>['element']>
  elementHtml: Ref<ElementItemType<E>['elementHtml']>
};

/**
 * Reactive object to work with elements.<br>
 * Реактивный объект для работы с элементами.
 * @param elementSelector selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function useElementRef<E extends ElementType> (
  elementSelector: RefOrValueType<ElementOrStringType<E>>
): ElementItemRefType<E> {
  const item: Ref<ElementOrStringType<E>> = toRefItem(elementSelector)
  const itemElement = useElement(item.value)
  const element = shallowRef(itemElement.element)
  const elementHtml = shallowRef(itemElement.elementHtml)

  watch(item, value => {
    itemElement.set(value)
    element.value = itemElement.element
    elementHtml.value = itemElement.elementHtml
  })

  return {
    ...itemElement,
    item,
    element,
    elementHtml,
    set (elementSelector?: ElementOrStringType<E>) {
      if (elementSelector !== undefined) {
        item.value = elementSelector
      }
    }
  }
}
