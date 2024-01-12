import { Window } from './Window.ts'

// import type { WindowProps } from './props.ts'
// import type { RefUndefined } from '../../types/ref.ts'
// import { watch } from 'vue'

export class WindowRef {
  protected window: Window

  constructor (
    // props: WindowProps,
    // element?: RefUndefined<HTMLDivElement>,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body'
  ) {
    this.window = new Window(
      // props,
      // element?.value,
      className,
      classControl,
      classBody
    )

    // if (element) {
    //   watch(element, value => this.window.setElement(value))
    // }
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return this.window.getClasses().getClassControl()
  }
}
