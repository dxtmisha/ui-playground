import { CheckboxElement } from './CheckboxElement'
import { InputChange } from '../Input/InputChange'

import { InputValue } from '../Input/InputValue'
import { CheckboxIcon } from './CheckboxIcon'

import { InputCode } from '../Input/InputCode'
import { InputValidation } from '../Input/InputValidation'
import { InputEventItem } from '../Input/InputEventItem'

import { type ConstrValue } from '../../types/constructor'
import { type InputValidationItem } from '../Input/typesBasic'
import { type CheckboxEmits } from './types'
import { type CheckboxProps } from './props'

/**
 * Class for working with checkbox.<br>
 * Класс для работы с checkbox.
 */
export class Checkbox {
  readonly element: CheckboxElement
  readonly change: InputChange

  readonly value: InputValue<boolean>
  readonly icon: CheckboxIcon

  readonly code: InputCode
  readonly validation: InputValidation
  readonly event: InputEventItem

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: CheckboxProps,
    element: ConstrValue<HTMLElement | Record<string, any> | undefined>,
    callback: () => void,
    callbackEmit: (
      type: string & keyof CheckboxEmits,
      event: Event,
      value: InputValidationItem
    ) => void
  ) {
    this.element = new CheckboxElement(
      props,
      element
    )
    this.change = new InputChange()

    this.value = new InputValue<boolean>(
      props,
      this.element,
      this.change,
      callback
    )
    this.icon = new CheckboxIcon(
      props,
      this.value
    )

    this.code = new InputCode(props)
    this.validation = new InputValidation<boolean>(
      props,
      this.element,
      this.value,
      this.code
    )
    this.event = new InputEventItem(
      props,
      this.change,
      this.value,
      this.validation,
      callbackEmit
    )
  }

  /**
   * Value update.<br>
   * Обновление значения.
   */
  update (): this {
    this.value.update()
    return this
  }
}
