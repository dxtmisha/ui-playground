import { ImageCoordinator } from './ImageCoordinator'

import { type ImageProps } from './props'

/**
 * A class for obtaining data for the background-position property.<br>
 * Класс для получения данных для свойства background-position.
 */
export class ImagePosition {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps,
    protected readonly coordinator: ImageCoordinator
  ) {
  }

  /**
   * Returns the position on the left.<br>
   * Возвращает позицию слева.
   */
  getX (): string {
    if (this.coordinator.is()) {
      return `${this.coordinator.getCoordinator()[3] + (this.coordinator.get().width / 2)}%`
    }

    return this.props?.x?.toString() || 'center'
  }

  /**
   * Returns the position on the top.<br>
   * Возвращает позицию сверху.
   */
  getY (): string {
    if (this.coordinator.is()) {
      return `${this.coordinator.getCoordinator()[0] + (this.coordinator.get().height / 2)}%`
    }

    return this.props?.y?.toString() || 'center'
  }
}
