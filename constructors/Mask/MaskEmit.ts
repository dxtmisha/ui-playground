import { MaskValidation } from './MaskValidation.ts'

import { type MaskEventData } from './typesBasic.ts'
import { type MaskEmits } from './types.ts'

/**
 * Class for event invocation.<br>
 * Класс для вызова события.
 */
export class MaskEmit {
  protected type?: keyof MaskEmits | string
  protected event?: Event

  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly validation: MaskValidation,
    protected readonly callbackEvent: (event: Event, value: MaskEventData) => void
  ) {
  }

  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go (): this {
    if (this.type && this.event) {
      const validation = this.validation.get()

      this.callbackEvent(this.event, {
        type: this.type,
        ...validation
      } as MaskEventData)
    }

    return this
  }

  /**
   * Changes the event type and event data.<br>
   * Изменяет тип события и данные события.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  set<E extends Event> (
    type: keyof MaskEmits | string,
    event: E
  ): this {
    this.setType(type)
    this.setEvent(event)

    return this
  }

  /**
   * Changes the event type.<br>
   * Изменяет тип события.
   * @param type event name /<br>название события
   */
  setType (type: keyof MaskEmits | string): this {
    this.type = type
    return this
  }

  /**
   * Changes the event object.<br>
   * Изменяет объект события.
   * @param event event object /<br>объект события
   */
  setEvent<E extends Event> (event: E): this {
    this.event = event
    return this
  }

  /**
   * Resets the state.<br>
   * Сбрасывает состояние.
   */
  protected reset (): this {
    this.type = undefined
    this.event = undefined

    return this
  }
}
