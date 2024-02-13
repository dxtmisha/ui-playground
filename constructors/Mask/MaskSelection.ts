import { MaskSpecial } from './MaskSpecial'
import { MaskItem } from './MaskItem'

/**
 * Class for working with the character input location.<br>
 * Класс для работы с местом ввода символа.
 */
export class MaskSelection {
  protected value: number = 0
  protected immediate: number = 0
  protected shift: boolean = false

  /**
   * Constructor
   * @param special
   * @param mask
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly special: MaskSpecial,
    protected readonly mask: MaskItem
  ) {
  }

  /**
   * Getting the selection key number.<br>
   * Получение номера ключа выделения.
   */
  get (): number {
    return this.value
  }

  /**
   * Returns the selection number for the first element that is a special symbol.
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst (): number {
    return this.mask.getInfo()?.[0]?.key
  }

  /**
   * Getting the current key of the selected character.<br>
   * Получение текущего ключа выделенного символа.
   */
  getFocus (): number {
    return this.getCharacter(this.value)
  }

  /**
   * Getting the next key of the selected character.<br>
   * Получение следующего ключа выделенного символа.
   */
  getNext (): number {
    return this.getCharacter(this.value + 1)
  }

  /**
   * Getting the previous key of the selected symbol.<br>
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious (): number {
    return this.getCharacter(this.value - 1)
  }

  /**
   * Getting the key number of the nearest special character.<br>
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate (): number {
    return this.getCharacter(this.immediate)
  }

  /**
   * Getting the number of the key shifted to the left direction.
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift (): number {
    if (this.shift) {
      return this.value > 0 ? (this.getCharacter(this.value - 1) + 1) : 0
    }

    return this.getFocus()
  }

  /**
   * Changing the selection key number.<br>
   * Изменение номера ключа выделения.
   * @param selection selection number /<br>номер выделения
   */
  set (selection: number): this {
    this.value = selection
    return this
  }

  /**
   * Changes the selection key number according to the mask structure.<br>
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number /<br>номер выделения
   * @param focus is the element in focus /<br>элемент в фокусе ли
   */
  setByMask (selection: number, focus = true): this {
    if (focus) {
      let value: number | undefined
      let immediate: number | undefined

      this.mask.getInfo().forEach(item => {
        if (value === undefined && item.key >= selection) {
          value = item.index
        }

        if (item.key <= selection) {
          immediate = item.index
        }
      })

      this.set(value !== undefined ? value : this.mask.getLengthBySpecial())
      this.setImmediate(immediate !== undefined ? immediate : this.mask.getLengthBySpecial())
    }

    return this
  }

  /**
   * Changing the selection key for the nearest special character.<br>
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number /<br>номер ключа выделения
   */
  setImmediate (immediate: number): this {
    this.immediate = immediate
    return this
  }

  /**
   * Turning shift on or off.<br>
   * Включение или отключение сдвига.
   * @param shift value for shift /<br>значение для сдвига
   */
  setShift (shift: boolean): this {
    this.shift = shift
    return this
  }

  /**
   * Resets the selection key for the nearest special character to the selection location.<br>
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate (): this {
    this.immediate = this.value <= 0 ? 0 : this.value - 1
    return this
  }

  /**
   * Move the selection location back by 1 step.
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack (): this {
    if (this.value > 0) {
      this.value--
    }

    return this
  }

  /**
   * Move the selection location forward by 1 step.
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext (): this {
    if (this.value <= this.mask.getLength()) {
      this.value++
    }

    return this
  }

  /**
   * Getting the key number at the selection location.<br>
   * Получение номера ключа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  protected getCharacter (selection: number): number {
    for (const item of this.mask.getInfo()) {
      if (item.index >= selection) {
        return item.key
      }
    }

    return this.mask.getLength()
  }
}
