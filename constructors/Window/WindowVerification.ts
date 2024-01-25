import { WindowPersistent } from './WindowPersistent.ts'

import { WindowClasses } from './WindowClasses.ts'
import { WindowElement } from './WindowElement.ts'

import { WindowOpen } from './WindowOpen.ts'

import type { WindowProps } from './props.ts'
import { WindowStatusControlItem } from './typesBasic.ts'
import { WindowStatic } from './WindowStatic.ts'

/**
 * Class for managing the opening and closing of the window.<br>
 * Класс для управления открытием и закрытием окна.
 */
export class WindowVerification {
  protected target?: HTMLElement
  protected focus?: HTMLElement

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param persistent object for working with the animation before turning off the window /<br>
   * объект для работы с анимацией перед выключением окна
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param staticMode class object for working with static status /<br>объект класса для работы со статическим статусом
   * @param open the class object for working with the status of closing or opening the window /<br>
   * объект класса для работы со статусом закрытия или открытия окна
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly persistent: WindowPersistent,
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement,
    protected readonly staticMode: WindowStatic,
    protected readonly open: WindowOpen,
    protected readonly callback: () => Promise<void>
  ) {
  }

  /**
   * Обновления статус открытия окно
   * @param target the selected window /<br>выбранное окно
   */
  async update (target: HTMLElement): Promise<void> {
    this.target = target
    this.focus = this.getFocus()

    if (this.staticMode.is()) {
      return
    }

    if (this.open.get()) {
      if (this.isContextmenu()) {
        await this.open
          .reset()
          .watchPosition()

        await this.callback()
      } else if (this.focus === null) {
        await this.open.toggle()
      } else if (!this.isFocus()) {
        if (this.isNotBlock()) {
          if (this.isChildren()) {
            requestAnimationFrame(async () => {
              if (
                ['open', 'flash'].indexOf(this.focus?.dataset.status || '') === -1
              ) {
                await this.open.toggle()
              }
            })
          } else {
            await this.open.toggle()
          }
        }
      } else if (this.isTarget()) {
        if (!this.persistent.on()) {
          await this.open.toggle()
        }
      } else if (
        this.isClose() ||
        this.isAutoClose() ||
        !this.isChildren()
      ) {
        await this.open.toggle()
      }
    } else if (this.isEnabled()) {
      await this.open.toggle()
    }
  }

  /**
   * Returns the element in focus.<br>
   * Возвращает элемент в фокусе.
   */
  getFocus () {
    return this.classes.findMain(this.getTarget())
  }

  protected getTarget<R extends HTMLElement> (): R {
    return (this.target ?? this.element.getMain() ?? document.body) as R
  }

  /**
   * Checks if the selected element is in focus.<br>
   * Проверяет, находится ли выбранный элемент в фокусе.
   */
  protected isFocus (): boolean {
    return this.element.getMain() === this.focus
  }

  /**
   * Checks if the target element is the window itself.<br>
   * Проверяет, является ли элемент-цель самим окном.
   */
  protected isTarget (): boolean {
    return this.element.getMain() === this.target
  }

  /**
   * Checks if the selected window is under other windows.<br>
   * Проверяет, находится ли выбранное окно под другими окнами.
   * @param target the selected window /<br>выбранное окно
   */
  protected isChildren (
    target: HTMLElement = this.getTarget()
  ): boolean {
    const focus = this.classes.findMain(target)

    return Boolean(
      focus && (
        focus.dataset.window === this.classes.getId() ||
        this.isChildren(this.classes.findControlByElement(focus))
      )
    )
  }

  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.<br>
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   */
  protected isEnabled (): boolean {
    const classControlStatic = this.classes.getSelectorStatusControl(WindowStatusControlItem.controlStatic)

    return !this.props.disabled &&
      !this.getTarget().closest(classControlStatic)
  }

  /**
   * Checks if the window needs to be closed automatically.<br>
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  protected isAutoClose (): boolean {
    const classStatic = this.classes.getSelectorStatusControl(WindowStatusControlItem.static)

    return Boolean(this.props.autoClose) &&
      !this.getTarget().closest(`${classStatic}, .${this.classes.getId()} .${this.classes.getClassControl()}`)
  }

  /**
   * Checks if the change of the opening status of the window is blocked.<br>
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  protected isNotBlock (): boolean {
    const classBlock = this.classes.getSelectorStatusControl(WindowStatusControlItem.block)

    return !this.classes.isWindow(this.getTarget()) &&
      !this.classes.findControlByElement(this.focus)?.closest(classBlock)
  }

  /**
   * Checks if it needs to be opened when the right button is pressed.<br>
   * Проверяет, нужно ли открывать при нажатии правой кнопки.
   */
  protected isContextmenu (): boolean {
    return Boolean(
      this.props.contextmenu &&
      this.getTarget().closest(this.classes.getSelectorControl())
    )
  }

  /**
   * Checks if the window can be closed.<br>
   * Проверяет, можно ли закрыть окно.
   */
  protected isClose (): boolean {
    const classClose = this.classes.getSelectorStatusControl(WindowStatusControlItem.close)
    const classStatic = this.classes.getSelectorStatusControl(WindowStatusControlItem.static)

    return Boolean(this.getTarget().closest(`${classClose}:not(${classStatic})`))
  }
}
