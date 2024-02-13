import { WindowStatus } from './WindowStatus'
import { WindowClient } from './WindowClient'
import { WindowPersistent } from './WindowPersistent'
import { WindowHook } from './WindowHook'

import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'

import { WindowFlash } from './WindowFlash'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowPosition } from './WindowPosition'
import { WindowOrigin } from './WindowOrigin'
import { WindowStatic } from './WindowStatic'

import { WindowOpen } from './WindowOpen'
import { WindowVerification } from './WindowVerification'
import { WindowEvent } from './WindowEvent'

import { WindowEmitOptions } from './typesBasic'
import {
  type ConstrClassObject,
  type ConstrStyles,
  type ConstrValue
} from '../../types/constructor'
import { type WindowProps } from './props'

/**
 * The base class for working with the window.<br>
 * Базовый класс для работы с окном.
 */
export class Window {
  readonly status: WindowStatus
  readonly client: WindowClient
  readonly persistent: WindowPersistent
  readonly hook: WindowHook

  readonly classes: WindowClasses
  readonly element: WindowElement

  readonly flash: WindowFlash
  readonly coordinates: WindowCoordinates
  readonly position: WindowPosition
  readonly origin: WindowOrigin
  readonly staticMode: WindowStatic

  readonly open: WindowOpen
  readonly verification: WindowVerification
  readonly event: WindowEvent

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  constructor (
    props: WindowProps,
    element: ConstrValue<HTMLDivElement>,
    callback: () => Promise<void>,
    callbackEmit: (options: WindowEmitOptions) => void,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body',
    classBodyContext: string = 'is-body-context'
  ) {
    this.status = new WindowStatus()
    this.client = new WindowClient()
    this.persistent = new WindowPersistent(props, callback)
    this.hook = new WindowHook(props)

    this.classes = new WindowClasses(
      this.persistent,
      className,
      classControl,
      classBody,
      classBodyContext
    )
    this.element = new WindowElement(
      this.classes,
      element
    )

    this.flash = new WindowFlash(
      props,
      this.classes
    )
    this.coordinates = new WindowCoordinates(
      this.classes,
      this.element
    )
    this.position = new WindowPosition(
      props,
      this.client,
      this.element,
      this.coordinates
    )
    this.origin = new WindowOrigin(
      this.client,
      this.element,
      this.position
    )
    this.staticMode = new WindowStatic(
      props,
      this.element,
      callback
    )

    this.open = new WindowOpen(
      props,
      this.status,
      this.client,
      this.hook,
      this.element,
      this.flash,
      this.coordinates,
      this.position,
      this.origin,
      async () => {
        await callback()

        this.event.toggle()
      },
      () => callbackEmit(this.getEmitOptions())
    )
    this.verification = new WindowVerification(
      props,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open,
      callback
    )
    this.event = new WindowEvent(
      props,
      this.status,
      this.client,
      this.persistent,
      this.flash,
      this.open,
      this.verification
    )

    if (props.open) {
      requestAnimationFrame(() => this.open.set(props.open).then())
    }
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses (): ConstrClassObject {
    return {
      ...this.classes.getClasses(),
      '??--staticMode': this.staticMode.is(),
      [`??--location--${this.coordinates.getLocation()}`]: true
    }
  }

  /**
   * Returns the position for displaying the element.<br>
   * Возвращает позицию для отображения элемента.
   */
  getStyles (): ConstrStyles {
    return {
      ...this.origin.getStyles(),
      ...this.position.getStyles()
    }
  }

  /**
   * Returns an object for calling the event handler.<br>
   * Возвращает объект для вызова обработчика события.
   */
  getEmitOptions (): WindowEmitOptions {
    return {
      id: this.classes.getId(),
      element: this.element.getMain() as HTMLDivElement,
      control: this.element.getControl() as HTMLElement,
      open: this.open.get()
    }
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  update (): this {
    this.staticMode.make()
    this.staticMode.makeAdaptive()

    return this
  }

  /**
   * Restores the data to its previous state.<br>
   * Восстанавливает данные в прежнее состояние.
   */
  stop (): this {
    this.event.stop()
    this.staticMode.stop()

    return this
  }
}
