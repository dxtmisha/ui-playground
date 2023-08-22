import { Ref, watch } from 'vue'
import { toRefItem } from '../../functions/ref.ts'

import { EventItem, EventListenerType, EventOptionsType } from '../../classes/EventItem.ts'

import { ElementHtmlType, ElementOrStringType, ElementType } from '../../types/element.ts'
import { RefOrValueType } from '../../types/ref.ts'

export type EventRefType<E extends ElementType> = {
  item: Ref<ElementOrStringType<E> | undefined>,
  itemControl: Ref<ElementOrStringType<ElementHtmlType> | undefined>,
  toggle: (activity: boolean) => void,
  dispatch: () => void
}

/**
 * Creates a reactive variable to manage an event.<br>
 * Создает реактивную переменную для управления событием.
 * @param elementSelector element /<br>элемент
 * @param type type /<br>тип
 * @param listener the object that receives a notification (an object that implements the
 * Event interface) when an event of the specified type occurs /<br>объект, который принимает
 * уведомление, когда событие указанного типа произошло
 * @param elementSelectorControl additional element for verification /<br>дополнительный элемент для проверки
 * @param options object that specifies characteristics /<br>объект options
 * @param detail an event-dependent value associated with the event /<br>зависимое от события
 * значение, связанное с событием
 */
export function useEventRef<
  E extends ElementType,
  O extends Event,
  D extends Record<string, any>
> (
  elementSelector?: RefOrValueType<ElementOrStringType<E>>,
  type: string | string[] = 'click',
  listener?: EventListenerType<O, D>,
  elementSelectorControl?: RefOrValueType<ElementOrStringType<ElementHtmlType>>,
  options?: EventOptionsType,
  detail?: D
): EventRefType<E> {
  const item: Ref<ElementOrStringType<E> | undefined> = toRefItem(elementSelector)
  const itemControl: Ref<ElementOrStringType<ElementHtmlType> | undefined> = toRefItem(elementSelectorControl)
  let event: EventItem<E, O, D>

  watch([item, itemControl], () => {
    if (item.value) {
      if (!event) {
        event = new EventItem(
          item.value,
          type,
          listener,
          options,
          detail
        )
      }

      if (item.value) {
        event?.setElement(item.value)
      }

      if (itemControl.value) {
        event?.setElementControl(itemControl.value)
      }
    }
  })

  return {
    item,
    itemControl,
    toggle (activity: boolean) {
      event?.toggle(activity)
    },
    dispatch () {
      event?.dispatch()
    }
  }
}
