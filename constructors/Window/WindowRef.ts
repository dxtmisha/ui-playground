import { ref, shallowRef, ShallowRef, watch, watchEffect } from 'vue'

import { Window } from './Window.ts'

import { type RefUndefined } from '../../types/ref.ts'
import type { ConstrClassObject } from '../../types/constructor.ts'
import { type WindowProps } from './props.ts'
import { WindowStatusItem } from './typesBasic.ts'

export class WindowRef {
  protected window: Window

  readonly status: ShallowRef<WindowStatusItem>
  readonly classes = ref<ConstrClassObject>({})

  constructor (
    props: WindowProps,
    element?: RefUndefined<HTMLDivElement>,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body'
  ) {
    this.window = new Window(
      props,
      element?.value,
      () => {
        this.status.value = this.window.getStatus()
      },
      className,
      classControl,
      classBody
    )

    if (element) {
      watch(element, value => this.window.getElement().setMain(value))
    }

    watchEffect(() => {
      this.updateClasses()
    })

    this.status = shallowRef(this.window.getStatus())
  }

  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId (): string {
    return this.window.getClasses().getId()
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return this.window.getClasses().getClassControl()
  }

  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses (): this {
    this.classes.value = this.window.getClasses().getClasses()
    return this
  }
}
