import { watch } from 'vue'
import { toRefItem } from '../functions/ref'

import { EventItem } from './EventItem'

import { type RefOrNormal } from '../types/ref'
import {
  type ElementOrString,
  type ElementOrWindow,
  type EventListenerDetail,
  type EventOptions
} from '../types/element'

export class EventRef<
  E extends ElementOrWindow,
  O extends Event,
  D extends Record<string, any>
> extends EventItem<E, O, D> {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param elementSelectorControl control element /<br>элемент управления
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor (
    elementSelector?: RefOrNormal<ElementOrString<E>>,
    elementSelectorControl?: RefOrNormal<ElementOrString<E>>,
    type: string | string[] = ['click'],
    listener?: EventListenerDetail<O, D>,
    options?: EventOptions,
    detail?: D
  ) {
    const item = toRefItem(elementSelector)
    const itemControl = toRefItem(elementSelectorControl)

    super(
      item.value,
      type,
      listener,
      options,
      detail
    )

    if (itemControl.value) {
      this.setElementControl(itemControl.value)
    }

    watch(item, (element?: ElementOrString<E>) => this.setElement(element))
    watch(itemControl, (element?: ElementOrString<E>) => this.setElementControl(element))
  }
}
