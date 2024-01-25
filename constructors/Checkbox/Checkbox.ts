import { CheckboxProps } from './props.ts'

export class Checkbox {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor (
    props: CheckboxProps,
    element: HTMLElement | Record<string, any> | undefined,
    callback: () => void,
    callbackEmit: (type: string & keyof InputEmits, event: Event, value: InputValidationItem) => void
  ) {

  }
}
