import { getClientX, getClientY } from '../../functions/event.ts'

import { EventItem } from '../../classes/EventItem.ts'

import { WindowStatus } from './WindowStatus.ts'
import { WindowClient } from './WindowClient.ts'
import { WindowFlash } from './WindowFlash.ts'
import { WindowOpen } from './WindowOpen.ts'
import { WindowVerification } from './WindowVerification.ts'

import type { WindowProps } from './props.ts'
import { WindowPersistent } from './WindowPersistent.ts'

/**
 * A class for working with events.<br>
 * Класс для работы с событиями.
 */
export class WindowEvent {
  protected readonly event: EventItem<HTMLBodyElement, MouseEvent>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param client object for working with mouse pointer coordinates /<br>объект для работы с координатами указателя мыши
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param flash class object for working with fast window opening /<br>объект класса для работы с быстрым открытием окна
   * @param open the class object for working with the status of closing or opening the window /<br>
   * объект класса для работы со статусом закрытия или открытия окна
   * @param verification an object for working with the check for changing the status of opening or closing /<br>
   * объект для работы с проверкой изменения статуса открытия или закрытия
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: WindowProps,
    protected readonly status: WindowStatus,
    protected readonly client: WindowClient,
    protected readonly persistent: WindowPersistent,
    protected readonly flash: WindowFlash,
    protected readonly open: WindowOpen,
    protected readonly verification: WindowVerification
  ) {
    this.event = new EventItem<HTMLBodyElement, MouseEvent>(
      'body',
      ['click', 'contextmenu'],
      (event: MouseEvent) => this.onGlobal(event)
    )
  }

  /**
   * Events of pressing a control element.<br>
   * События нажатия на элемент управления.
   * @param event event object /<br>объект события
   */
  async onClick (event: MouseEvent & TouchEvent): Promise<void> {
    if (!this.props.contextmenu) {
      await this.on(event)
    }
  }

  /**
   * Events of pressing the right mouse button on a control element.<br>
   * События нажатия на правую кнопку мыши на элемент управления.
   * @param event event object /<br>объект события
   */
  async onContextmenu (event: MouseEvent & TouchEvent): Promise<void> {
    if (this.props.contextmenu) {
      event.preventDefault()

      await this.on(event)
    }
  }

  /**
   * Event of animation end when closing the window.<br>
   * Событие окончания анимации при закрытии окна.
   */
  onTransition (): void {
    this.open.close()
  }

  /**
   * Event of the animation end of the closing prohibition.<br>
   * Событие окончания анимации запрета на закрытие.
   */
  onPersistent (): void {
    this.persistent.disabled()
  }

  /**
   * Starts listening to global events.<br>
   * Стартует прослушивание глобальных событий.
   */
  start (): this {
    this.event.start()
    return this
  }

  /**
   * Stop the global event.<br>
   * Остановить глобальное событие.
   */
  stop (): this {
    this.event.stop()
    return this
  }

  /**
   * Changes the event listening status depending on the window’s open status.<br>
   * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
   */
  toggle (): this {
    if (
      this.open.get() &&
      this.status.isOpen()
    ) {
      this.start()
    } else {
      this.stop()
    }

    return this
  }

  /**
   * Event activation.<br>
   * Активация события.
   * @param event event object /<br>объект события
   */
  protected async on (event: MouseEvent & TouchEvent): Promise<void> {
    this.client.set(
      getClientX(event),
      getClientY(event)
    )

    await this.verification.update(event.target as HTMLElement)
  }

  /**
   * Callback of the event when pressing any area for checking and changing the opening state.<br>
   * Callback события при нажатии на любую область для проверки и изменения состояния открытия.
   * @param event event instance /<br>экземпляр события
   */
  protected async onGlobal (event?: Event): Promise<void> {
    if (this.open.get()) {
      this.flash.setControl(event?.target as HTMLElement)
      await this.verification.update(event?.target as HTMLElement)
    } else {
      this.event.stop()
    }
  }
}
