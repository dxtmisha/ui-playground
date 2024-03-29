import { InputVisibility } from './InputVisibility'
import { InputType } from './InputType'
import { InputPattern } from './InputPattern'

import { InputElement } from './InputElement'
import { InputChange } from './InputChange'

import { InputValue } from './InputValue'

import { InputArrow } from './InputArrow'
import { InputMatch } from './InputMatch'

import { InputCode } from './InputCode'
import { InputValidation } from './InputValidation'
import { InputEventItem } from './InputEventItem'

import { type ConstrValue } from '../../types/constructor'
import { type InputValidationItem } from './typesBasic'
import { type InputEmits } from './types'
import { type InputBasicProps } from './props'

/**
 * Base class for working with an input element.<br>
 * Базовый класс для работы с элементом ввода.
 */
export class Input<V = string> {
  readonly visibility: InputVisibility
  readonly type: InputType
  readonly pattern: InputPattern

  readonly element: InputElement
  readonly change: InputChange

  readonly value: InputValue<V>

  readonly arrow: InputArrow
  readonly match: InputMatch

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
    props: InputBasicProps<V>,
    element: ConstrValue<HTMLElement | Record<string, any> | undefined>,
    callback: () => void,
    callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void
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
      element,
      this.type,
      this.pattern
    )
    this.change = new InputChange()

    this.value = new InputValue<V>(
      props,
      this.element,
      this.change,
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
      this.code,
      this.match
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
   * Returns the current value.<br>
   * Возвращает текущее значение.
   */
  getValue (): V | undefined {
    return this.value.get()
  }

  /**
   * Returns an object for working with values.<br>
   * Возвращает объект для работы со значениями.
   */
  getValueItem (): InputValue {
    return this.value
  }

  /**
   * Returns an object for working with events.<br>
   * Возвращает объект для работы с событиями.
   */
  getEventItem (): InputEventItem {
    return this.event
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
