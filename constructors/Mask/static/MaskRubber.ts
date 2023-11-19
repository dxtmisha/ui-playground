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
 * Class for obtaining rubber type data.<br>
 * Класс для получения данных резинового типа.
 */
export class MaskRubber {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param type object of the class for obtaining the mask type /<br>
   * объект класса для получения типа маски
   * @param rubberItem class object for managing rubber numbers /<br>
   * объект класса для управления резиновыми номерами
   * @param rubberTransition class object for managing delimiter characters /<br>
   * объект класса для управления символами-разделителями
   * @param special class object for defining a special character /<br>
   * объект класса для определения специального символа
   * @param match class object for determining the input number /<br>
   * объект класса для определения вводимого числа
   * @param format class object for managing number formatting /<br>
   * объект класса для управления форматированием числа
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
   * Checks if the selected character is a rubber type.<br>
   * Проверяет, является ли выбранный символ резиновым типом.
   * @param index checked character code /<br>проверяемый код символа
   */
  is (index: string): boolean {
    return index in this.getList()
  }

  /**
   * Checks if the symbol is a transition.<br>
   * Проверяет, является ли символ переходом.
   * @param index checked character code /<br>проверяемый код символа
   */
  isTransition (index: string): boolean {
    return this.getTransitionList().indexOf(index) !== -1
  }

  /**
   * Checks if the selected symbol is present.<br>
   * Проверяет, есть ли данный выбранный символ.
   * @param data values for the date /<br>значения для даты
   * @param index checked character code /<br>проверяемый код символа
   */
  isValue (
    data: MaskGroup,
    index: string
  ): boolean {
    return (index in data) && this.is(index)
  }

  /**
   * Getting a property by its symbol.<br>
   * Получение свойства по его символу.
   * @param index checked character code /<br>проверяемый код символа
   */
  get (index: string): MaskSpecialItem | undefined {
    return this.getList()?.[index]
  }

  /**
   * Getting a list of properties for rubber labels.<br>
   * Получение списка свойств для резиновых меток.
   */
  getList (): MaskSpecialList {
    return this.type.isCurrencyOrNumber() ? this.format.getRubber() : this.special.getRubber()
  }

  /**
   * Getting a list of available transition symbols.<br>
   * Получение списка доступных символов переходов.
   */
  getTransitionList (): string[] {
    return getColumn(
      Object.values(this.getList())
        .filter(item => 'transitionChar' in item && (isString(item.transitionChar) || isArray(item.transitionChar))),
      'transitionChar'
    ).flat() as string[]
  }

  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.<br>
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data data for verification /<br>данные для проверки
   * @param index group name for verification /<br>название группы для проверки
   * @param char water symbol for verification /<br>символ воды для проверки
   */
  update (
    data: MaskGroup,
    index: string,
    char: string
  ): boolean {
    const item = this.get(index)
    const value = data?.[index]

    if (item && value) {
      if (
        isSelected(char, item?.transitionChar) || (
          item?.maxLength &&
          item?.maxLength <= value?.maxLength
        )
      ) {
        this.rubberTransition.set(index)
        return false
      }

      if (
        value.full &&
        this.match.is(char, index) &&
        !this.rubberTransition.isChar(index)
      ) {
        this.rubberItem.add(index)
        this.rubberTransition.reset()
      }

      return true
    }

    return false
  }

  /**
   * Reduces the length of the entered symbol by its group.<br>
   * Уменьшает длину вводимого символа по его группе.
   * @param index group name for verification /<br>название группы для проверки
   */
  pop (index: string): boolean {
    return this.rubberItem.pop(index)
  }

  /**
   * Resets all states in all groups.<br>
   * Сбрасывает все состояния у всех групп.
   */
  reset (): this {
    this.rubberItem.reset()
    this.rubberTransition.reset()

    return this
  }
}
