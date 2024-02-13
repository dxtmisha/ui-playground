import { type Ref, shallowRef, watchEffect } from 'vue'

import { Checkbox } from './Checkbox'

import { type InputValidationItem } from '../Input/typesBasic'
import { type InputEmits } from '../Input/types'
import { type CheckboxProps } from './props'

/**
 * Class for working with checkbox (Ref).<br>
 * Класс для работы с checkbox (Ref).
 */
export class CheckboxRef {
  protected checkbox: Checkbox

  readonly value = shallowRef(false)
  readonly iconBind = shallowRef({})

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: CheckboxProps,
    element: Ref<HTMLElement | Record<string, any> | undefined>,
    callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void
  ) {
    this.checkbox = new Checkbox(
      props,
      element,
      () => {
        this.update()
      },
      callbackEmit
    )

    watchEffect(() => this.checkbox.value.update())
    watchEffect(() => {
      this.update()
    })
  }

  readonly onInput = (event: Event) => this.checkbox.event.onChecked(event)

  /**
   * Data update.<br>
   * Обновление данных.
   */
  protected update (): this {
    this.value.value = this.checkbox.value.getBoolean()
    this.iconBind.value = this.checkbox.icon.get()

    return this
  }
}
