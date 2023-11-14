/**
 * A class for storing the transition symbol when entering a fractional part.<br>
 * Класс для хранения символа перехода при вводе дробной части.
 */
export class MaskRubberTransition {
  protected char: string = ''

  /**
   * Checking the activity of the translation.<br>
   * Проверка на активность перевода.
   */
  is (): boolean {
    return this.char !== ''
  }

  /**
   * Checks if the current symbol is a translation.<br>
   * Проверяет, является ли текущий символ переводом.
   * @param char transition symbol /<br>символ перехода
   */
  isChar (char: string): boolean {
    return this.char !== char
  }

  /**
   * Returns the current transition symbol.<br>
   * Возвращает текущий символ перехода.
   */
  get (): string {
    return this.char
  }

  /**
   * Changes the transition symbol.<br>
   * Изменяет символ перехода.
   * @param char transition symbol /<br>символ перехода
   */
  set (char: string): this {
    this.char = char
    return this
  }

  /**
   * Updates the base state.<br>
   * Обновляет базовое состояние.
   */
  reset (): this {
    return this.set('')
  }
}
