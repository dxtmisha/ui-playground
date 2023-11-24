import { isArray } from '../../../functions/data.ts'
import { getMaxLength } from '../../../functions/object.ts'

import { DesignChangedResults } from '../../../classes/static/DesignChangedResults.ts'

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
export class MaskItem {
  protected changed: DesignChangedResults<MaskProps>

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
    this.changed = new DesignChangedResults(props, [
      'mask',
      'special',
      'fraction',
      'currency',
      'type',
      'language'
    ])
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
    return this.changed.get(
      'get',
      () => {
        if (this.type.isCurrencyOrNumber()) {
          return this.format.getMask()
        }

        if (this.type.isDate()) {
          return this.date.getMask()
        }

        return this.getBasic()
      },
      {
        characterLength: this.characterLength.get()
      }
    )
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
   * Returns the length of only special characters.<br>
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial (): number {
    return this.getSpecialInfo().length
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
   * Gets an array with information about the location of all special characters.<br>
   * Получает массив с информацией о расположении всех специальных символов.
   */
  protected getSpecialInfo (): MaskSpecialInfo[] {
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
}
