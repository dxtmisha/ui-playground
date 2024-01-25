import { Ref, shallowRef } from 'vue'

import { InputRef } from '../Input/InputRef.ts'

import { type ImageProps } from '../Image/props.ts'
import { type InputValidationItem } from '../Input/typesBasic.ts'
import { type InputEmits } from '../Input/types.ts'
import { type CheckboxProps } from './props.ts'

export class CheckboxRef extends InputRef<boolean> {
  protected readonly icon = shallowRef<ImageProps>({})

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
    super(
      props,
      element,
      callbackEmit
    )
  }
}
