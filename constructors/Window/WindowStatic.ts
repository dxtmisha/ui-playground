import { EventItem } from '../../classes/EventItem.ts'

import { WindowElement } from './WindowElement.ts'

import type { WindowProps } from './props.ts'

/**
 * Class for working with a static window.<br>
 * Класс для работы со статичным окном.
 */
export class WindowStatic {
  protected activity: boolean = false
  protected event?: EventItem<Window, Event>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly element: WindowElement,
    protected readonly callback?: () => void
  ) {
  }

  /**
   * Checks if the status is active.<br>
   * Проверяет, активен ли статус.
   */
  is (): boolean {
    return this.activity
  }

  /**
   * Checks if the static mode is enabled.<br>
   * Проверяет, включен ли режим статичности.
   */
  isStaticMod (): boolean {
    return Boolean(this.props.staticMode)
  }

  /**
   * Updates the values of static modification.<br>
   * Обновляет значения модификации статичности.
   */
  update (): boolean {
    const is = this.isStatic()

    if (is !== this.activity) {
      this.activity = is
      return true
    }

    return false
  }

  /**
   * Performs status check and activates events when turned on.<br>
   * Выполняет проверку статуса и активизирует события при включении.
   */
  make (): void {
    if (this.isStaticMod()) {
      if (
        !this.event &&
        this.element.getMain()
      ) {
        this.event = new EventItem(
          window,
          ['resize'],
          () => this.listener()
        )

        this.listener()
        this.event.start()
      }
    } else {
      this.stop()
    }
  }

  /**
   * Performs a check of the adaptation status.<br>
   * Выполняет проверку статуса адаптации.
   */
  makeAdaptive (): void {
    if (
      this.props.adaptive &&
      this.props.staticMode &&
      this.element.getMain()
    ) {
      requestAnimationFrame(() => this.listener())
    }
  }

  /**
   * Restores the data to its previous state.<br>
   * Восстанавливает данные в прежнее состояние.
   */
  stop (): void {
    if (this.event) {
      this.event.stop()
      this.event = undefined
    }
  }

  /**
   * Checks if the static window is active.<br>
   * Проверяет, активно ли статичное окно.
   */
  protected isStatic (): boolean {
    const element = this.element.getMain()

    return Boolean(
      element &&
      getComputedStyle(element).content === '"--STATIC--"'
    )
  }

  /**
   * The function called when an event is triggered.<br>
   * Вызываемая функция при срабатывании события.
   */
  protected listener (): void {
    if (this.update()) {
      this.callback?.()
    }
  }
}
