import { createElement } from '../../functions/element.ts'

import { type RippleProps } from './props.ts'

/**
 * Base class for working with the wave element.<br>
 * Базовый класс для работы с элементом волны.
 */
export class Ripple {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param classItem class name for the element /<br>название класса для элемента
   * @param classEnd class name for the end of animation status /<br>название класса для статуса конец анимации
   * @param styleX property name for the X coordinate /<br>название свойства для координаты X
   * @param styleY property name for the Y coordinate /<br>название свойства для координаты Y
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: RippleProps,
    protected element?: HTMLDivElement,
    protected readonly classItem = 'is-item',
    protected readonly classEnd = 'is-end',
    protected readonly styleX = 'x',
    protected readonly styleY = 'y'
  ) {
  }

  /**
   * Event when clicking on an element.<br>
   * Событие при клике на элемент.
   * @param event event object /<br>объект события
   */
  onClick (event: MouseEvent): void {
    this.addItem(event.offsetX, event.offsetY)
  }

  /**
   * Change the item.<br>
   * Изменить элемент.
   * @param element element /<br>элемент
   */
  setElement (element?: HTMLDivElement): this {
    this.element = element
    return this
  }

  /**
   * Adding a new light element.<br>
   * Добавление нового элемента свечения.
   * @param x x-coordinate /<br>x-координата
   * @param y y-coordinate /<br>y-координата
   */
  protected addItem (x: number, y: number): void {
    if (
      this.element &&
      !this.props?.disabled
    ) {
      createElement<HTMLSpanElement>(this.element, 'span', item => {
        item.onanimationend = () => item.classList.add(this.classEnd)
        item.ontransitionend = () => item.parentElement?.removeChild(item)

        item.style.setProperty(this.styleX, `${x}px`)
        item.style.setProperty(this.styleY, `${y}px`)
        item.classList.add(this.classItem)
      })
    }
  }
}
