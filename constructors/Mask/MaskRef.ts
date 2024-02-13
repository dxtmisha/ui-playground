import { type Ref, shallowRef, watchEffect } from 'vue'

import { Mask } from './Mask'

import { type ConstrClassObject } from '../../types/constructor'
import {
  type MaskElementInput,
  type MaskEventData,
  type MaskViewList
} from './typesBasic'
import type { MaskEmits } from './types'
import type { MaskProps } from './props'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskRef {
  protected mask: Mask

  readonly valueBasic = shallowRef<string>('')
  readonly value = shallowRef<string>('')
  readonly view = shallowRef<MaskViewList>([])
  readonly classes = shallowRef<ConstrClassObject>({})

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: MaskProps,
    element: Ref<MaskElementInput>,
    callbackEvent: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void,
    classCharacter = 'is-character'
  ) {
    this.mask = new Mask(
      props,
      element,
      (
        type: string & keyof MaskEmits,
        event: Event,
        value?: MaskEventData
      ) => {
        if (type === 'input') {
          this.updateValue()
        }

        callbackEvent(type, event, value)
      },
      classCharacter
    )

    watchEffect(() => {
      this.mask.reset(props?.value)
      this.updateValue()
    })
  }

  readonly onFocus = (event: FocusEvent) => this.mask.event.onFocus(event)
  readonly onBlur = (event: FocusEvent) => this.mask.event.onBlur(event)
  readonly onKeydown = (event: KeyboardEvent) => this.mask.event.onKeydown(event)
  readonly onKeyup = (event: KeyboardEvent) => this.mask.event.onKeyup(event)
  readonly onBeforeinput = (event: InputEvent) => this.mask.event.onBeforeinput(event)
  readonly onInput = (event: InputEvent) => this.mask.event.onInput(event)
  readonly onChange = (event: Event) => this.mask.event.onChange(event)
  readonly onPaste = (event: ClipboardEvent) => this.mask.event.onPaste(event)
  readonly onClick = (event: MouseEvent) => this.mask.event.onClick(event)

  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue (): this {
    const newValueBasic = this.mask.getValueBasic()
    const isDifferentLength = newValueBasic !== this.valueBasic.value

    this.valueBasic.value = newValueBasic
    this.value.value = this.mask.value.get()
    this.view.value = this.mask.view.get()

    if (isDifferentLength) {
      this.mask.goSelection()
    }

    this.classes.value = this.mask.getClasses()

    return this
  }
}
