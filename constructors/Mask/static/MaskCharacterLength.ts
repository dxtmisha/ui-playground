/**
 * Class for storing the length of input symbols for mask selection.<br>
 * Класс для хранения длины вводимых символов для подбора маски.
 */
export class MaskCharacterLength {
  protected length = 0

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
