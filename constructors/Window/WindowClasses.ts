import { getElementId } from '../../functions/element.ts'
import { WindowStatus } from './WindowStatus.ts'

/**
 * Class for working with class names.<br>
 * Класс для работы с названиями классов.
 */
export class WindowClasses {
  /**
   * Identification of the current window. Used to search for the current component and its control.<br>
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
   */
  protected readonly id = `window--${getElementId()}`

  /**
   * Constructor
   * @param status object for working with statuses /<br>объект для работы со статусами
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly status: WindowStatus,
    protected readonly className: string = 'is-window',
    protected readonly classControl: string = 'is-control',
    protected readonly classBody: string = 'is-body'
  ) {
  }

  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId (): string {
    return this.id
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return `${this.classControl} ${this.getId()}`
  }

  /**
   * Search and return of the control element of the current component.<br>
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl (): HTMLElement | undefined {
    return document.querySelector<HTMLElement>(`.${this.classControl}.${this.id}`) || undefined
  }

  /**
   * Search and return of the window body element for the current component.<br>
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody (): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.classBody}`) || undefined
  }
}
