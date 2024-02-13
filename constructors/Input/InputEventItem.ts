import { InputChange } from './InputChange'
import { InputValue } from './InputValue'
import { InputValidation } from './InputValidation'

import type { InputValidationItem } from './typesBasic'
import type { InputEmits } from './types'
import type { InputBasicProps } from './props'

/**
 * Class for working with events.<br>
 * Класс для работы с событиями.
 */
export class InputEventItem {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param validation object for working with validity /<br>объект для работы с валидностью
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: InputBasicProps,
    protected readonly change: InputChange,
    protected readonly value: InputValue,
    protected readonly validation: InputValidation,
    protected readonly callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void
  ) {
  }

  /**
   * Call of data change event.<br>
   * Вызов события изменения данных.
   * @param event event object /<br>объект события
   */
  onInput (event: InputEvent): void {
    this.validation.set(event)
    this.value.setByEvent(event)
    this.on(event)
  }

  /**
   * Triggering the change event after losing focus.<br>
   * Вызов события изменения после потери фокуса.
   * @param event event object /<br>объект события
   */
  onChange (event?: InputEvent | Event): void {
    this.on(event, 'change')
  }

  /**
   * Triggering the event for select change.<br>
   * Вызов события для изменения селект.
   * @param event event object /<br>объект события
   */
  onSelect (event: Event): void {
    this.value.setByEvent(event)

    this
      .on(event)
      .onChange(event)
  }

  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked (event: Event): void {
    this.value.setByChecked(event)

    this
      .on(event)
      .onChange(event)
  }

  /**
   * Triggering the event for changes in the radio.<br>
   * Вызов события для изменения в radio.
   * @param event event object /<br>объект события
   */
  onRadio (event: Event): void {
    this.value.setByRadio(event)

    this
      .on(event)
      .onChange(event)
  }

  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object /<br>объект события
   */
  onClear (event: MouseEvent): void {
    this.value.clear()

    this
      .on(event)
      .onChange(event)
  }

  /**
   * Triggering the event.<br>
   * Вызов события.
   * @param event event object /<br>объект события
   * @param type event type /<br>тип события
   */
  on<E> (
    event?: E,
    type: string & keyof InputEmits = 'input'
  ): this {
    this.callbackEmit(type, event as Event, {
      ...this.getValidation(type),
      ...this.getData()
    })

    if (type === 'input') {
      const value = this.value.get()

      this.callbackEmit('update:value', value, { value })
      this.callbackEmit('update:modelValue', value, { value })
    }

    return this
  }

  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type /<br>тип события
   */
  protected isValue (
    type: string & keyof InputEmits
  ): boolean {
    return Boolean(type && ['input', 'change'].indexOf(type) >= 0)
  }

  /**
   * Returns input data.<br>
   * Возвращает данные об вводе.
   */
  protected getData (): InputValidationItem {
    return {
      value: this.value.get(),
      detail: this.props.detail
    }
  }

  /**
   * Returns validity data.<br>
   * Возвращает данные валидности.
   * @param type event type /<br>тип события
   */
  protected getValidation (
    type: string & keyof InputEmits
  ): InputValidationItem {
    if (this.isValue(type)) {
      return this.validation.get()
    }

    return {} as InputValidationItem
  }
}
