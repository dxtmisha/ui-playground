import { computed, type ComputedRef, type Ref, watch } from 'vue'

import { Mask } from './Mask.ts'

import {
  type MaskElementInput,
  type MaskElementCharacter,
  type MaskEventData,
  type MaskViewList
} from './typesBasic.ts'
import { type MaskProps } from './props.ts'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskRef {
  protected mask: Mask

  readonly view: ComputedRef<MaskViewList>

  readonly onFocus: (event: FocusEvent) => void
  readonly onBlur: (event: FocusEvent) => void

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param elementInput input element /<br>элемент ввода
   * @param elementCharacter element for managing the selection location /<br>элемент для управления местом выделения
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: MaskProps,
    elementInput: Ref<MaskElementInput>,
    elementCharacter: Ref<MaskElementCharacter>,
    classCharacter = 'is-character',
    callbackEvent?: (event: Event, value: MaskEventData) => void
  ) {
    this.mask = new Mask(
      props,
      elementInput.value,
      elementCharacter.value,
      classCharacter,
      () => {

      },
      callbackEvent
    )

    if (elementInput) {
      watch(elementInput, value => this.mask.setElement(value))
    }

    this.view = computed(() => this.mask.getView())

    this.onFocus = (event: FocusEvent) => this.mask.getEvent().onFocus(event)
    this.onBlur = (event: FocusEvent) => this.mask.getEvent().onBlur(event)
  }
}
