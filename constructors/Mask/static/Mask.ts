import { DesignAbstract } from '../../../classes/design/DesignAbstract.ts'

import { MaskType } from '../MaskType.ts'
import { MaskBuffer } from '../MaskBuffer.ts'
import { MaskFocus } from '../MaskFocus.ts'
import { MaskRubberItem } from '../MaskRubberItem.ts'
import { MaskRubberTransition } from '../MaskRubberTransition.ts'
import { MaskCharacterLength } from '../MaskCharacterLength.ts'
import { MaskDate } from '../MaskDate.ts'
import { MaskFormat } from '../MaskFormat.ts'

import { MaskSpecial } from '../MaskSpecial.ts'
import { MaskMatch } from '../MaskMatch.ts'
import { MaskPattern } from '../MaskPattern.ts'
import { MaskRubber } from '../MaskRubber.ts'

import { MaskItem } from '../MaskItem.ts'
import { MaskSelection } from '../MaskSelection.ts'
import { MaskCharacter } from '../MaskCharacter.ts'
import { MaskValueBasic } from '../MaskValueBasic.ts'
import { MaskValue } from '../MaskValue.ts'

import { MaskValidation } from '../MaskValidation.ts'
import { MaskView } from '../MaskView.ts'

import { MaskData } from '../MaskData.ts'

import { type MaskProps } from '../props.ts'
import { MaskElement } from '../typesBasic.ts'

/**
 * Base class for working with the mask.<br>
 * Базовый класс для работы с маской.
 */
export class Mask extends DesignAbstract<MaskProps, any> {
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

  protected readonly rubber: MaskRubber

  protected readonly item: MaskItem
  protected readonly selection: MaskSelection
  protected readonly character: MaskCharacter
  protected readonly valueBasic: MaskValueBasic
  protected readonly value: MaskValue

  protected readonly validation: MaskValidation
  protected readonly view: MaskView

  protected readonly data: MaskData

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element element for managing the selection location /<br>элемент для управления местом выделения
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callback callback function /<br>функция обратного вызова
   */
  constructor (
    protected readonly props: MaskProps,
    element?: MaskElement,
    protected readonly classCharacter: string = 'is-character',
    protected readonly callback?: (event: any) => void
  ) {
    super(props, callback)

    this.type = new MaskType(props)
    this.buffer = new MaskBuffer()
    this.focus = new MaskFocus(this.buffer)
    this.rubberItem = new MaskRubberItem()
    this.rubberTransition = new MaskRubberTransition()
    this.characterLength = new MaskCharacterLength()
    this.date = new MaskDate(this.type)
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
      element
    )
  }

  /**
   * Changes in an element.<br>
   * Изменения в элементе.
   * @param element new element /<br>новый элемент
   */
  setElement (element: MaskElement): this {
    this.data.setElement(element)
    return this
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected initEvent (): void {
  }
}
