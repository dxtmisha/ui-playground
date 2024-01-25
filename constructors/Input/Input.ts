import { InputVisibility } from './InputVisibility.ts'
import { InputType } from './InputType.ts'
import { InputPattern } from './InputPattern.ts'

import { InputElement } from './InputElement.ts'
import { InputChange } from './InputChange.ts'

import { InputValue } from './InputValue.ts'

import { InputArrow } from './InputArrow.ts'
import { InputMatch } from './InputMatch.ts'

import { InputCode } from './InputCode.ts'
import { InputValidation } from './InputValidation.ts'
import { InputEvent } from './InputEvent.ts'

import {
  type InputElementItem,
  type InputValidationItem
} from './typesBasic.ts'
import { type InputEmits } from './types.ts'
import { type InputBasicProps } from './props.ts'

/**
 * Base class for working with an input element.<br>
 * Базовый класс для работы с элементом ввода.
 */
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
  protected readonly event: InputEvent

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: InputBasicProps<V>,
    element: HTMLElement | Record<string, any> | undefined,
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
      this.type,
      this.pattern,
      element,
      callback
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
      this.match,
      this.code
    )
    this.event = new InputEvent(
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
  getEventItem (): InputEvent {
    return this.event
  }

  /**
   * Changes the input element.<br>
   * Изменяет элемент ввода.
   * @param element element for change /<br>элемент для изменения
   */
  setElement (element: InputElementItem): this {
    this.element.set(element)
    return this
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
