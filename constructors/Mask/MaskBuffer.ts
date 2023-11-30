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

  // TODO
  init (key: string): boolean {
    if (this.start) {
      this.add(key)
      return false
    } else {
      this.start = true
      return true
    }
  }

  /**
   * Resets all values to the original.<br>
   * Сбрасывает все значения до исходного.
   */
  reset (): this {
    this.chars = []
    this.start = false

    return this
  }
}
