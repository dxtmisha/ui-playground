import { ElementHtmlType, ElementOrStringType, ElementType } from '../types/element'
import { getElement, getElementOrWindow, isInDom } from '../functions/element'
import { isObject } from '../functions/data.ts'
import { toArray } from '../functions/object'

export type EventListenerType<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void

export type EventOptionsType = AddEventListenerOptions | boolean | undefined
export type EventActivityItemType<E extends ElementType> = {
  element: E | undefined,
  type: string
}

/**
 * Class for working with events.<br>
 * Класс для работа с события.
 */
export class EventItem<
  E extends ElementType,
  O extends Event,
  D extends Record<string, any>
> {
  /**
   * Element.<br>
   * Элемент.
   * @protected
   */
  protected element?: E

  /**
   * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
   * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
   * @protected
   */
  protected elementControl?: ElementHtmlType
  protected elementControlEdit?: boolean

  /**
   * A case-sensitive string representing the event type to listen for.<br>
   * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
   * @protected
   */
  protected type: string[]

  /**
   * The object that receives a notification (an object that implements the Event interface)
   * when an event of the specified type occurs. This must be null, an object with a
   * handleEvent() method, or a JavaScript function.<br>
   * Объект, который принимает уведомление, когда событие указанного типа произошло.
   * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
   * @protected
   */
  protected listenerRecent = ((event: O): void => {
    if (isInDom(this.elementControl)) {
      this.listener?.call(this.element, event, this.detail)

      if (
        isObject(this.options) &&
        this.options?.once
      ) {
        this.stop()
      }
    } else {
      this.stop()
    }
  }) as EventListener | EventListenerObject

  /**
   * Event states.<br>
   * Состояния события.
   * @protected
   */
  protected activity = false
  protected activityItems: EventActivityItemType<E>[] = []

  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor (
    elementSelector: ElementOrStringType<E>,
    type: string | string[],
    protected listener?: EventListenerType<O, D>,
    protected options?: EventOptionsType,
    protected detail?: D
  ) {
    this.element = getElementOrWindow(elementSelector)
    this.elementControl = getElement(elementSelector)
    this.type = toArray(type)
  }

  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement (elementSelector: ElementOrStringType<E>): this {
    const element = getElementOrWindow(elementSelector)

    if (!this.elementControlEdit) {
      this.elementControl = getElement(elementSelector)
    }

    this.element = element
    this.reset()

    return this
  }

  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl (elementSelector: ElementOrStringType<E>): this {
    this.elementControl = getElement(elementSelector)
    this.elementControlEdit = true
    return this
  }

  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType (type: string | string[]): this {
    this.type = toArray(type)
    this.reset()

    return this
  }

  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener (listener: EventListenerType<O, D>): this {
    this.listener = listener
    return this
  }

  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions (options?: EventOptionsType): this {
    this.options = options
    this.reset()

    return this
  }

  /**
   * Modifying a dependent value for the dispatch method.<br>
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail (detail?: D): this {
    this.detail = detail
    return this
  }

  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.<br>
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  dispatch (detail: D | undefined = this.detail): this {
    this.type.forEach(
      type => this.element?.dispatchEvent(new CustomEvent(type, { detail }))
    )

    return this
  }

  /**
   * Starting event listening.<br>
   * Запуск прослушивания события.
   */
  start (): this {
    if (!this.activity) {
      this.activity = true
      this.activityItems = []

      this.type.forEach(type => {
        this.element?.addEventListener(type, this.listenerRecent, this.options)
        this.activityItems.push({
          element: this.element,
          type
        })
      })
    }

    return this
  }

  /**
   * Stopping event listening.<br>
   * Остановка прослушивания события.
   */
  stop (): this {
    if (this.activity) {
      this.activity = false
      this.type.forEach(type => this.element?.removeEventListener(type, this.listenerRecent))
    }

    return this
  }

  /**
   * Toggling event handler state.<br>
   * Переключение состояния работы события.
   * @param activity event activation /<br>активация события
   */
  toggle (activity: boolean): this {
    return activity ? this.start() : this.stop()
  }

  /**
   * Overloads the listening events.<br>
   * Перегружает события прослушивания.
   */
  reset () {
    if (this.activity) {
      this.activity = false
      this.activityItems.forEach(({
        element,
        type
      }) => {
        element?.removeEventListener(type, this.listenerRecent)
      })

      this.start()
    }

    return this
  }
}
