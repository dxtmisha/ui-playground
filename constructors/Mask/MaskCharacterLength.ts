/**
 * A class for storing the length of input characters.<br>
 * Класс для хранения длины вводимых символов.
 */
export class MaskCharacterLength {
  protected length = 0

  /**
   * Checks if the values are filled in.<br>
   * Проверяет, заполнены ли значения.
   */
  is (): boolean {
    return this.get() > 0
  }

  /**
   * Getting the length of input symbols.<br>
   * Получение длины вводимых символов.
   */
  get () {
    return this.length
  }

  /**
   * Changing the length of input symbols.<br>
   * Изменение длины вводимых символов.
   * @param length new length /<br>новая длина
   */
  set (length: number) {
    this.length = length
    return this
  }
}
