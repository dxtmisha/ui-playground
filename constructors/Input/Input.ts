import { InputElement } from './InputElement.ts'
import { InputVisibility } from './InputVisibility.ts'
import { InputChange } from './InputChange.ts'

import { InputType } from './InputType.ts'
import { InputValue } from './InputValue.ts'

import { InputArrow } from './InputArrow.ts'
import { InputMatch } from './InputMatch.ts'

import { InputCode } from './InputCode.ts'

import { type InputElementItem } from './typesBasic.ts'
import { type InputProps } from './props.ts'

export class Input<V = string> {
  protected readonly element: InputElement
  protected readonly visibility: InputVisibility
  protected readonly change: InputChange

  protected readonly type: InputType
  protected readonly value: InputValue<V>

  protected readonly arrow?: InputArrow
  protected readonly match?: InputMatch

  protected readonly code: InputCode

  constructor (
    props: InputProps<V>,
    element: HTMLElement | Record<string, any> | undefined,
    callback: () => void
  ) {
    this.element = new InputElement(element, callback)
    this.visibility = new InputVisibility(callback)
    this.change = new InputChange()

    this.type = new InputType(
      props,
      this.visibility
    )
    this.value = new InputValue<V>(
      props,
      this.element,
      callback
    )

    if ('arrow' in props) {
      this.arrow = new InputArrow(props, this.value)
    }

    if ('match' in props) {
      this.match = new InputMatch(
        props,
        this.element,
        this.value
      )
    }

    this.code = new InputCode(props)
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
