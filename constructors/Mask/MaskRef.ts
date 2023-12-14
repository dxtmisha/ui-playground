import { computed, type ComputedRef, type Ref, shallowRef, type ShallowRef, watch, watchEffect } from 'vue'

import { Mask } from './Mask.ts'

import { type ConstrClassObject } from '../../types/constructor.ts'
import {
  type MaskElementInput,
  type MaskEventData,
  type MaskViewList
} from './typesBasic.ts'
import type { MaskProps } from './props.ts'
import type { MaskEmits } from './types.ts'

/**
 * A class for working with a mask.<br>
 * Класс для работы с маской.
 */
export class MaskRef {
  protected mask: Mask

  readonly valueBasic: ShallowRef<string> = shallowRef('')
  readonly value: ShallowRef<string> = shallowRef('')
  readonly view: ShallowRef<MaskViewList> = shallowRef([])

  readonly onFocus: (event: FocusEvent) => void
  readonly onBlur: (event: FocusEvent) => void
  readonly onKeydown: (event: KeyboardEvent) => void
  readonly onKeyup: (event: KeyboardEvent) => void
  readonly onBeforeinput: (event: InputEvent) => void
  readonly onInput: (event: InputEvent) => void
  readonly onChange: (event: Event) => void
  readonly onPaste: (event: ClipboardEvent) => void
  readonly onClick: (event: MouseEvent) => void

  readonly classes: ComputedRef<ConstrClassObject>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param elementInput input element /<br>элемент ввода
   * @param classCharacter define class names for each symbol /<br>определить названия класс для каждого символа
   * @param callbackEvent the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: MaskProps,
    elementInput: Ref<MaskElementInput>,
    callbackEvent?: (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => void,
    classCharacter = 'is-character'
  ) {
    this.mask = new Mask(
      props,
      elementInput.value,
      (type: string & keyof MaskEmits, event: Event, value?: MaskEventData) => {
        if (type === 'input') {
          this.updateValue()
        }

        callbackEvent?.(type, event, value)
      },
      classCharacter
    )

    if (elementInput) {
      watch(elementInput, value => this.mask.setElement(value))
    }

    watchEffect(() => {
      if (this.mask.reset(props?.value)) {
        this.updateValue()
      }
    })

    this.onFocus = (event: FocusEvent) => this.mask.getEvent().onFocus(event)
    this.onBlur = (event: FocusEvent) => this.mask.getEvent().onBlur(event)
    this.onKeydown = (event: KeyboardEvent) => this.mask.getEvent().onKeydown(event)
    this.onKeyup = (event: KeyboardEvent) => this.mask.getEvent().onKeyup(event)
    this.onBeforeinput = (event: InputEvent) => this.mask.getEvent().onBeforeinput(event)
    this.onInput = (event: InputEvent) => this.mask.getEvent().onInput(event)
    this.onChange = (event: Event) => this.mask.getEvent().onChange(event)
    this.onPaste = (event: ClipboardEvent) => this.mask.getEvent().onPaste(event)
    this.onClick = (event: MouseEvent) => this.mask.getEvent().onClick(event)

    this.classes = computed(() => this.mask.getClasses())
    this.updateValue()
  }

  /**
   * Updating the entered data.<br>
   * Обновление введенных данных.
   */
  updateValue (): this {
    const newValueBasic = this.mask.getValueBasic()
    const isDifferentLength = newValueBasic !== this.valueBasic.value

    this.valueBasic.value = newValueBasic
    this.value.value = this.mask.getValue()
    this.view.value = this.mask.getView()

    if (isDifferentLength) {
      this.mask.goSelection()
    }

    return this
  }
}
