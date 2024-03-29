import { CacheItem } from '../../classes/CacheItem'

import { MaskType } from './MaskType'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'
import { MaskItem } from './MaskItem'
import { MaskSpecial } from './MaskSpecial'
import { MaskValueBasic } from './MaskValueBasic'

import {
  CHAR_DELETE,
  type MaskGroup,
  type MaskGroupItem
} from './typesBasic'

/**
 * Class for transforming the entered data into the final result.<br>
 * Класс для преобразования введенных данных в конечный результат.
 */
export class MaskValue {
  protected info: CacheItem<MaskGroup>
  protected valueFinal: CacheItem<string>

  /**
   * Constructor
   * @param type
   * @param date
   * @param format
   * @param mask
   * @param special
   * @param valueBasic
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly format: MaskFormat,
    protected readonly mask: MaskItem,
    protected readonly special: MaskSpecial,
    protected readonly valueBasic: MaskValueBasic
  ) {
    this.info = new CacheItem(() => this.initInfo())
    this.valueFinal = new CacheItem(() => this.initValue())
  }

  /**
   * Checks if the mask is fully filled.<br>
   * Проверяет, полностью ли заполнена маска.
   */
  isFull (): boolean {
    for (const item of Object.values(this.getInfo())) {
      if (!item.full) {
        return false
      }
    }

    return true
  }

  /**
   * Checks if the mask is fully filled by length.<br>
   * Проверяет, полностью ли заполнена маска по длине.
   */
  isEnd (): boolean {
    for (const item of Object.values(this.getInfo())) {
      if (!item.end) {
        return false
      }
    }

    return true
  }

  /**
   * Checks if the values are fully filled in for the group.<br>
   * Проверяет, полностью ли заполнены значения по группе.
   * @param groupName group name /<br>название группы
   */
  isFullByGroup (groupName: string): boolean {
    return this.getInfoItem(groupName)?.full ?? false
  }

  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  get (): string {
    if (this.type.isCurrencyOrNumber()) {
      return this.format.getValueStandard(this.getInfo())
    }

    if (this.type.isDate()) {
      if (this.isFull()) {
        return this.date.getValueStandard(this.getInfo())
      }

      return ''
    }

    return this.valueFinal.getCache([
      ...this.valueBasic.get()
    ])
  }

  /**
   * Getting full information for global verification.<br>
   * Получение полной информации для глобальной проверки.
   */
  getForCheck (): MaskGroupItem {
    const value = this.get()

    return {
      group: 'check',
      value,
      maxLength: value.length,
      full: this.isFull(),
      end: this.isEnd(),
      chars: value.split('')
    }
  }

  /**
   * Receiving a list with information about standard values.<br>
   * Получение списка с информацией о стандартных значениях.
   */
  getInfo (): MaskGroup {
    return this.info.getCache([
      this.valueBasic.get(),
      ...this.mask.getList()
    ])
  }

  /**
   * Getting information for a specific group.<br>
   * Получение информации для конкретной группы.
   * @param groupName group name /<br>название группы
   */
  getInfoItem (groupName: string): MaskGroupItem | undefined {
    return this.getInfo()?.[groupName]
  }

  /**
   * Checks if there is a value by the key number in the basic values.<br>
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number /<br>номер ключа
   */
  protected isStandard (index: number): boolean {
    return Boolean(this.valueBasic.getChar(index))
  }

  /**
   * Adding a new character to the list, divided by groups, if it is not there,
   * and returning the property of the given group.<br>
   * Добавление нового символа в список, разделенный по группам, если его там нет,
   * и возвращение свойства данной группы.
   * @param data data for verification /<br>данные для проверки
   * @param groupName group name /<br>название группы
   */
  protected add (data: MaskGroup, groupName: string): MaskGroupItem {
    if (!(groupName in data)) {
      data[groupName] = {
        group: groupName,
        value: '',
        maxLength: 0,
        full: false,
        end: false,
        chars: []
      }
    }

    return data[groupName]
  }

  /**
   * Initialization of the list with information about standard values.<br>
   * Инициализация списка с информацией о стандартных значениях.
   */
  protected initInfo (): MaskGroup {
    const standard = this.valueBasic.get()
    const data: MaskGroup = {}

    this.mask.getList().forEach((char, index) => {
      if (this.special.isSpecial(char)) {
        const value = this.add(data, char)

        if (
          this.isStandard(index) &&
          standard[index] !== CHAR_DELETE
        ) {
          value.chars.push(standard[index])
        }

        value.maxLength++
        value.value = value.full ? value.chars.join('') : ''
        value.full = this.special.isDefault(char) || value.maxLength === value.chars.length
        value.end = value.maxLength === value.chars.length
      }
    })

    return data
  }

  protected initValue (): string {
    const basic = this.valueBasic.get().split('')
    const mask = this.mask.getList()
    let data: string = ''

    for (const index in mask) {
      if (index in basic) {
        data += basic[index]
      } else {
        const defaultValue = this.special.getDefault(mask[index])

        if (defaultValue) {
          data += defaultValue
        }
      }
    }

    return data
  }
}
