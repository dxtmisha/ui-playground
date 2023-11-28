import { isArray, isSelected, isString } from '../../../functions/data.ts'
import { getColumn } from '../../../functions/object.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskRubberTransition } from './MaskRubberTransition.ts'

import { MaskSpecial } from './MaskSpecial.ts'
import { MaskMatch } from './MaskMatch.ts'
import { MaskFormat } from './MaskFormat.ts'

import { type MaskProps } from '../props.ts'
import {
  type MaskGroup,
  type MaskSpecialItem,
  type MaskSpecialList
} from '../typesBasic.ts'

/**
 * Class for working with the rubber type.<br>
 * Класс для работы с резиновым типом.
 */
export class MaskRubber {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type
   * @param rubberItem
   * @param rubberTransition
   * @param special
   * @param match
   * @param format
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem,
    protected readonly rubberTransition: MaskRubberTransition,
    protected readonly special: MaskSpecial,
    protected readonly match: MaskMatch,
    protected readonly format: MaskFormat
  ) {
  }

  /**
   * Checks if the selected group is rubber.<br>
   * Проверяет, является ли выбранная группа резиновой.
   * @param groupName group name /<br>название группы
   */
  is (groupName: string): boolean {
    return groupName in this.getList()
  }

  /**
   * Checks if the group has a transition symbol.<br>
   * Проверяет, есть ли у группы символ перехода.
   * @param groupName group name /<br>название группы
   */
  isTransition (groupName: string): boolean {
    return this.getTransitionList().indexOf(groupName) >= 0
  }

  /**
   * Checks if the selected group has data and whether it is rubber.<br>
   * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   */
  isValue (
    data: MaskGroup,
    groupName: string
  ): boolean {
    return (groupName in data) && this.is(groupName)
  }

  /**
   * Getting properties for the rubber group.<br>
   * Получение свойства для резиновой группы.
   * @param groupName group name /<br>название группы
   */
  get (groupName: string): MaskSpecialItem | undefined {
    return this.getList()?.[groupName]
  }

  /**
   * Getting a list of rubber groups.<br>
   * Получение списка резиновых групп.
   */
  getList (): MaskSpecialList {
    return this.type.isCurrencyOrNumber() ? this.format.getRubber() : this.special.getRubberList()
  }

  /**
   * Getting a list of transition symbols.<br>
   * Получение списка символов перехода.
   */
  getTransitionList (): string[] {
    return getColumn(
      Object.values(this.getList()).filter(
        item => 'transitionChar' in item && (
          isString(item.transitionChar) ||
          isArray(item.transitionChar)
        )
      ),
      'transitionChar'
    ).flat() as string[]
  }

  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification /<br>значения для проверки
   * @param groupName group name /<br>название группы
   * @param char symbol for checking /<br>символ для проверки
   */
  update (
    data: MaskGroup,
    groupName: string,
    char: string
  ): boolean {
    const item = this.get(groupName)
    const value = data?.[groupName]

    if (item && value) {
      if (
        isSelected(char, item?.transitionChar) || (
          item?.maxLength &&
          item?.maxLength <= value?.maxLength
        )
      ) {
        this.rubberTransition.set(groupName)
        return false
      }

      if (
        value.full &&
        this.match.is(char, groupName) &&
        !this.rubberTransition.isChar(groupName)
      ) {
        this.rubberItem.add(groupName)
        this.rubberTransition.reset()
      }

      return true
    }

    return false
  }

  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name /<br>название группы
   */
  pop (groupName: string): boolean {
    return this.rubberItem.pop(groupName)
  }

  /**
   * Resets all states of all groups to the initial one.<br>
   * Сбрасывает все состояния всех групп до начального.
   */
  reset (): this {
    this.rubberItem.reset()
    this.rubberTransition.reset()

    return this
  }
}
