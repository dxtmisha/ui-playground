import { onUnmounted, ref, shallowRef, type ShallowRef, watch, watchEffect } from 'vue'

import { Window } from './Window.ts'

import { type RefUndefined } from '../../types/ref.ts'
import type { ConstrClassObject, ConstrStyles } from '../../types/constructor.ts'
import { type WindowProps } from './props.ts'
import { WindowStatusItem } from './typesBasic.ts'

/**
 * The base class for working with the window (Ref).<br>
 * Базовый класс для работы с окном (Ref).
 */
export class WindowRef {
  protected window: Window

  readonly status: ShallowRef<WindowStatusItem>
  readonly inDom: ShallowRef<boolean>

  readonly classes = ref<ConstrClassObject>({})
  readonly styles = ref<ConstrStyles>({})

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   */
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
        console.log('update')

        this.status.value = this.window.getStatus()
        this.inDom.value = this.window.inDom()

        this.updateClasses()
      },
      className,
      classControl,
      classBody
    )

    if (element) {
      watch(element, value => this.window.getElement().setMain(value))
    }

    this.status = shallowRef(this.window.getStatus())
    this.inDom = shallowRef(this.window.inDom())

    watchEffect(() => this.updateClasses())
    onUnmounted(() => this.window.getEvent().stop())
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
    return this.window.getClasses().getClassControlAndId()
  }

  /**
   * Events of pressing a control element.<br>
   * События нажатия на элемент управления.
   * @param event event object /<br>объект события
   */
  async onClick (event: MouseEvent & TouchEvent): Promise<void> {
    return this.window.getEvent().onClick(event)
  }

  /**
   * Events of pressing the right mouse button on a control element.<br>
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object /<br>объект события
   */
  async onContextmenu (event: MouseEvent & TouchEvent): Promise<void> {
    return this.window.getEvent().onContextmenu(event)
  }

  /**
   * Event of animation end when closing the window.<br>
   * Событие окончания анимации при закрытии окна.
   */
  onTransition (): void {
    this.window.getEvent().onTransition()
  }

  /**
   * Event of the animation end of the closing prohibition.<br>
   * Событие окончания анимации запрета на закрытие.
   */
  onPersistent (): void {
    this.window.getEvent().onPersistent()
  }

  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses (): this {
    this.classes.value = this.window.getClasses().getClasses()
    this.styles.value = this.window.getStyles()
    return this
  }
}
