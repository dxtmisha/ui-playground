import { EventItem } from '../../classes/EventItem.ts'

import {
  type ConstrClassObject,
  type ConstrValue
} from '../../types/constructor.ts'
import { type ScrollbarProps } from './props.ts'

const SCROLLBAR_SHIFT = 8

/**
 * Class for updating the scroll position and displaying the border.<br>
 * Класс для обновления положения скролла и вывода бордера.
 */
export class ScrollbarBorder {
  private event?: EventItem<HTMLDivElement, Event, any>

  private top: boolean = false
  private bottom: boolean = false

  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ScrollbarProps,
    protected readonly element: ConstrValue<HTMLDivElement>,
    protected readonly callback: () => void
  ) {
  }

  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  getClasses (): ConstrClassObject {
    return {
      '??--border--top': this.top,
      '??--border--bottom': this.bottom
    }
  }

  /**
   * Start monitoring the scroll.<br>
   * Начать слежение за скроллом.
   */
  start (): this {
    if (this.event) {
      this.event.start()
    } else {
      this.event = new EventItem<HTMLDivElement, Event>(
        this.element.value,
        ['scroll-sync'],
        () => this.on()
      )
        .start()
    }

    this.on()

    return this
  }

  /**
   * Stopping the monitoring of scroll changes.<br>
   * Остановка слежения за изменениями скролла.
   */
  stop (): this {
    if (this.event) {
      this.event.stop()
    }

    return this
  }

  /**
   * Changing the monitoring status depending on the border parameter.<br>
   * Изменение статуса слежения в зависимости от параметра border.
   */
  toggle (): this {
    if (this.props.border) {
      this.start()
    } else {
      this.stop()
    }

    return this
  }

  /**
   * Updating the monitoring element for the event object.<br>
   * Обновление элемента слежения для объекта события.
   */
  reset (): this {
    if (this.event) {
      this.event.setElement(this.element.value)
    }

    return this.toggle()
  }

  /**
   * Changing the data for class output.<br>
   * Изменение данных для вывода класса.
   * @param top status of the top border display /<br>статус отображения верхнего бордера
   * @param bottom status of the bottom border display /<br>статус отображения нижнего бордера
   */
  protected setData (
    top: boolean,
    bottom: boolean
  ): this {
    if (
      this.top !== top ||
      this.bottom !== bottom
    ) {
      this.top = top
      this.bottom = bottom

      if (this.callback) {
        this.callback()
      }
    }

    return this
  }

  /**
   * Function for the event of monitoring scroll changes.<br>
   * Функция для события слежения за изменениями скролла.
   */
  protected on (): void {
    const element = this.element.value

    if (element) {
      this.setData(
        element.scrollTop > SCROLLBAR_SHIFT,
        element.scrollTop < element.scrollHeight - element.clientHeight - SCROLLBAR_SHIFT
      )
    }
  }
}
