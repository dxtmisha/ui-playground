import { WindowStatusItem } from './typesBasic.ts'

/**
 * A class that changes the status of the current component. This is needed for
 * working with animation and behavior of the element when opening/closing.<br>
 * Класс, отвечающий за изменение статуса текущего компонента. Это нужно для работы
 * с анимацией и поведением элемента при открытии/закрытии.
 */
export class WindowStatus {
  protected status: WindowStatusItem = WindowStatusItem.close

  /**
   * Checks if the current status is closed (hide).<br>
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide (): boolean {
    return this.status === WindowStatusItem.hide
  }

  /**
   * Checks if the current status is open (open/flash).<br>
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen (): boolean {
    return this.status === WindowStatusItem.open || this.status === WindowStatusItem.flash
  }

  /**
   * Returns the current status.<br>
   * Возвращает текущий статус.
   */
  get (): WindowStatusItem {
    return this.status
  }

  /**
   * Change the current status.<br>
   * Изменить текущий статус.
   * @param value value /<br>значение
   */
  set (value: WindowStatusItem): this {
    this.status = value

    return this
  }

  /**
   * Translates status to preparation.<br>
   * Переводит статус в display.
   */
  toDisplay (): this {
    this.set(WindowStatusItem.display)
    return this
  }

  /**
   * Translates status to preparation.<br>
   * Переводит статус в preparation.
   */
  toPreparation (): this {
    this.set(WindowStatusItem.preparation)
    return this
  }

  /**
   * Translates status to flash.<br>
   * Переводит статус в flash.
   */
  toFlash (): this {
    this.set(WindowStatusItem.flash)
    return this
  }

  /**
   * Translates status to open.<br>
   * Переводит статус в open.
   */
  toOpen (): this {
    this.set(WindowStatusItem.open)
    return this
  }

  /**
   * Translates status to hide.<br>
   * Переводит статус в hide.
   */
  toHide (): this {
    this.set(WindowStatusItem.hide)
    return this
  }

  /**
   * Translates status to close.<br>
   * Переводит статус в close.
   */
  toClose (): this {
    this.set(WindowStatusItem.close)
    return this
  }
}
