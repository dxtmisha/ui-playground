import { forEach, isObjectNotArray } from '../../functions/data.ts'

import { CacheItem } from '../../classes/CacheItem.ts'

import {
  type InputCheckItem,
  type InputCheckList,
  useInputCheck
} from '../Input/useInputCheck.ts'

import { MaskType } from './MaskType.ts'
import { MaskSpecial } from './MaskSpecial.ts'
import { MaskDate } from './MaskDate.ts'

import {
  type InputPatternItemOrFunction,
  type InputPatternList
} from '../Input/typesBasic.ts'
import { type MaskProps } from './props.ts'

/**
 * A class for obtaining data to verify input data by its group.<br>
 * Класс для получения данных для проверки вводимых данных по его группе.
 */
export class MaskPattern {
  protected inputs: CacheItem<InputCheckList>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   * @param date
   * @param special
   */
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly date: MaskDate,
    protected readonly special: MaskSpecial
  ) {
    this.inputs = new CacheItem(() => this.initInput())
  }

  /**
   * Checks if there is a global check of input data.<br>
   * Проверяет, есть ли глобальная проверка вводимых данных.
   */
  isCheck (): boolean {
    return Boolean(this.props?.check)
  }

  /**
   * Returns data for verification by the group name.<br>
   * Возвращает данные для проверки по названию группы.
   * @param groupName group for checking /<br>группа для проверки
   */
  get (groupName: string): InputPatternItemOrFunction | undefined {
    if (groupName === 'check') {
      return this.getCheck()
    }

    return this.getList()?.[groupName]
  }

  /**
   * Returns a list of all available properties by groups.<br>
   * Возвращает список всех доступных свойств по группам.
   */
  getList (): InputPatternList {
    const patterns = this.getByType()

    for (const index in patterns) {
      const item = this.getPattern(index)

      if (
        isObjectNotArray(item) &&
        isObjectNotArray(patterns[index])
      ) {
        Object.assign(patterns[index], index)
      }
    }

    return patterns
  }

  /**
   * Returns values for verification.<br>
   * Возвращает значения для проверки.
   * @param groupName group for checking /<br>группа для проверки
   */
  getPattern (groupName?: string): InputPatternItemOrFunction | undefined {
    return (groupName && this.special.getPattern(groupName)) ?? this.props?.pattern
  }

  /**
   * Returns global data for input verification.<br>
   * Возвращает глобальные данные для проверки вводимых данных.
   */
  getCheck (): InputPatternItemOrFunction | undefined {
    return this.props?.check
  }

  /**
   * Returns an object for validation by its group.<br>
   * Возвращает объект для проверки на валидность по его группе.
   * @param groupName group for checking /<br>группа для проверки
   */
  getInput (groupName: string = 'check'): InputCheckItem | undefined {
    return this.getInputList()?.[groupName]
  }

  /**
   * Returns a list of objects for validation, divided by group name.<br>
   * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
   */
  getInputList (): InputCheckList {
    return this.inputs.getCache([
      this.props?.pattern,
      this.props?.check
    ])
  }

  /**
   * Returns a list of basic data for verification.<br>
   * Возвращает список базовых данных для проверки.
   */
  protected getByType (): InputPatternList {
    if (this.type.isDate()) {
      return this.date.getPattern()
    }

    const patterns: InputPatternList = {}

    this.special.get().forEach(name => {
      patterns[name] = {}
    })

    return patterns
  }

  /**
   * Initializes a list of input objects for validation.<br>
   * Инициализирует список объектов ввода для проверки на валидность.
   */
  protected initInput (): InputCheckList {
    const inputList: InputCheckList = {}
    const check = this.getCheck()

    forEach(this.getList(), (pattern, group) => {
      inputList[group] = useInputCheck(pattern, group)
    })

    if (check) {
      inputList.check = useInputCheck(check)
    }

    return inputList
  }
}
