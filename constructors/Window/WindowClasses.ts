import { getElementId } from '../../functions/element.ts'

import { WindowStatus } from './WindowStatus.ts'
import { WindowPersistent } from './WindowPersistent.ts'

import { type ConstrClassObject } from '../../types/constructor.ts'
import { WindowStatusControlItem, WindowStatusItem } from './typesBasic.ts'

/**
 * Class for working with class names.<br>
 * Класс для работы с названиями классов.
 */
export class WindowClasses {
  /**
   * Identification of the current window. Used to search for the current component and its control.<br>
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
   */
  protected readonly id = `window--${getElementId()}`

  /**
   * Constructor
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly status: WindowStatus,
    protected readonly persistent: WindowPersistent,
    protected readonly className: string = 'is-window',
    protected readonly classControl: string = 'is-control',
    protected readonly classBody: string = 'is-body'
  ) {
  }

  /**
   * Проверяет, является ли выбранный элемент окном
   * @param target selected item /<br>выбранный элемент
   */
  isWindow (target?: HTMLElement): boolean {
    return Boolean(
      target &&
      target.classList.contains(this.getClassMain())
    )
  }

  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId (): string {
    return this.id
  }

  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain (): string {
    return this.className
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return `${this.classControl} ${this.getId()}`
  }

  /**
   * Returns the full name of the class for the status.<br>
   * Возвращает полное название класса для статуса.
   * @param status названия статуса
   */
  getClassStatus (status: WindowStatusItem): string {
    return `${this.className}--status--${status}`
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses (): ConstrClassObject {
    return {
      [this.getId()]: true,
      [this.getClassStatus(this.status.get())]: true,
      '??--persistent': this.persistent.get()
    }
  }

  /**
   * Returns the name of the class for status control.<br>
   * Возвращает название класса для контроля статуса.
   * @param name the name of the class for control /<br>название класса для контроля
   */
  getSelectorStatusControl (name: WindowStatusControlItem): string {
    return `.${this.getClassMain()}--${name}`
  }

  /**
   * Search and return the window element at the selected item.<br>
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item /<br>выбранный элемент
   */
  findMain<T extends HTMLElement> (target: HTMLElement): T | undefined {
    return target?.closest<T>(`.${this.className}`) ?? undefined
  }

  /**
   * Search and return of the control element of the current component.<br>
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl (): HTMLElement | undefined {
    return document.querySelector<HTMLElement>(`.${this.classControl}.${this.id}`) || undefined
  }

  /**
   * Find the control at the selected window.<br>
   * Найди элемент управления у выбранного окна.
   * @param element window element /<br>элемент окна
   */
  findControlByElement (element?: HTMLElement): HTMLElement | undefined {
    if (element) {
      return document.querySelector<HTMLElement>(`.${this.getClassControl()}.${element.dataset.window}`) ?? undefined
    }

    return undefined
  }

  /**
   * Search and return of the window body element for the current component.<br>
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody (): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.classBody}`) || undefined
  }
}
