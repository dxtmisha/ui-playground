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
import { WindowStatic } from './WindowStatic.ts'

import { WindowOpen } from './WindowOpen.ts'
import { WindowVerification } from './WindowVerification.ts'
import { WindowEvent } from './WindowEvent.ts'

import { type WindowProps } from './props.ts'
import { WindowEmitOptions, WindowStatusItem } from './typesBasic.ts'
import type { ConstrClassObject, ConstrStyles } from '../../types/constructor.ts'

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
  protected readonly staticMode: WindowStatic

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
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  constructor (
    props: WindowProps,
    element?: HTMLDivElement,
    callback?: () => Promise<void>,
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
        await callback?.()

        this.event.toggle()
      }
    )
    this.verification = new WindowVerification(
      props,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
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

    if (props.open) {
      requestAnimationFrame(() => this.open.set(props.open).then())
    }
  }

  /**
   * Checks whether the element should be kept in the DOM.<br>
   * Проверяет, надо ли элемент оставить в DOM.
   */
  inDom (): boolean {
    return this.open.inDom()
  }

  /**
   * Проверяет, активен ли статичного статус
   */
  isStaticMode (): boolean {
    return this.staticMode.is()
  }

  /**
   * Returns the current status of the window.<br>
   * Возвращает текущий статус окна.
   */
  getStatus (): WindowStatusItem {
    return this.status.get()
  }

  /**
   * Returns the current state.<br>
   * Возвращает текущее состояние.
   */
  getOpen (): boolean {
    return this.open.get()
  }

  /**
   * Returns an object for working with classes.<br>
   * Возвращает объект для работы с классами.
   */
  getClassesItem (): WindowClasses {
    return this.classes
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses (): ConstrClassObject {
    return {
      ...this.classes.getClasses(),
      '??--staticMode': this.isStaticMode(),
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
   * Returns the object for working with elements.<br>
   * Возвращает объект для работы с элементами.
   */
  getItemElement (): WindowElement {
    return this.element
  }

  /**
   * Returns an object for working with static status.<br>
   * Возвращает объект для работы со статическим статусом.
   */
  getItemStatic (): WindowStatic {
    return this.staticMode
  }

  /**
   * Returns an object for working with the event.<br>
   * Возвращает объект для работы с событием.
   */
  getItemEvent (): WindowEvent {
    return this.event
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
   * Changes the current state.<br>
   * Изменяет текущее состояние.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async setOpen (open: boolean = true): Promise<void> {
    await this.open.set(open)
  }

  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   */
  async toggle (): Promise<void> {
    await this.open.toggle()
  }
}
