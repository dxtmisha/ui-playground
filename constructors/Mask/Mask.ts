import { anyToString } from '../../functions/string.ts'

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

import {
  type ConstrClassObject,
  type ConstrValue
} from '../../types/constructor.ts'
import {
  type MaskElementInput,
  type MaskEventData
} from './typesBasic.ts'
import type { MaskEmits } from './types.ts'
import type { MaskProps } from './props.ts'

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
