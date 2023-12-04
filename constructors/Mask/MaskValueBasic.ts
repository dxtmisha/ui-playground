import { CacheItem } from '../../classes/CacheItem.ts'

import { MaskRubberTransition } from './MaskRubberTransition.ts'
import { MaskItem } from './MaskItem.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskCharacter } from './MaskCharacter.ts'

/**
 * Class for getting basic input values.<br>
 * Класс для получения базовых вводимых значений.
 */
export class MaskValueBasic extends CacheItem<string> {
  constructor (
    protected readonly rubberTransition: MaskRubberTransition,
    protected readonly mask: MaskItem,
    protected readonly special: MaskSpecial,
    protected readonly character: MaskCharacter
  ) {
    super(() => this.initValue())
  }

  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  get (): string {
    return this.getCache([
      ...this.mask.getList(),
      ...this.character.get()
    ])
  }

  /**
   * Getting the character from the basic standard values by its key number.<br>
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number /<br>номер ключа
   */
  getChar (index: number): string | undefined {
    return this.get()?.[index]
  }

  /**
   * Getting the length of basic standard values.<br>
   * Получение длины базовых стандартных значений.
   */
  getLength (): number {
    return this.get().length
  }

  /**
   * Initialization of basic standard values.<br>
   * Инициализация базовых стандартных значений.
   */
  protected initValue (): string {
    const character = this.character.get()
    const value: string[] = []
    let key = 0 as number

    for (const char of this.mask.getList()) {
      if (!this.special.isSpecial(char)) {
        value.push(char)
      } else if (key in character) {
        value.push(character[key++])

        if (
          key >= character.length &&
          this.rubberTransition.is() &&
          !this.rubberTransition.isChar(char)
        ) {
          break
        }
      } else {
        break
      }
    }

    return value.join('')
  }
}
