import { anyToString } from '../../functions/string'

import { MaskType } from './MaskType'
import { MaskBuffer } from './MaskBuffer'
import { MaskFocus } from './MaskFocus'
import { MaskRubberItem } from './MaskRubberItem'
import { MaskRubberTransition } from './MaskRubberTransition'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'

import { MaskSpecial } from './MaskSpecial'
import { MaskMatch } from './MaskMatch'
import { MaskPattern } from './MaskPattern'
import { MaskRight } from './MaskRight'

import { MaskRubber } from './MaskRubber'

import { MaskItem } from './MaskItem'
import { MaskSelection } from './MaskSelection'
import { MaskCharacter } from './MaskCharacter'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskValue } from './MaskValue'

import { MaskValidation } from './MaskValidation'
import { MaskView } from './MaskView'

import { MaskEmit } from './MaskEmit'
import { MaskData } from './MaskData'
import { MaskEvent } from './MaskEvent'

import {
  type ConstrClassObject,
  type ConstrValue
} from '../../types/constructor'
import {
  type MaskElementInput,
  type MaskEventData
} from './typesBasic'
import type { MaskEmits } from './types'
import type { MaskProps } from './props'

/**
 * Base class for working with the mask.<br>
 * Базовый класс для работы с маской.
 */
export class Mask {
  readonly type: MaskType
  readonly buffer: MaskBuffer
  readonly focus: MaskFocus
  readonly rubberItem: MaskRubberItem
  readonly rubberTransition: MaskRubberTransition
  readonly characterLength: MaskCharacterLength
  readonly date: MaskDate
  readonly format: MaskFormat

  readonly special: MaskSpecial
  readonly match: MaskMatch
  readonly pattern: MaskPattern
  readonly right: MaskRight

  readonly rubber: MaskRubber

  readonly item: MaskItem
  readonly selection: MaskSelection
  readonly character: MaskCharacter
  readonly valueBasic: MaskValueBasic
  readonly value: MaskValue

  readonly validation: MaskValidation
  readonly view: MaskView

  readonly emit: MaskEmit
  readonly data: MaskData
  readonly event: MaskEvent

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
    element: ConstrValue<MaskElementInput>,
    callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void,
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

    this.special = new MaskSpecial(
      props,
      this.type,
      this.format
    )
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
      this.rubberItem,
      this.characterLength,
      this.special,
      this.rubber,
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
      this.special,
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
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.validation,
      this.emit,
      this.data
    )

    if (props?.value) {
      this.oldValue = anyToString(props?.value)
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
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses (): ConstrClassObject {
    return {
      '??--value': this.characterLength.is(),
      '??--end': this.right.isEnd()
    }
  }

  /**
   * Restores the selection location.<br>
   * Восстанавливает место выделения.
   */
  goSelection (): this {
    this.data.goSelection(false)
    return this
  }

  /**
   * Resets all values or updates to the new one.<br>
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values /<br>новые значения
   */
  reset (value?: string | number): boolean {
    const newValue = anyToString(value)

    if (this.oldValue !== newValue) {
      this.oldValue = newValue
      this.data.reset(newValue)
      this.emit.set('reset', {} as Event).go()
      return true
    }

    return false
  }
}
