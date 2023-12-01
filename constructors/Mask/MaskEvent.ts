import { MaskFocus } from './MaskFocus.ts'
import { MaskValidation } from './MaskValidation.ts'
import { MaskData } from './MaskData.ts'

import { type MaskEventData } from './typesBasic.ts'
import { type MaskEmits } from './types.ts'

/**
 * Class for working with events.<br>
 * Класс для работы с событиями.
 */
export class MaskEvent {
  protected change: boolean = false

  /**
   * Constructor
   * @param focus
   * @param validation
   * @param data
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly focus: MaskFocus,
    protected readonly validation: MaskValidation,
    protected readonly data: MaskData,
    protected readonly callbackEvent?: (event: Event, value: MaskEventData) => void
  ) {
  }

  /**
   * Capture of the event in focus.<br>
   * Перехват события в фокусе.
   * @param event event object /<br>объект события
   */
  onFocus (event: FocusEvent): void {
    this.change = false
    this.focus.in()
    this.initCallback('focus', event)
  }

  /**
   * Capture of the event when focus is lost.<br>
   * Перехват события при потере фокуса.
   * @param event event object /<br>объект события
   */
  onBlur (event: FocusEvent): void {
    if (this.change) {
      this.initCallback('change', event)
    }

    this.focus.out()
    this.initCallback('blur', event)
  }

  protected onKeypress (event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement
    const start = target.selectionStart || 0
    const end = target.selectionEnd || 0

    if (this.isMeta(event)) {
      return undefined
    } else if (start === end) {
      if (this.buffer.init(event.key)) {
        this.data.set(start, event.key)
      }
    } else {
      this.data.pop(start, end)
        .set(this.selection.getShift(), event.key)
    }

    event.preventDefault()
    event.stopPropagation()
  }

  /**
   * Initializes event handling.<br>
   * Инициализирует обработку событий.
   * @param type event name /<br>название события
   * @param event event object /<br>объект события
   */
  protected initCallback<E extends Event> (
    type: keyof MaskEmits,
    event: E
  ): void {
    const validation = this.validation.get()

    if (this.callbackEvent) {
      this.callbackEvent(event, {
        type,
        ...(validation ?? {})
      } as MaskEventData)
    }
  }
}
