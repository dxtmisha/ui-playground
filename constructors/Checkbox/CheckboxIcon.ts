import { getBind } from '../../functions/render'

import { InputValue } from '../Input/InputValue'

import { type ImageProps } from '../Image/props'
import { type CheckboxProps } from './props'

/**
 * Class for working with icons for checkbox.<br>
 * Класс для работы с иконками для checkbox.
 */
export class CheckboxIcon {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: CheckboxProps,
    protected readonly value: InputValue
  ) {
  }

  /**
   * Returns data for the icon.<br>
   * Возвращает данные для иконки.
   */
  get (): ImageProps {
    const value = this.getIcon()

    return getBind(
      this.props?.icon ?? value,
      {
        value
      }
    )
  }

  /**
   * Returns the name of the icon.<br>
   * Возвращает название иконки.
   */
  protected getIcon (): string | undefined {
    if (this.value.getBoolean()) {
      return this.props?.iconCheckbox
    }

    if (this.props?.indeterminate) {
      return this.props?.iconIndeterminate
    }

    return undefined
  }
}
