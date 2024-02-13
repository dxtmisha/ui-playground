import {
  nextTick,
  onUnmounted,
  shallowRef,
  watchEffect
} from 'vue'

import { Window } from './Window'

import { type RefUndefined } from '../../types/ref'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor'
import { type WindowEmitOptions, WindowStatusItem } from './typesBasic'
import { type WindowProps } from './props'

/**
 * The base class for working with the window (Ref).<br>
 * Базовый класс для работы с окном (Ref).
 */
export class WindowRef {
  readonly window: Window

  readonly status = shallowRef<WindowStatusItem>()
  readonly staticMode = shallowRef<boolean>(false)
  readonly inDom = shallowRef<boolean>(false)
  readonly open = shallowRef<boolean>(false)

  readonly classes = shallowRef<ConstrClassObject>({})
  readonly styles = shallowRef<ConstrStyles>({})

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element window element /<br>элемент окна
   * @param callbackEmit call function when the opening state changes /<br>
   * функция вызова при изменении состояния открытия
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  constructor (
    props: WindowProps,
    element: RefUndefined<HTMLDivElement>,
    callbackEmit: (options: WindowEmitOptions) => void,
    className: string = 'is-window',
    classControl: string = 'is-control',
    classBody: string = 'is-body',
    classBodyContext: string = 'is-body-context'
  ) {
    this.window = new Window(
      props,
      element,
      async () => this.update(),
      callbackEmit,
      className,
      classControl,
      classBody,
      classBodyContext
    )

    watchEffect(async () => await this.window.open.set(props.open))
    watchEffect(async () => {
      this.window.update()
      await this.update()
    })

    onUnmounted(() => this.window.stop())
  }

  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId (): string {
    return this.window.classes.getId()
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return this.window.classes.getClassControlAndId()
  }

  /**
   * Changes the current state.<br>
   * Изменяет текущее состояние.
   * @param open the value of the current state /<br>значение текущего состояния
   */
  async setOpen (open: boolean = true): Promise<void> {
    await this.window.open.set(open)
  }

  /**
   * Switches the state, that is, opens or closes the window, depending on the value of item.<br>
   * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
   */
  async toggle (): Promise<void> {
    await this.window.open.toggle()
  }

  /**
   * Events of pressing a control element.<br>
   * События нажатия на элемент управления.
   * @param event event object /<br>объект события
   */
  async onClick (event: MouseEvent & TouchEvent): Promise<void> {
    return this.window.event.onClick(event)
  }

  /**
   * Events of pressing the right mouse button on a control element.<br>
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object /<br>объект события
   */
  async onContextmenu (event: MouseEvent & TouchEvent): Promise<void> {
    return this.window.event.onContextmenu(event)
  }

  /**
   * Event of animation end when closing the window.<br>
   * Событие окончания анимации при закрытии окна.
   */
  onTransition (): void {
    return this.window.event.onTransition()
  }

  /**
   * Event of the animation end of the closing prohibition.<br>
   * Событие окончания анимации запрета на закрытие.
   */
  onPersistent (): void {
    return this.window.event.onPersistent()
  }

  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  async update (): Promise<void> {
    this.status.value = this.window.status.get()
    this.staticMode.value = this.window.staticMode.is()

    this.inDom.value = this.window.open.inDom()
    this.open.value = this.window.open.get()

    this.updateClasses()

    await nextTick()
  }

  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  updateClasses (): this {
    this.classes.value = this.window.getClasses()
    this.styles.value = this.window.getStyles()

    return this
  }
}
