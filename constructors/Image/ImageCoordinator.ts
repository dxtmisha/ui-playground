import { isArray } from '../../functions/data.ts'

import { type Undefined } from '../../types/basic.ts'
import { type ImageProps } from './props.ts'
import {
  type ImageCoordinatorItem,
  type ImageSize
} from './typesBasic.ts'

/**
 * Class for working with coordinates.<br>
 * Класс для работы с координатами.
 */
export class ImageCoordinator {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Checking for availability of coordinates.<br>
   * Проверка на доступность координат.
   */
  is (): this is { coordinator: Exclude<ImageCoordinatorItem, Undefined> } {
    const coordinator = this.props?.coordinator

    return isArray(coordinator) &&
      coordinator.length > 0 &&
      coordinator.length < 5
  }

  /**
   * Returns sizes by the input parameter of coordinates.<br>
   * Возвращает размеры по входному параметру координаты.
   */
  get (): ImageSize {
    const coordinator = this.getCoordinator()

    return {
      width: 100 - coordinator[1] - coordinator[3],
      height: 100 - coordinator[2] - coordinator[0]
    }
  }

  /**
   * Getting the adapted size for the property.<br>
   * Получение адаптированного размера для свойства.
   */
  getSize (): ImageSize<string> {
    const item = this.get()

    return {
      width: `${100 / item.width * 100}%`,
      height: `${100 / item.height * 100}%`
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
}
