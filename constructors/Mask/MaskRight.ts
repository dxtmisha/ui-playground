import { MaskType } from './MaskType'

import { type MaskProps } from './props'

export class MaskRight {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
  }

  /**
   * Returns whether the type is a number or mirror.<br>
   * Возвращает, является ли тип номером или зеркальным.
   */
  isEnd (): boolean {
    return this.type.isCurrencyOrNumber() ||
      this.props?.dir === 'rtl' ||
      false
  }

  /**
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight (): boolean {
    return this.props?.right || this.isEnd()
  }
}
