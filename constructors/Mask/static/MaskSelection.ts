import { MaskSpecial } from './MaskSpecial.ts'
import { MaskItem } from './MaskItem.ts'

/**
 * Class for managing the input location and highlighting the line in input.<br>
 * Класс для управления местом ввода и выделения строки в input.
 */
export class MaskSelection {
  protected value: number = 0

  /**
   * Constructor
   * @param special class object for managing special characters /<br>
   * объект класса для управления специальными символами
   * @param mask class object for managing the mask /<br>объект класса для управления маской
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly special: MaskSpecial,
    protected readonly mask: MaskItem
  ) {
  }

  /**
   * Getting the number of the entered symbol by the selection location.<br>
   * Получение номера введенного символа по месту выделения.
   * @param selection selection location /<br>место выделения
   */
  protected getCharacter (selection: number): number {
    for (const item of this.mask.getSpecial()) {
      if (item.index >= selection) {
        return item.key
      }
    }

    return this.mask.getLength()
  }

  /**
   * Current number of the selected symbol.<br>
   * Текущий номер выделенного символа.
   */
  protected getFocus (): number {
    return this.getCharacter(this.value)
  }
}
