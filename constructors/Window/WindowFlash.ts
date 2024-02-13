import { WindowProps } from './props'
import { WindowClasses } from './WindowClasses'

import { WindowStatusItem } from './typesBasic'

/**
 * The class for working with the flash parameter. The flash property is
 * responsible for disabling the animation when opening the window. Also,
 * the animation is disabled when there are already open windows.<br>
 * Класс для работы с параметром flash. Свойство flash отвечает за отключение
 * анимации при открытии окна. А также отключается анимация, когда уже есть
 * открытые окна.
 */
export class WindowFlash {
  protected control: boolean = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly classes: WindowClasses
  ) {
  }

  /**
   * Is the flash property active.<br>
   * Активно ли свойство flash.
   */
  is (): boolean {
    return Boolean(this.props.flash)
  }

  /**
   * Checks whether the animation needs to be disabled.<br>
   * Проверяет, надо ли отключить анимацию.
   */
  isOpen (): boolean {
    return this.is() || this.control
  }

  /**
   * Checks whether the animation needs to be disabled when closing.<br>
   * Проверяет, надо ли отключить анимацию при закрытии.
   */
  isClose (): boolean {
    return this.is() ||
      Boolean(
        document.querySelector(`.${this.classes.getClassStatus(WindowStatusItem.hide)}`)
      )
  }

  /**
   * Change the value of the control parameter<br>
   * Изменить значение параметра control.
   * @param target the element that gets focus on click /<br>элемент, который получает фокус при клике
   */
  setControl (target?: HTMLElement): this {
    this.control = target?.closest<HTMLElement>(`.${this.classes.getClassControl()}`)?.dataset.window === this.classes.getId()
    return this
  }
}
