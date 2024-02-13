import { isArray } from '../../functions/data'

import { type Undefined } from '../../types/basic'
import { type ImageProps } from './props'
import {
  type ImageCoordinatorItem,
  type ImageSize
} from './typesBasic'

/**
 * A class for calculating the central part of the image by its coordinates.<br>
 * Класс для вычисления центральной части изображения по его координатам.
 */
export class ImageCoordinator {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Checks if there are coordinates for calculation.<br>
   * Проверяет, есть ли координаты для вычисления.
   */
  is (): this is { coordinator: Exclude<ImageCoordinatorItem, Undefined> } {
    const coordinator = this.props?.coordinator

    return isArray(coordinator) &&
      coordinator.length > 0 &&
      coordinator.length < 5
  }

  /**
   * Returns the sizes for the background-position property by coordinates.<br>
   * Возвращает размеры для свойства background-position по координатам.
   */
  get (): ImageSize {
    const coordinator = this.getCoordinator()

    return {
      width: 100 - coordinator[1] - coordinator[3],
      height: 100 - coordinator[2] - coordinator[0]
    }
  }

  /**
   * Returns coordinates.<br>
   * Возвращает координаты.
   */
  getCoordinator (): [number, number, number, number] {
    if (this.is()) {
      const coordinator: number[] = this.props?.coordinator

      switch (coordinator.length) {
        case 1:
          return [
            coordinator[0],
            coordinator[0],
            coordinator[0],
            coordinator[0]
          ]
        case 2:
          return [
            coordinator[0],
            coordinator[1],
            coordinator[0],
            coordinator[1]
          ]

        case 3:
          return [
            coordinator[0],
            coordinator[1],
            coordinator[2],
            coordinator[1]
          ]
        case 4:
          return coordinator as [number, number, number, number]
      }
    }

    return [0, 0, 0, 0]
  }

  /**
   * Returns the values for the background property.<br>
   * Возвращает значения для свойства background.
   */
  getSize (): ImageSize<string> {
    const item = this.get()

    return {
      width: `${100 / item.width * 100}%`,
      height: `${100 / item.height * 100}%`
    }
  }
}
