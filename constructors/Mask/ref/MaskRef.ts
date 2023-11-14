import { Mask } from '../static/Mask.ts'

import { type MaskProps } from '../props.ts'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskRef {
  protected mask = Mask

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   */
  constructor (
    props: MaskProps
  ) {
    this.mask = new Mask(props, () => {

    })
  }
}
