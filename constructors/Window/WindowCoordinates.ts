import { WindowClasses } from './WindowClasses.ts'
import { WindowElement } from './WindowElement.ts'

import { WindowLocation } from './typesBasic.ts'

/**
 * A class for working with coordinates.<br>
 * Класс для работы с координатами.
 */
export class WindowCoordinates {
  protected top: number = 0
  protected right: number = 0
  protected bottom: number = 0
  protected left: number = 0
  protected width: number = 0
  protected height: number = 0
  protected innerWidth: number = 0
  protected innerHeight: number = 0
  protected padding: number = 0
  protected location: WindowLocation = WindowLocation.center

  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements /<br>
   * объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements /<br>объект класса для работы с элементами
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly classes: WindowClasses,
    protected readonly element: WindowElement
  ) {
  }

  /**
   * Returns the distance from the top point.<br>
   * Возвращает расстояние от верхней точки.
   */
  getTop (): number {
    return this.top
  }

  /**
   * Returns the distance from the right point.<br>
   * Возвращает расстояние от правой точки.
   */
  getRight (): number {
    return this.right
  }

  /**
   * Returns the distance from the lower point.<br>
   * Возвращает расстояние от нижней точки.
   */
  getBottom (): number {
    return this.bottom
  }

  /**
   * Returns the distance from the left point.<br>
   * Возвращает расстояние от левой точки.
   */
  getLeft (): number {
    return this.left
  }

  /**
   * Returns the width of the element.<br>
   * Возвращает ширину элемента.
   */
  getWidth (): number {
    return this.width
  }

  /**
   * Returns the height of the element.<br>
   * Возвращает высоту элемента.
   */
  getHeight (): number {
    return this.height
  }

  /**
   * Returns the width of the window.<br>
   * Возвращает ширину окна.
   */
  getInnerWidth (): number {
    return this.innerWidth
  }

  /**
   * Returns the height of the window.<br>
   * Возвращает высоту окна.
   */
  getInnerHeight (): number {
    return this.innerHeight
  }

  /**
   * Returns the margins of the element.<br>
   * Возвращает отступы у элемента.
   */
  getPadding (): number {
    return this.padding
  }

  /**
   * Returns the values of the element's position.<br>
   * Возвращает значения положения элемента.
   */
  getLocation (): WindowLocation {
    return this.location
  }

  /**
   * Returns the maximum height of the body.<br>
   * Возвращает максимальную высоту у body.
   */
  getMaxHeight (): number {
    const body = this.element.getBody()

    if (body) {
      return parseInt(getComputedStyle(body).maxHeight.replace(/[^0-9]+/g, ''))
    }

    return 0
  }

  /**
   * Data updates.<br>
   * Обновления данных.
   */
  update (): boolean {
    const element = this.element.getMain()
    const rect = this.element.getControlRect()

    if (
      element &&
      rect && (
        this.top !== rect.top ||
        this.right !== rect.right ||
        this.bottom !== rect.bottom ||
        this.left !== rect.left ||
        this.width !== element.offsetWidth ||
        this.height !== element.offsetHeight ||
        this.innerWidth !== window.innerWidth ||
        this.innerHeight !== window.innerHeight
      )
    ) {
      this.top = rect.top
      this.right = rect.right
      this.bottom = rect.bottom
      this.left = rect.left
      this.width = element.offsetWidth
      this.height = element.offsetHeight
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
      this.padding = (window.innerHeight - this.getMaxHeight()) / 2
      this.location = this.initLocation(rect.top + (rect.height / 2))

      return true
    }

    return false
  }

  /**
   * Resets all data to initial values.<br>
   * Сбрасывает все данные к начальным значениям.
   */
  reset (): this {
    this.top = 0
    this.right = 0
    this.bottom = 0
    this.left = 0
    this.width = 0
    this.height = 0
    this.innerWidth = 0
    this.innerWidth = 0

    return this
  }

  /**
   * Calculates control position values.<br>
   * Вычисляет значения положения контроля
   * @param top position of an element /<br>положение элемента
   */
  protected initLocation (
    top: number
  ): WindowLocation {
    const value = Math.floor(top / (window.innerHeight / 3))

    switch (value) {
      case 0:
        return WindowLocation.top
      case 2:
        return WindowLocation.bottom
    }

    return WindowLocation.center
  }
}
