import { DesignAbstract } from '../../../classes/design/DesignAbstract.ts'

import { MaskType } from './MaskType.ts'
import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskRubberTransition } from './MaskRubberTransition.ts'
import { MaskDate } from './MaskDate.ts'

import { MaskCharacterLength } from './MaskCharacterLength.ts'

import { MaskSpecial } from './MaskSpecial.ts'
import { MaskMatch } from './MaskMatch.ts'
import { MaskPattern } from './MaskPattern.ts'
import { MaskFormat } from './MaskFormat.ts'

import { MaskRubber } from './MaskRubber.ts'

import { MaskItem } from './MaskItem.ts'

import { type MaskProps } from '../props.ts'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class Mask extends DesignAbstract<MaskProps, any> {
  protected readonly type: MaskType
  protected readonly rubberItem: MaskRubberItem
  protected readonly rubberTransition: MaskRubberTransition
  protected readonly date: MaskDate

  protected readonly characterLength: MaskCharacterLength

  protected readonly special: MaskSpecial
  protected readonly match: MaskMatch
  protected readonly pattern: MaskPattern
  protected readonly format: MaskFormat

  protected readonly rubber: MaskRubber

  protected readonly item: MaskItem

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   */
  constructor (
    protected readonly props: MaskProps,
    protected readonly callback?: (event: any) => void
  ) {
    super(props, callback)

    this.type = new MaskType(props)
    this.rubberItem = new MaskRubberItem()
    this.rubberTransition = new MaskRubberTransition()
    this.date = new MaskDate(this.type)

    this.characterLength = new MaskCharacterLength()

    this.special = new MaskSpecial(props, this.type)
    this.match = new MaskMatch(props)
    this.pattern = new MaskPattern(
      props,
      this.type,
      this.date,
      this.special
    )
    this.format = new MaskFormat(
      props,
      this.type,
      this.rubberItem
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
      this.date,
      this.characterLength,
      this.special,
      this.format
    )
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected initEvent (): void {
  }
}
