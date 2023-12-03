import { type Ref, shallowRef, type ShallowRef, watch } from 'vue'

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

  readonly value: ShallowRef<string>
  readonly view: ShallowRef<MaskViewList>

  readonly onFocus: (event: FocusEvent) => void
  readonly onBlur: (event: FocusEvent) => void
  readonly onKeydown: (event: KeyboardEvent) => void
  readonly onBeforeinput: (event: InputEvent) => void
  readonly onInput: (event: InputEvent) => void
  readonly onPaste: (event: ClipboardEvent) => void

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
    callbackEvent?: (event: Event, value: MaskEventData) => void,
    classCharacter = 'is-character'
  ) {
    this.mask = new Mask(
      props,
      elementInput.value,
      elementCharacter.value,
      (event, value) => {
        this.value.value = this.mask.getValue()
        this.view.value = this.mask.getView()

        callbackEvent?.(event, value)
      },
      classCharacter
    )

    if (elementInput) {
      watch(elementInput, value => this.mask.setElement(value))
    }

    this.value = shallowRef(this.mask.getValue())
    this.view = shallowRef(this.mask.getView())

    this.onFocus = (event: FocusEvent) => this.mask.getEvent().onFocus(event)
    this.onBlur = (event: FocusEvent) => this.mask.getEvent().onBlur(event)
    this.onKeydown = (event: KeyboardEvent) => this.mask.getEvent().onKeydown(event)
    this.onBeforeinput = (event: InputEvent) => this.mask.getEvent().onBeforeinput(event)
    this.onInput = (event: InputEvent) => this.mask.getEvent().onInput(event)
    this.onPaste = (event: ClipboardEvent) => this.mask.getEvent().onPaste(event)
  }
}
