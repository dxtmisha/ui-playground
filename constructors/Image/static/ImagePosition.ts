import { ImageCoordinator } from './ImageCoordinator.ts'

import { type ImageForOption } from '../typesBasic.ts'

/**
 * Class for working with position.<br>
 * Класс для работы с позицией.
 */
export class ImagePosition {
  /**
   * Constructor
   * @param x coordinate of the picture on the left /<br>координата картины слева
   * @param y coordinate of the picture on the top /<br>координата картины сверху
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected x: ImageForOption,
    protected y: ImageForOption,
    protected coordinator?: ImageCoordinator
  ) {
  }

  /**
   * Returns the position on the left.<br>
   * Возвращает позицию слева.
   */
  getX (): string {
    if (
      this.coordinator &&
      this.coordinator?.is()
    ) {
      return `${this.coordinator.getCoordinator()[3] + (this.coordinator.get().width / 2)}%`
    }

    return this.x?.toString() || 'center'
  }

  /**
   * Returns the position on the top.<br>
   * Возвращает позицию сверху.
   */
  getY (): string {
    if (
      this.coordinator &&
      this.coordinator?.is()
    ) {
      return `${this.coordinator.getCoordinator()[0] + (this.coordinator.get().height / 2)}%`
    }

    return this.y?.toString() || 'center'
  }

  /**
   * Change the x coordinate.<br>
   * Изменить координату x.
   * @param x coordinate of the picture on the left /<br>координата картины слева
   */
  setX (x: ImageForOption): this {
    this.x = x
    return this
  }

  /**
   * Change the y coordinate.<br>
   * Изменить координату y.
   * @param y coordinate of the picture on the top /<br>координата картины сверху
   */
  setY (y: ImageForOption): this {
    this.y = y
    return this
  }

  /**
   * Updating the coordinate object.<br>
   * Обновление объекта координат.
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  setCoordinator (coordinator?: ImageCoordinator): this {
    this.coordinator = coordinator
    return this
  }
}
