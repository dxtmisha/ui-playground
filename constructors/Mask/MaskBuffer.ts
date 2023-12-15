/**
 * Class for temporary storage of entered symbol to prevent losing input place during fast input.<br>
 * Класс для временного хранения вводимого символа, чтобы не потерять место ввода при быстром вводе.
 */
export class MaskBuffer {
  protected chars: string[] = []
  protected start: boolean = false

  /**
   * Checks for records in the buffer.
   * Проверяет наличие записей в буфере.
   */
  is () {
    return this.chars.length > 0
  }

  /**
   * Gets a list of all records in the buffer.<br>
   * Получает список всех записей в буфере.
   */
  get (): string[] {
    return this.chars
  }

  /**
   * Inserts a new input symbol into the buffer.<br>
   * Вставляет новый символ ввода в буфер.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  add (key: string): this {
    this.chars.push(key)
    return this
  }

  /**
   * Starts buffering data if data is being processed.<br>
   * Начинает буферизировать данные, если в обработке идут данные.
   * @param key symbol that needs to be added /<br>символ, который необходимо добавить
   */
  go (key: string): boolean {
    if (this.start) {
      this.add(key)
      return false
    }

    this.goStart()
    return true
  }

  /**
   * Starts buffering data
   * Начинает буферизировать данные.
   */
  goStart (): this {
    this.start = true
    return this
  }

  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset (): this {
    this.resetChars()
    this.start = false

    return this
  }

  /**
   * Resets the saved values.<br>
   * Сбрасывает сохраненные значения.
   */
  resetChars (): this {
    this.chars = []
    return this
  }
}
