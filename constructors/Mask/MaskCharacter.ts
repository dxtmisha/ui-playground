import { MaskItem } from './MaskItem.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskSelection } from './MaskSelection.ts'
import { MaskCharacterLength } from './MaskCharacterLength.ts'

import { CHAR_DELETE } from './typesBasic.ts'

/**
 * Class for working with and storing input characters.<br>
 * Класс для работы и хранения вводимых символов.
 */
export class MaskCharacter {
  protected value: string[] = []

  /**
   * Constructor
   * @param characterLength
   * @param special
   * @param mask
   * @param selection
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly characterLength: MaskCharacterLength,
    protected readonly special: MaskSpecial,
    protected readonly mask: MaskItem,
    protected readonly selection: MaskSelection
  ) {
  }

  /**
   * Checks if the selected character was previously deleted.<br>
   * Проверяет, является ли выделенный символ ранее удаленным.
   */
  isCharDelete (): boolean {
    const key = this.selection.get()

    return key in this.value &&
      this.value[key] === CHAR_DELETE
  }

  /**
   * Getting input characters.<br>
   * Получение вводимых символов.
   */
  get (): string[] {
    return this.value
  }

  /**
   * Getting the selected mask character.<br>
   * Получение выбранного символа маски.
   */
  getFocus (): string {
    return this.mask.get(this.selection.getFocus())
  }

  /**
   * Getting the mask character by the key number of the nearest special character.<br>
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate (): string {
    return this.mask.get(this.selection.getImmediate())
  }

  /**
   * Getting the next mask character.<br>
   * Получение следующего символа маски.
   */
  getNext (): string {
    return this.mask.get(this.selection.getNext())
  }

  /**
   * Adding 1 entered character at its selection location.<br>
   * Добавление 1 введенного символа по месту его выделения.
   * @param char entered character /<br>введенный символ
   */
  add (char: string): this {
    this.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, char)
    this.selection.goNext().resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Deleting 1 entered character at its selection location.<br>
   * Удаление 1 введенного символа по месту его выделения.
   */
  pop (): this {
    const key = this.selection.get() - 1

    if (this.isSpecialNextAnother()) {
      this.value[key] = CHAR_DELETE
    } else {
      this.value.splice(key, 1)
      this.updateLength()
    }

    this.selection.goBack().resetImmediate()

    return this
  }

  /**
   * Resets the values to the initial values.<br>
   * Сбрасывает значения до начальных значений.
   */
  reset (): this {
    this.value = []
    this.selection.set(0).resetImmediate()
    this.updateLength()

    return this
  }

  /**
   * Shifts by 1 value depending on the direction of selection change.<br>
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status /<br>статус сдвига
   */
  shift (status: number = 1): this {
    this.characterLength.set(this.value.length + status)
    return this
  }

  /**
   * Checks if there is another group of special characters ahead.<br>
   * Проверяет, если впереди другая группа специальных символов.
   */
  protected isSpecialNextAnother (): boolean {
    const selection = this.selection.get() - 1
    const length = this.value.length

    if (selection <= length) {
      const info = this.mask.getInfo()
      const char = info[selection].char

      for (let i: number = selection; i < length; i++) {
        const charNext = info[i].char

        if (
          this.special.isSpecial(charNext) &&
          char !== charNext
        ) {
          return true
        }
      }
    }

    return false
  }

  /**
   * Updates of the length of entered characters.<br>
   * Обновления длины введенных символов.
   */
  protected updateLength (): this {
    this.characterLength.set(this.value.length)
    return this
  }
}
