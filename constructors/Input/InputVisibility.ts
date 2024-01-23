/**
 * Class for working with data visualization. This is for working with the password type.<br>
 * Класс для работы с визуализацией данных. Это для работы с типом пароля.
 */
export class InputVisibility {
  protected visibility: boolean = false

  /**
   * Constructor
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly callback: () => void
  ) {
  }

  /**
   * Returns the value.<br>
   * Возвращает значение.
   */
  get (): boolean {
    return this.visibility
  }

  /**
   * Toggles the values.<br>
   * Переключает значения.
   */
  toggle (): this {
    this.visibility = !this.visibility
    this.callback()

    return this
  }
}
