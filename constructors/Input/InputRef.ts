import { ref, Ref, watchEffect } from 'vue'

import { Input } from './Input'

import type { InputValidationItem } from './typesBasic'
import type { InputEmits } from './types'
import type { InputBasicProps } from './props'

/**
 * Class for working with reactive input data.<br>
 * Класс для работы с реактивными данными ввода.
 */
export class InputRef<V = string> {
  protected readonly input: Input<V>

  readonly value: Ref<V | undefined> = ref()

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: InputBasicProps<V>,
    element: Ref<HTMLElement | Record<string, any> | undefined>,
    callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void
  ) {
    this.input = new Input<V>(
      props,
      element,
      () => {
        this.update()
      },
      callbackEmit
    )

    watchEffect(() => {
      this.input.update()
    })

    this.update()
  }

  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked (event: Event): void {
    this.input.getEventItem().onChecked(event)
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  protected update (): this {
    this.value.value = this.input.getValue()
    return this
  }
}
