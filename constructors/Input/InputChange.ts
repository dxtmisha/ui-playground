/**
 * Class for determining whether the data has been changed.<br>
 * Класс для определения, были ли изменены данные.
 */
export class InputChange {
  protected change: boolean = false

  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  get (): boolean {
    return this.change
  }

  /**
   * Changes values.<br>
   * Изменяет значения.
   * @param change values for change /<br>значения для изменения
   */
  set (change: boolean): this {
    this.change = change
    return this
  }

  /**
   * Transitions to editing state.<br>
   * Переходит в состояние редактирования.
   */
  toChange (): this {
    return this.set(true)
  }

  /**
   * Restores the original value.<br>
   * Восстанавливает первоначальное значение.
   */
  reset (): this {
    return this.set(false)
  }
}
