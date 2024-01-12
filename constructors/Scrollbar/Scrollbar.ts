import { ScrollbarWidth } from './ScrollbarWidth.ts'
import { ScrollbarBorder } from './ScrollbarBorder.ts'

import { type ConstrClassObject } from '../../types/constructor.ts'
import type { ScrollbarProps } from './props.ts'

/**
 * Class for working with scroll components.<br>
 * Класс для работы с компонентами скролла.
 */
export class Scrollbar {
  protected border: ScrollbarBorder

  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: ScrollbarProps,
    element?: HTMLDivElement,
    callback?: () => void
  ) {
    this.border = new ScrollbarBorder(
      props,
      element,
      callback
    )
  }

  /**
   * Returns information on whether to disable scroll changes.
   * This is when the scroll has no width.<br>
   * Возвращает информацию, надо ли выключить изменения скролла.
   * Это когда скролл не имеет ширины.
   */
  async getDisabled (): Promise<boolean> {
    return await ScrollbarWidth.is()
  }

  /**
   * Returns an object for working with the border.<br>
   * Возвращает объект для работы с бордером.
   */
  getBorder (): ScrollbarBorder {
    return this.border
  }

  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  async getClasses (): Promise<ConstrClassObject> {
    return {
      '??--disabled': await this.getDisabled(),
      ...this.border.getClasses()
    }
  }
}