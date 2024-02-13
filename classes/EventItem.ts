import { isNull, isObject } from '../functions/data'
import { toArray } from '../functions/object'
import { getElement, getElementOrWindow, isInDom } from '../functions/element'

import {
  type ElementOrString,
  type ElementOrWindow,
  type EventActivityItem,
  type EventListenerDetail,
  type EventOptions
} from '../types/element'

/**
 * Class for working with events.<br>
 * Класс для работа с события.
 */
export class EventItem<
  E extends ElementOrWindow,
  O extends Event,
  D extends Record<string, any> = Record<string, any>
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
  protected elementControl?: ElementOrWindow
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
  protected listenerRecent = (event?: O | ResizeObserverEntry): void => {
    if (isInDom(this.elementControl)) {
      this.listener?.call(this.element, event as O, this.detail)

      if (
        isObject(this.options) &&
        this.options?.once
      ) {
        this.stop()
      }
    } else {
      this.stop()
    }
  }

  /**
   * Event states.<br>
   * Состояния события.
   * @protected
   */
  protected activity = false
  protected activityItems: EventActivityItem<E>[] = []

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
    elementSelector?: ElementOrString<E>,
    type: string | string[] = ['click'],
    protected listener?: EventListenerDetail<O, D>,
    protected options?: EventOptions,
    protected detail?: D
  ) {
    this.element = getElementOrWindow(elementSelector)
    this.elementControl = getElement(elementSelector)
    this.type = toArray(type)
  }

  /**
   * Checks whether event listening is currently enabled.<br>
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive (): boolean {
    return this.activity
  }

  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement (elementSelector?: ElementOrString<E>): this {
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
  setElementControl (elementSelector?: ElementOrString<E>): this {
    this.elementControl = getElement(elementSelector)
    this.elementControlEdit = !isNull(this.elementControl)

    if (!this.elementControlEdit) {
      this.elementControl = getElement(this.element)
    }

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
  setListener (listener: EventListenerDetail<O, D>): this {
    this.listener = listener
    return this
  }

  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions (options?: EventOptions): this {
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
        if (this.element) {
          if (
            !(type === 'resize' && this.makeResize()) &&
            !(type === 'scroll-sync' && this.makeScroll())
          ) {
            this.element.addEventListener(type, this.listenerRecent as EventListener, this.options)
            this.activityItems.push({
              element: this.element,
              type
            })
          }
        }
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
      this.activityItems.forEach(({
        element,
        type,
        listener,
        observer
      }) => {
        if (observer) {
          observer.disconnect()
        } else if (listener) {
          element?.removeEventListener(type, listener as EventListener)
        } else {
          element?.removeEventListener(type, this.listenerRecent as EventListener)
        }
      })
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
      this.stop()
      this.start()
    }

    return this
  }

  /**
   * Checks if the ResizeObserver object exists.<br>
   * Проверяет, существует ли объект ResizeObserver.
   */
  protected isObserver (): boolean {
    return 'ResizeObserver' in window
  }

  /**
   * The implementation of the resize event for an element.<br>
   * Реализация события изменения размера для элемента.
   * @protected
   */
  protected makeResize (): boolean {
    if (
      this.element &&
      this.element instanceof HTMLElement &&
      this.element !== document.body &&
      this.isObserver()
    ) {
      const observer = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => this.listenerRecent(entries?.[0])
      )

      observer.observe(this.element)

      this.activityItems.push({
        element: this.element,
        type: 'resize',
        observer
      })

      return true
    }

    return false
  }

  /**
   * Implementation of the scroll event for an element.<br>
   * Реализация события изменения положения скролла для элемента.
   * @protected
   */
  protected makeScroll (): boolean {
    if (this.element) {
      let go = false
      const listener = (event: O): void => {
        if (!go) {
          go = true
          requestAnimationFrame(() => {
            this.listenerRecent(event)
            go = false
          })
        }
      }

      this.element.addEventListener('scroll', listener as EventListener, this.options)
      this.element.addEventListener('resize', listener as EventListener, this.options)
      this.activityItems.push(
        {
          element: this.element,
          type: 'scroll',
          listener
        },
        {
          element: this.element,
          type: 'resize',
          listener
        }
      )

      return true
    }

    return false
  }
}
