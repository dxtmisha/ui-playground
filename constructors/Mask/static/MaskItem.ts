import { isArray } from '../../../functions/data.ts'
import { getMaxLength } from '../../../functions/object.ts'

import { CacheItem } from '../../../classes/CacheItem.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskDate } from './MaskDate.ts'
import { MaskCharacterLength } from './MaskCharacterLength.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskFormat } from './MaskFormat.ts'

import { type MaskProps } from '../props.ts'
import {
  type MaskList,
  type MaskSpecialInfo
} from '../typesBasic.ts'

/**
 * Class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskItem extends CacheItem<string[]> {
  protected info: CacheItem<MaskSpecialInfo[]>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type object of the class for obtaining the mask type /<br>объект класса для получения типа маски
   * @param rubberItem class object for managing rubber numbers /<br>
   * объект класса для управления резиновыми номерами
   * @param date class object for managing data of type date /<br>
   * объект класса для управления данными типа дата
   * @param characterLength number of input symbols /<br>количество вводимых символов
   * @param special class object for managing special characters /<br>
   * объект класса для управления специальными символами
   * @param format class object for managing number formatting /<br>
   * объект класса для управления форматированием числа
   */
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem,
    protected readonly date: MaskDate,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly special: MaskSpecial,
    protected readonly format: MaskFormat
  ) {
    super(() => {
      if (this.type.isCurrencyOrNumber()) {
        return this.format.getMask()
      }

      if (this.type.isDate()) {
        return this.date.getMask()
      }

      return this.getBasic()
    })

    this.info = new CacheItem(() => {
      const data: MaskSpecialInfo[] = []
      let index = 0

      this.getList().forEach((char, key) => {
        if (this.special.isSpecial(char)) {
          data.push({
            index,
            key,
            char
          })

          index++
        }
      })

      return data
    })
  }

  /**
   * Returns the mask symbol by its index.<br>
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol’s location /<br>индекс расположения символа
   */
  get (index: number): string {
    return this.getList()?.[index] ?? ''
  }

  /**
   * Returns the current mask for output.<br>
   * Возвращает текущую маску для вывода.
   */
  getList (): string[] {
    return this.getCache(this.getComparison())
  }

  /**
   * Returns the location number for replacement by its input symbol.<br>
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol /<br>символ ввода
   * @param selection minimum index for search <br>минимальный индекс для поиска
   */
  getByChar (
    char: string,
    selection: number = -1
  ): number {
    let data = selection

    this.getList().forEach((item, index) => {
      if (item === char && index >= selection) {
        data = index
      }
    })

    return data
  }

  /**
   * Gets an array with information about the location of all special characters.<br>
   * Получает массив с информацией о расположении всех специальных символов.
   */
  getSpecial (): MaskSpecialInfo[] {
    return this.info.getCache(this.getComparison())
  }

  /**
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength (): number {
    return this.getList().length
  }

  /**
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial (): number {
    return this.getSpecial().length
  }

  /**
   * Gets the length of the mask or the maximum length of the masks if there are many.<br>
   * Получает длину маски или максимальную длину у масок, если их много.
   */
  getMaxLength (): number {
    const mask = this.getMask()

    if (isArray(mask)) {
      return getMaxLength(mask)
    } else {
      return this.getList().length
    }
  }

  /**
   * Returns how many special characters were highlighted.<br>
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection /<br>начало выделения
   * @param end end of selection /<br>конец выделения
   */
  getQuantity (
    start: number,
    end: number
  ): number {
    if (start === end) {
      return 1
    }

    let quantity = 0

    for (let i = start; i < end; i++) {
      if (this.special.isSpecial(this.get(i))) {
        quantity++
      }
    }

    return quantity
  }

  /**
   * Getting a list of masks.<br>
   * Получение списка масок.
   */
  protected getMask (): MaskList {
    return this.props?.mask ?? ''
  }

  /**
   * Getting the active mask.<br>
   * Получение активной маски.
   */
  protected getMaskActive (): string {
    const mask = this.getMask()

    if (isArray(mask)) {
      return mask.find(mask => this.getSpecialLength(mask) >= this.characterLength.get()) || mask?.[mask.length - 1] || ''
    }

    return mask
  }

  /**
   * Calculates the number of special symbols in the current mask.<br>
   * Вычисляет количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  protected getSpecialLength (mask: string): number {
    return mask
      .split('')
      .filter(char => this.special.isSpecial(char))
      .length
  }

  /**
   * Basic processing for custom masks.<br>
   * Базовая обработка для пользовательских масок.
   */
  protected getBasic (): string[] {
    return this.rubberItem.expandMask(this.getMaskActive()).split('')
  }

  /**
   * Returns data for checking for changes.<br>
   * Возвращает данные для проверки на изменения.
   */
  protected getComparison (): any[] {
    return [
      this.characterLength.get(),
      this.props?.mask,
      this.props?.special,
      this.props?.fraction,
      this.props?.currency,
      this.props?.type,
      this.props?.language
    ]
  }
}
