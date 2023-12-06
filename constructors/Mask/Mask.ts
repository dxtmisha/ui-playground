import { toAnyToString } from '../../functions/string.ts'

import { MaskType } from './MaskType.ts'
import { MaskBuffer } from './MaskBuffer.ts'
import { MaskFocus } from './MaskFocus.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskRubberTransition } from './MaskRubberTransition.ts'
import { MaskCharacterLength } from './MaskCharacterLength.ts'
import { MaskDate } from './MaskDate.ts'
import { MaskFormat } from './MaskFormat.ts'

import { MaskSpecial } from './MaskSpecial.ts'
import { MaskMatch } from './MaskMatch.ts'
import { MaskPattern } from './MaskPattern.ts'
import { MaskRight } from './MaskRight.ts'

import { MaskRubber } from './MaskRubber.ts'

import { MaskItem } from './MaskItem.ts'
import { MaskSelection } from './MaskSelection.ts'
import { MaskCharacter } from './MaskCharacter.ts'
import { MaskValueBasic } from './MaskValueBasic.ts'
import { MaskValue } from './MaskValue.ts'

import { MaskValidation } from './MaskValidation.ts'
import { MaskView } from './MaskView.ts'

import { MaskEmit } from './MaskEmit.ts'
import { MaskData } from './MaskData.ts'
import { MaskEvent } from './MaskEvent.ts'

import { type ConstrClassObject } from '../../types/constructor.ts'
import {
  type MaskElementInput,
  type MaskEventData,
  type MaskViewList
} from './typesBasic.ts'
import { type MaskProps } from './props.ts'

/**
 * Base class for working with the mask.<br>
 * Базовый класс для работы с маской.
 */
export class Mask {
  protected readonly type: MaskType
  protected readonly buffer: MaskBuffer
  protected readonly focus: MaskFocus
  protected readonly rubberItem: MaskRubberItem
  protected readonly rubberTransition: MaskRubberTransition
  protected readonly characterLength: MaskCharacterLength
  protected readonly date: MaskDate
  protected readonly format: MaskFormat

  protected readonly special: MaskSpecial
  protected readonly match: MaskMatch
  protected readonly pattern: MaskPattern
  protected readonly right: MaskRight

  protected readonly rubber: MaskRubber

  protected readonly item: MaskItem
  protected readonly selection: MaskSelection
  protected readonly character: MaskCharacter
  protected readonly valueBasic: MaskValueBasic
  protected readonly value: MaskValue

  protected readonly validation: MaskValidation
  protected readonly view: MaskView

  protected readonly emit: MaskEmit
  protected readonly data: MaskData
  protected readonly event: MaskEvent

  protected oldValue: string = ''

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   */
  constructor (
    props: MaskProps,
    element: MaskElementInput,
    callbackEvent: (event: Event, value: MaskEventData) => void,
    classCharacter: string = 'is-character'
  ) {
    this.type = new MaskType(props)
    this.buffer = new MaskBuffer()
    this.focus = new MaskFocus(this.buffer)
    this.rubberItem = new MaskRubberItem()
    this.rubberTransition = new MaskRubberTransition()
    this.characterLength = new MaskCharacterLength()
    this.date = new MaskDate(props, this.type)
    this.format = new MaskFormat(
      props,
      this.type,
      this.rubberItem
    )

    this.special = new MaskSpecial(props, this.type)
    this.match = new MaskMatch(props, this.special)
    this.pattern = new MaskPattern(
      props,
      this.type,
      this.date,
      this.special
    )
    this.right = new MaskRight(
      props,
      this.type
    )

    this.rubber = new MaskRubber(
      props,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    )

    this.item = new MaskItem(
      props,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    )
    this.selection = new MaskSelection(
      this.special,
      this.item
    )
    this.character = new MaskCharacter(
      this.characterLength,
      this.special,
      this.item,
      this.selection
    )
    this.valueBasic = new MaskValueBasic(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    )
    this.value = new MaskValue(
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    )

    this.validation = new MaskValidation(
      this.pattern,
      this.value
    )
    this.view = new MaskView(
      props,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      classCharacter
    )

    this.emit = new MaskEmit(
      this.validation,
      callbackEvent
    )
    this.data = new MaskData(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      element
    )
    this.event = new MaskEvent(
      this.buffer,
      this.focus,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    )

    if (props?.value) {
      this.oldValue = toAnyToString(props?.value)
      this.data.reset(this.oldValue)
    }
  }

  /**
   * Receiving basic standard values.<br>
   * Получение базовых стандартных значений.
   */
  getValueBasic (): string {
    if (this.right.isRight()) {
      let data = ''

      this.view.get().forEach(item => {
        data += item.value
      })

      return data
    }

    return this.view.getInput()
  }

  /**
   * Getting the final value for export.<br>
   * Получение конечного значения для экспорта.
   */
  getValue (): string {
    return this.value.get()
  }

  /**
   * Returns an array with information for displaying on the screen.<br>
   * Возвращает массив с информацией для вывода на экран.
   */
  getView (): MaskViewList {
    return this.view.get()
  }

  /**
   * Returns an object for working with events.<br>
   * Возвращает объект для работы с событиями.
   */
  getEvent (): MaskEvent {
    return this.event
  }

  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses (): ConstrClassObject {
    return {
      '??--end': this.right.isEnd()
    }
  }

  /**
   * Changes in an element.<br>
   * Изменения в элементе.
   * @param element new element /<br>новый элемент
   */
  setElement (element: MaskElementInput): this {
    this.data.setElement(element)
    return this
  }

  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset (value?: string | number): boolean {
    const newValue = toAnyToString(value)

    if (this.oldValue !== newValue) {
      this.data.reset(newValue)
      this.emit.set('reset', {} as Event).go()
      return true
    }

    return false
  }
}
