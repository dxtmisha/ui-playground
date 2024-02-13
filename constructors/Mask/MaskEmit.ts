import { MaskValidation } from './MaskValidation'

import { type MaskEventData } from './typesBasic'
import { type MaskEmits } from './types'

/**
 * Class for event invocation.<br>
 * Класс для вызова события.
 */
export class MaskEmit {
  protected type?: string & keyof MaskEmits
  protected event?: Event

  /**
   * Constructor
   * @param validation
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly validation: MaskValidation,
    protected readonly callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void
  ) {
  }

  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   */
  isValue (): boolean {
    return Boolean(this.type && ['input', 'change'].indexOf(this.type) >= 0)
  }

  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   */
  go (): this {
    if (this.type && this.event) {
      const validation = this.isValue() ? this.validation.get() : undefined
      this.callbackEvent(this.type, this.event, validation as MaskEventData)
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
    type: string & keyof MaskEmits,
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
  setType (type: string & keyof MaskEmits): this {
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
  reset (): this {
    this.resetType()
    this.resetEvent()

    return this
  }

  /**
   * Resets the type state.<br>
   * Сбрасывает состояние тип.
   */
  resetType (): this {
    this.type = undefined
    return this
  }

  /**
   * Resets the event state.<br>
   * Сбрасывает состояние события.
   */
  resetEvent (): this {
    this.event = undefined
    return this
  }
}
