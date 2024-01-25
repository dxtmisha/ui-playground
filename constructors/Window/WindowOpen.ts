import { frame } from '../../functions/frame.ts'

import { WindowStatus } from './WindowStatus.ts'
import { WindowClient } from './WindowClient.ts'
import { WindowHook } from './WindowHook.ts'

import { WindowElement } from './WindowElement.ts'

import { WindowFlash } from './WindowFlash.ts'
import { WindowCoordinates } from './WindowCoordinates.ts'
import { WindowPosition } from './WindowPosition.ts'
import { WindowOrigin } from './WindowOrigin.ts'

import { type WindowProps } from './props.ts'

/**
 * Class for managing the status of an open window.<br>
 * Класс для управления статусом открытого окна.
 */
export class WindowOpen {
  protected open: boolean = false
  protected first: boolean = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param hook object for working with hooks /<br>объект для работы с хуками
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param flash class object for working with fast window opening /<br>объект класса для работы с быстрым открытием окна
   * @param coordinates object for working with coordinates /<br>объект для работы с координатами
   * @param position object for working with the position of the element /<br>объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening <br>объект для работы в начальной позиции при открытии
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly status: WindowStatus,
    protected readonly client: WindowClient,
    protected readonly hook: WindowHook,
    protected readonly element: WindowElement,
    protected readonly flash: WindowFlash,
    protected readonly coordinates: WindowCoordinates,
    protected readonly position: WindowPosition,
    protected readonly origin: WindowOrigin,
    protected readonly callback: () => Promise<void>,
    protected readonly callbackEmit: () => void
  ) {
  }

  /**
   * Checks whether the element should be kept in the DOM.<br>
   * Проверяет, надо ли элемент оставить в DOM.
   */
  inDom (): boolean {
    return this.open ||
      this.props.staticMode ||
      (
        this.first &&
        Boolean(this.props.inDom)
      )
  }

  /**
   * Returns the current state.<br>
   * Возвращает текущее состояние.
   */
  get (): boolean {
    return this.open
  }

  /**
   * Changes the current state.<br>
   * Изменяет текущее состояние.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async set (open: boolean = true): Promise<this> {
    if (this.open !== open) {
      await this.toggle()
    }

    return this
  }

  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   */
  async toggle (): Promise<this> {
    if (await this.hook.beforeOpening(this.open)) {
      const toOpen = !this.open

      if (toOpen) {
        this.reset()
        this.status.toDisplay()

        await this.setOpenAndEmit(toOpen)

        requestAnimationFrame(async () => {
          await this.hook.preparation(this.open)
          await this.watchPosition()
          await this.callback()

          requestAnimationFrame(async () => {
            this.position.updateScroll()
            this.status.toPreparation()

            await this.callback()

            requestAnimationFrame(async () => {
              await this.hook.opening(this.open)

              if (this.flash.isClose()) {
                this.status.toFlash()
              } else {
                this.status.toOpen()
              }

              await this.callback()
            })
          })
        })
      } else {
        this.client.reset()

        if (this.flash.isOpen()) {
          this.toClose()
        } else {
          this.status.toHide()
          await this.callback()
        }
      }
    }

    return this
  }

  /**
   * The method closes the window.<br>
   * Метод закрывает окно.
   */
  close (): void {
    if (this.status.isHide()) {
      this.toClose()
    }
  }

  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset (): this {
    this.coordinates.reset()
    this.origin.reset()

    return this
  }

  /**
   * The method updates the current position.<br>
   * Метод обновляет текущее положение.
   */
  async watchPosition (): Promise<void> {
    if (
      this.open &&
      this.element.isMain()
    ) {
      this.position.update()
      this.origin.update()

      this.watchCoordinates()
    } else {
      this.reset()
    }
  }

  /**
   * Changes values and triggers events.<br>
   * Изменяет значения и вызывает события.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async setOpenAndEmit (open: boolean): Promise<this> {
    this.open = open

    if (open && !this.first) {
      this.first = true
    }

    await this.callback()
    this.callbackEmit()

    return this
  }

  /**
   * Changing the location of the menu window.<br>
   * Изменение расположения окна меню.
   */
  protected watchCoordinates (): this {
    frame(
      () => {
        const element = this.element.getMain()

        if (
          element &&
          getComputedStyle(element).content === '"--MENU--"' &&
          this.position.update()
        ) {
          this.callback().then()
        }
      },
      () => this.open && !this.status.isHide()
    )

    return this
  }

  /**
   * Transition to the closing state.<br>
   * Переход в состояние закрытия.
   */
  protected toClose (): void {
    setTimeout(() => this.setOpenAndEmit(false).then(), 48)

    this.status.toClose()
    this.hook.opening(this.open).then()
  }
}
