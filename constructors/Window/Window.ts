import { WindowStatus } from './WindowStatus.ts'
import { WindowClient } from './WindowClient.ts'
import { WindowPersistent } from './WindowPersistent.ts'
import { WindowHook } from './WindowHook.ts'

import { WindowClasses } from './WindowClasses.ts'
import { WindowElement } from './WindowElement.ts'

import { WindowFlash } from './WindowFlash.ts'
import { WindowCoordinates } from './WindowCoordinates.ts'
import { WindowPosition } from './WindowPosition.ts'
import { WindowOrigin } from './WindowOrigin.ts'

import { WindowOpen } from './WindowOpen.ts'
import { WindowVerification } from './WindowVerification.ts'
import { WindowEvent } from './WindowEvent.ts'

import { type WindowProps } from './props.ts'
import { WindowStatusItem } from './typesBasic.ts'
import type { ConstrStyles } from '../../types/constructor.ts'

/**
 * The base class for working with the window.<br>
 * Базовый класс для работы с окном.
 */
export class Window {
  protected readonly status: WindowStatus
  protected readonly client: WindowClient
  protected readonly persistent: WindowPersistent
  protected readonly hook: WindowHook

  protected readonly classes: WindowClasses
  protected readonly element: WindowElement

  protected readonly flash: WindowFlash
  protected readonly coordinates: WindowCoordinates
  protected readonly position: WindowPosition
  protected readonly origin: WindowOrigin

  protected readonly open: WindowOpen
  protected readonly verification: WindowVerification
  protected readonly event: WindowEvent

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param callback callback function /<br>функция обратного вызова
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   */
  constructor (
    props: WindowProps,
    element?: HTMLDivElement,
    callback?: () => void,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body'
  ) {
    this.status = new WindowStatus()
    this.client = new WindowClient()
    this.persistent = new WindowPersistent(props, callback)
    this.hook = new WindowHook(props)

    this.classes = new WindowClasses(
      this.persistent,
      className,
      classControl,
      classBody
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

    this.open = new WindowOpen(
      props,
      this.status,
      this.hook,
      this.element,
      this.flash,
      this.coordinates,
      this.position,
      this.origin,
      () => {
        callback?.()

        this.event.toggle()
      }
    )
    this.verification = new WindowVerification(
      props,
      this.persistent,
      this.classes,
      this.element,
      this.open
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
  }

  /**
   * Checks whether the element should be kept in the DOM.<br>
   * Проверяет, надо ли элемент оставить в DOM.
   */
  inDom (): boolean {
    return this.open.inDom()
  }

  /**
   * Returns the current status of the window.<br>
   * Возвращает текущий статус окна.
   */
  getStatus (): WindowStatusItem {
    return this.status.get()
  }

  /**
   * Returns an object for working with classes.<br>
   * Возвращает объект для работы с классами.
   */
  getClasses (): WindowClasses {
    return this.classes
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
   * Returns the object for working with elements.<br>
   * Возвращает объект для работы с элементами.
   */
  getElement (): WindowElement {
    return this.element
  }

  /**
   * Returns an object for working with the event.<br>
   * Возвращает объект для работы с событием.
   */
  getEvent (): WindowEvent {
    return this.event
  }
}
