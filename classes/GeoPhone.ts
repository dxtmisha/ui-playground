import { forEach, isFilled } from '../functions/data'
import { toArray } from '../functions/object'

import { Geo } from './Geo'
import {
  type GeoPhoneValue,
  type GeoPhoneMap,
  type GeoPhoneMapInfo
} from '../types/geo'

/**
 * A class for storing and processing phone number masks.<br>
 * Класс для хранения и обработка маски телефона.
 */
export class GeoPhone {
  protected static list: GeoPhoneValue[] = []
  protected static map: Record<string, GeoPhoneMap> = {}

  /**
   * Getting an object with information about the phone code and country.<br>
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code /<br>код страны и языка
   */
  static get (code: string): GeoPhoneValue | undefined {
    return this.list.find(item => code === item.value)
  }

  /**
   * Getting information by phone.<br>
   * Получение информации по телефону.
   * @param phone phone number /<br>номер телефон
   */
  static getByPhone (phone: string): GeoPhoneMapInfo {
    let focus = this.map
    let item: GeoPhoneMap | undefined
    let value = ''

    this.toNumber(phone).forEach(number => {
      if (
        value === '' &&
        number in focus
      ) {
        item = focus[number]
        focus = focus[number].next
      } else {
        value += number
      }
    })

    return {
      item,
      phone: value
    }
  }

  /**
   * We get an array from a list of all phone numbers.<br>
   * Получаем массив из списка всех телефонных кодов.
   */
  static getList (): GeoPhoneValue[] {
    return this.list
  }

  /**
   * We get a map of a tree, sorted by its code.<br>
   * Получаем карту дерева, отсортированную по его коду.
   */
  static getMap (): Record<string, GeoPhoneMap> {
    return this.map
  }

  /**
   * Convert to phone mask.<br>
   * Преобразовать в маску телефона.
   * @param phone phone number /<br>номер телефон
   * @param masks a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toMask (
    phone: string,
    masks?: string[]
  ): string | undefined {
    if (
      isFilled(phone) &&
      Array.isArray(masks) &&
      masks.length > 0
    ) {
      const value = this.removeZero(phone)
      const length = value.length

      for (const mask of masks) {
        if (this.getUnnecessaryLength(mask) === length) {
          return this.toStandard(value, mask)
        }
      }
    }

    return undefined
  }

  /**
   * Deletes the country code from the input number.<br>
   * Удаляет код страны по входному номеру.
   * @param phone phone number /<br>номер телефон
   */
  static removeZero (phone: string): string {
    if (phone.match(/^0/)) {
      return phone.replace(/^0/, '')
    } else if (phone.match(/^89/)) {
      return phone.replace(/^8/, '')
    }

    return phone
  }

  /**
   * Deletes all characters that do not belong to the mask.<br>
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  protected static getUnnecessaryLength (mask: string): number {
    return mask.replace(/[^*]+/ig, '').length
  }

  /**
   * Creating a list for the map.<br>
   * Формирование списка для карты.
   */
  protected static makeList (): void {
    const list = forEach(Geo.getList(), (item) => {
      if (item?.phoneMask) {
        return {
          phone: (item?.phoneCode && parseInt(item.phoneCode)) || undefined,
          mask: toArray(item.phoneMask),
          value: item.country
        }
      }

      return undefined
    }) as GeoPhoneValue[]

    this.list = list.sort((a, b) => (a.phone - b.phone))
  }

  /**
   * Creating a map for search.<br>
   * Создание карты для поиска.
   */
  protected static makeMap (): void {
    this.list.forEach(item => {
      item.mask.forEach(mask => {
        let focus = this.map
        let value: GeoPhoneMap | undefined

        this.toNumber(mask).forEach(number => {
          if (!(number in focus)) {
            focus[number] = {
              items: [],
              info: undefined,
              value: undefined,
              mask: [],
              maskFull: [],
              next: {}
            }
          }

          value = focus[number]
          focus = focus[number].next
        })

        if (value) {
          if (value.value === undefined) {
            value.info = item
            value.value = item.value
          }

          value.mask.push(mask)
          value.maskFull.push(mask.replace(/\d/ig, '*'))
          value.items.push(item)
        }
      })
    })
  }

  /**
   * The method parses a string argument and returns a floating point number.<br>
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse /<br>текстовая строка
   */
  protected static toNumber (value: string): string[] {
    return value
      .replace(/\D+/ig, '')
      .split('')
  }

  /**
   * Converts the phone to a standard.<br>
   * Преобразовывает телефон в стандарт.
   * @param phone phone number /<br>номер телефон
   * @param mask a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  protected static toStandard (phone: string, mask: string): string {
    let character = 0
    return mask.replace(/\*/ig, () => phone[character++])
  }

  static {
    this.makeList()
    this.makeMap()
  }
}
