import { DesignAbstract } from '../../../classes/static/DesignAbstract.ts'

import { MaskType } from './MaskType.ts'

import { MaskRubberItem } from './MaskRubberItem.ts'
import { MaskRubberTransition } from './MaskRubberTransition.ts'

import { type MaskProps } from '../props.ts'
import { MaskDate } from './MaskDate.ts'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class Mask extends DesignAbstract<MaskProps, any> {
  protected readonly type: MaskType
  protected readonly rubberItem: MaskRubberItem
  protected readonly rubberTransition: MaskRubberTransition

  protected readonly date: MaskDate

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
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected initEvent (): void {
  }
}
