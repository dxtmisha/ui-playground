import type { WindowProps } from './props'

/**
 * Class for managing the animation output before closing the window.<br>
 * Класс управления выводом анимации перед закрытием окна.
 */
export class WindowPersistent {
  protected persistent = false

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly callback?: () => void
  ) {
  }

  /**
   * Returns the prohibition status.<br>
   * Возвращает статус запрета.
   */
  get (): boolean {
    return this.persistent
  }

  /**
   * Request to enable animation.<br>
   * Запрос на включение анимации.
   */
  on (): boolean {
    if (this.props.persistent) {
      this.persistent = true
      this.makeCallback()

      return true
    }

    return false
  }

  /**
   * Request to disable animation.<br>
   * Запрос на выключение анимации.
   */
  disabled (): this {
    if (this.persistent) {
      this.persistent = false
      this.makeCallback()
    }

    return this
  }

  /**
   * Calls the function if the value has been changed.<br>
   * Вызывает функцию, если было изменено значение.
   */
  protected makeCallback (): this {
    if (this.callback) {
      this.callback()
    }

    return this
  }
}
