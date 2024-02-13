import { DataStorage } from './DataStorage'

const STORAGE_NAME_BLOCK = 'cookie-block'

/**
 * Class for changing cookie access status.<br>
 * Класс для изменения статуса доступа к куки.
 */
export class CookieBlock {
  static storage = new DataStorage<boolean>(STORAGE_NAME_BLOCK)

  /**
   * Obtaining status.<br>
   * Получение статуса.
   */
  static get (): boolean {
    return this.storage.get() ?? false
  }

  /**
   * Changing status.<br>
   * Изменение статуса.
   * @param value value to be changed /<br>значение, на которое будет изменен
   */
  static set (value: boolean): void {
    this.storage.set(value)
  }
}
