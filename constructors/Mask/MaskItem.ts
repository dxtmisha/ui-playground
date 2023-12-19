import { isArray } from '../../functions/data.ts'
import { getMaxLength } from '../../functions/object.ts'

import { CacheItem } from '../../classes/CacheItem.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskDate } from './MaskDate.ts'
import { MaskCharacterLength } from './MaskCharacterLength.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskFormat } from './MaskFormat.ts'

import { type MaskProps } from './props.ts'
import {
  type MaskList,
  type MaskSpecialInfo
} from './typesBasic.ts'

/**
 * Class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskItem extends CacheItem<string[]> {
  protected info: CacheItem<MaskSpecialInfo[]>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param rubberItem
   * @param characterLength
   * @param date
   * @param format
   * @param special
   */
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat,
    protected readonly special: MaskSpecial
  ) {
    super(() => this.initMask())

    this.info = new CacheItem(() => this.initInfo())
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
   * Returns an array with information about the location of all special characters.<br>
   * Возвращает массив с информацией о расположении всех специальных символов.
   */
  getInfo (): MaskSpecialInfo[] {
    return this.info.getCache(this.getComparison())
  }

  /**
   * Returns information about the selection location.<br>
   * Возвращает информацию о месте выделения.
   * @param selection
   */
  getInfoBySelection (selection: number): MaskSpecialInfo {
    const info = this.getInfo()

    return info.find(item => item.key >= selection) ?? info[info.length - 1]
  }

  /**
   * Returns the current mask.<br>
   * Возвращает текущую маску.
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
   * Returns the length of the active mask.<br>
   * Возвращает длину активной маски.
   */
  getLength (): number {
    return this.getList().length
  }

  /**
   * Returns the length of the mask or the maximum length of masks if there are several.<br>
   * Возвращает длину маски или максимальную длину масок, если их несколько.
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
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial (): number {
    return this.getInfo().length
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
   * Returns data for cache to check for changes.<br>
   * Возвращает данные для кэша для проверки на изменения.
   */
  getComparison (): any[] {
    return [
      this.characterLength.get(),
      ...this.rubberItem.getCode(),
      this.props?.mask,
      this.props?.special,
      this.props?.fraction,
      this.props?.currency,
      this.props?.type,
      this.props?.language
    ]
  }

  /**
   * Returns a list of masks.<br>
   * Возвращает список масок.
   */
  protected getMask (): MaskList {
    return this.props?.mask ?? ''
  }

  /**
   * Returns the active mask.<br>
   * Возвращает активную маску.
   */
  protected getMaskActive (): string {
    const mask = this.getMask()

    if (isArray(mask)) {
      return mask.find(mask => this.getSpecialLength(mask) >= this.characterLength.get()) || mask?.[mask.length - 1] || ''
    }

    return mask
  }

  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   */
  protected getBasic (): string[] {
    return this.rubberItem.expandMask(this.getMaskActive()).split('')
  }

  /**
   * Returns the number of special characters in the current mask.<br>
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask /<br>выбранная маска
   */
  protected getSpecialLength (mask: string): number {
    return mask
      .split('')
      .filter(char => this.special.isSpecial(char))
      .length
  }

  /**
   * Generates a mask by type.<br>
   * Генерирует маску по типу.
   */
  protected initMask (): string[] {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.getMask()
    }

    if (this.type.isDate()) {
      return this.date.getMask()
    }

    return this.getBasic()
  }

  /**
   * Generates information about special characters.<br>
   * Генерирует информацию о специальных символах.
   */
  protected initInfo (): MaskSpecialInfo[] {
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
  }
}
