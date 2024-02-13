import { ScrollbarWidth } from './ScrollbarWidth'
import { ScrollbarBorder } from './ScrollbarBorder'

import {
  type ConstrClassObject,
  type ConstrValue
} from '../../types/constructor'
import { type ScrollbarProps } from './props'

/**
 * Class for working with scroll components.<br>
 * Класс для работы с компонентами скролла.
 */
export class Scrollbar {
  readonly border: ScrollbarBorder

  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: ScrollbarProps,
    element: ConstrValue<HTMLDivElement>,
    callback: () => void
  ) {
    this.border = new ScrollbarBorder(
      props,
      element,
      callback
    )
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

  /**
   * Returns information on whether to disable scroll changes.
   * This is when the scroll has no width.<br>
   * Возвращает информацию, надо ли выключить изменения скролла.
   * Это когда скролл не имеет ширины.
   */
  async getDisabled (): Promise<boolean> {
    return await ScrollbarWidth.is()
  }
}
