import { computed } from 'vue'

import { FieldMessage } from './FieldMessage.ts'

import type { FieldMessageProps } from './props.ts'

/**
 * Class for the component of outputting a message for the input element (Ref).<br>
 * Класс для компонента вывода сообщения для элемента ввода (Ref).
 */
export class FieldMessageRef {
  protected readonly item: FieldMessage

  readonly is = computed(() => this.item.is())
  readonly isMessage = computed(() => this.item.message.is())
  readonly isValidation = computed(() => this.item.message.isValidation())
  readonly isCounter = computed(() => this.item.counter.is())
  readonly isMax = computed(() => this.item.counter.isMax())
  readonly message = computed(() => this.item.message.get())
  readonly counter = computed(() => this.item.counter.get())

  readonly classes = computed(() => this.item.classes())

  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor (
    props: FieldMessageProps
  ) {
    this.item = new FieldMessage(props)
  }
}
