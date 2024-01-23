import { InputPattern } from './InputPattern.ts'

import { InputElement } from './InputElement.ts'
import { InputVisibility } from './InputVisibility.ts'
import { InputChange } from './InputChange.ts'

import { InputType } from './InputType.ts'
import { InputValue } from './InputValue.ts'

import { InputArrow } from './InputArrow.ts'
import { InputMatch } from './InputMatch.ts'

import { InputCode } from './InputCode.ts'
import { InputValidation } from './InputValidation.ts'

import { type InputElementItem } from './typesBasic.ts'
import { type InputProps } from './props.ts'

export class Input<V = string> {
  protected readonly visibility: InputVisibility
  protected readonly type: InputType
  protected readonly pattern: InputPattern

  protected readonly element: InputElement
  protected readonly change: InputChange

  protected readonly value: InputValue<V>

  protected readonly arrow: InputArrow
  protected readonly match: InputMatch

  protected readonly code: InputCode
  protected readonly validation: InputValidation

  constructor (
    props: InputProps<V>,
    element: HTMLElement | Record<string, any> | undefined,
    callback: () => void
  ) {
    this.visibility = new InputVisibility(callback)
    this.type = new InputType(
      props,
      this.visibility
    )
    this.pattern = new InputPattern(
      props,
      this.type
    )

    this.element = new InputElement(
      props,
      this.type,
      this.pattern,
      element,
      callback
    )
    this.change = new InputChange()

    this.value = new InputValue<V>(
      props,
      this.element,
      callback
    )

    this.arrow = new InputArrow(props, this.value)
    this.match = new InputMatch(
      props,
      this.element,
      this.value
    )

    this.code = new InputCode(props)
    this.validation = new InputValidation<V>(
      props,
      this.element,
      this.value,
      this.match,
      this.code
    )
  }

  /**
   * Changes the input element.<br>
   * Изменяет элемент ввода.
   * @param element element for change /<br>элемент для изменения
   */
  set (element: InputElementItem): this {
    this.element.set(element)
    return this
  }
}
