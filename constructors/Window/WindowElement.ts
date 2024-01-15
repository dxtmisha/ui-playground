import { WindowClasses } from './WindowClasses.ts'

/**
 * A class for working with elements.<br>
 * Класс для работы с элементами.
 */
export class WindowElement {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element the element of the window itself /<br>элемент самого окна
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly classes: WindowClasses,
    protected element?: HTMLDivElement
  ) {
  }

  /**
   * Checks if the main element exists.<br>
   * Проверяет, есть ли главный элемент.
   */
  isMain (): boolean {
    return Boolean(this.element)
  }

  /**
   * Returns the main element.<br>
   * Возвращает главного элемента.
   */
  getMain (): HTMLDivElement | undefined {
    return this.element
  }

  /**
   * Returns the control element of the current component.<br>
   * Возвращает элемент управления текущего компонента.
   */
  getControl (): HTMLElement | undefined {
    return this.classes.findControl()
  }

  /**
   * Returns the dimensions of the control element.<br>
   * Возвращает размеры элемента управления.
   */
  getControlRect (): DOMRect | undefined {
    return this.getControl()?.getBoundingClientRect() || undefined
  }

  /**
   * Returns the body element of the window.<br>
   * Возвращает элемент тела окна.
   */
  getBody (): HTMLDivElement | undefined {
    return this.classes.findBody()
  }

  /**
   * Returns the dimensions of the window’s body element.<br>
   * Возвращает размеры элемента тела окна.
   */
  getBodyRect (): DOMRect | undefined {
    return this.getBody()?.getBoundingClientRect() || undefined
  }

  /**
   * Modifies the main element.<br>
   * Изменяет главный элемент.
   * @param element the element of the window itself /<br>элемент самого окна
   */
  setMain (element?: HTMLDivElement): this {
    this.element = element
    return this
  }
}
