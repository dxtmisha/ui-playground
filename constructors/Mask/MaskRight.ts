import { MaskType } from './MaskType.ts'

import { type MaskProps } from './props.ts'

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
   * Checks if the alignment value is right.<br>
   * Проверяет, является ли значение выравнивания справа.
   */
  isRight (): boolean {
    return this.type.isCurrencyOrNumber() ||
      this.props?.right ||
      this.props?.dir === 'rtl' ||
      false
  }
}
