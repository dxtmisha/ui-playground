export class Progress {
  protected classHide: boolean = false
  protected classVisible: boolean = false

  protected timeout?: NodeJS.Timeout

  constructor (
    protected value?: number,
    protected max?: number,
    protected visible?: boolean,
    protected circular?: boolean,
    protected delay?: number
  ) {
  }

  /**
   * Checks if a specific value has been passed.<br>
   * Проверяет, передано ли конкретное значение.
   */
  isValue (): this is { value: number } {
    return typeof this.value === 'number'
  }

  /**
   * Values are converted to percentages.<br>
   * Значения преобразованы в проценты.
   */
  getValueInPercent (): string | null {
    if (this.isValue()) {
      if (this.circular) {
        return `${(100 / (this.max ?? 100) * this.value)}`
      }

      return `${100 - (100 / (this.max ?? 100) * this.value)}%`
    }

    return null
  }

  setValue (value?: number) {
    this.value = value
    return this
  }

  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected makeVisible (): this {
    clearTimeout(this.timeout)

    if (this.value) {
      this.classHide = false
      this.classVisible = false
    } else if (this.classVisible !== this.visible) {
      if (this.visible) {
        this.timeout = setTimeout(() => this.updateVisible(), this.delay ?? 0)
      } else {
        this.updateVisible()
      }
    }

    return this
  }

  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  protected updateVisible (): this {
    this.classHide = !this.visible
    this.classVisible = Boolean(this.visible)

    return this
  }
}
