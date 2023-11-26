import { type Ref, watch } from 'vue'

import { Ripple } from './Ripple.ts'

import { type RippleProps } from './props.ts'

/**
 * Base Ripple class for working in Vue.<br>
 * Базовый класс Ripple для работы во Vue.
 */
export class RippleRef {
  protected readonly ripple: Ripple

  readonly onClick: (event: MouseEvent) => void

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
    props: RippleProps,
    element: Ref<HTMLDivElement | undefined>,
    classItem = 'is-item',
    classEnd = 'is-end',
    styleX = 'x',
    styleY = 'y'
  ) {
    this.ripple = new Ripple(
      props,
      element.value,
      classItem,
      classEnd,
      styleX,
      styleY
    )

    watch(element, value => this.ripple.setElement(value))

    this.onClick = (event: MouseEvent) => this.ripple.onClick(event)
  }
}
