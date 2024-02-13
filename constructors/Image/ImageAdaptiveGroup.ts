import { EventItem } from '../../classes/EventItem'

import { ImageAdaptiveItem } from './ImageAdaptiveItem'
import { ImageCalculationList } from './ImageCalculationList'

/**
 * Class for working with image scaling according to the physical size of the object in the image.<br>
 * Класс для работы с масштабированием изображения по физическому размеру объекта на изображении.
 */
export class ImageAdaptiveGroup {
  protected static objects: ImageAdaptiveItem[] = []
  protected static objectsAdaptive: ImageAdaptiveItem[] = []

  private static cache: string[] = []

  protected static event?: EventItem<Window, Event, any>
  protected static time?: number

  /**
   * Checks if an element is present in the list.<br>
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static is (item: ImageAdaptiveItem): boolean {
    return this.objects.findIndex(itemValue => itemValue === item) !== -1
  }

  /**
   * Adding a new element for tracking.<br>
   * Добавление нового элемента для отслеживания.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static add (item: ImageAdaptiveItem): void {
    if (!this.is(item)) {
      this.objects.push(item)
      this.make()
    }
  }

  /**
   * Removal of the element.<br>
   * Удаления элемента.
   * @param item object for working with images /<br>объект для работы с изображениями
   */
  static remove (item: ImageAdaptiveItem): void {
    const key = this.objects.findIndex(itemValue => itemValue === item)

    if (key !== -1) {
      this.objects.splice(key, 1)
      this.cache = []
    }

    this.make()
  }

  /**
   * Resets all cached data and rereads scaling for all elements.<br>
   * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
   */
  static reset (): void {
    this.cache = []
    this.start()
  }

  /**
   * Starts the calculation process or turns it off if there are no active elements in the list.<br>
   * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
   */
  static make (): void {
    if (
      this.event &&
      this.objects.length < 1
    ) {
      this.event.stop()
      this.event = undefined
    } else if (this.objects.length > 0) {
      this.event = new EventItem(window, ['scroll-sync'], () => this.start())
        .start()

      this.start()
    }
  }

  /**
   * Returns a list of elements that are visible or constantly being calculated.<br>
   * Возвращает список элементов, которые видны или постоянно вычисляются.
   */
  protected static getItemIdByVisible (): string[] {
    const visible: string[] = []

    this.objectsAdaptive.forEach(item => {
      if (item.isVisible()) {
        visible.push(item.getId())
      }
    })

    return visible
  }

  /**
   * Method for starting the calculation of scaling elements in the list.<br>
   * Метод для запуска вычисления масштабирования элементов в списке.
   */
  protected static start (): void {
    if (this.isAdaptive()) {
      this.makeAdaptive()

      const visible = this.getItemIdByVisible()

      if (this.isCache(visible)) {
        this.cache = visible

        this.makeSize()
        this.makePercent()
        this.makeFactorMax()
        this.makeCallback()
      }
    } else {
      this.event?.stop()
    }
  }

  /**
   * Updates the list of elements available for calculation. These are the
   * elements that are close to the border of the visible area.<br>
   * Обновляет список доступных для вычисления элементов. Это те элементы,
   * которые близки к границе видимой области.
   */
  protected static makeAdaptive (): void {
    this.objectsAdaptive = []
    this.objects.forEach(item => {
      item.make()

      if (item.isBeyond()) {
        this.objectsAdaptive.push(item)
      }
    })
  }

  /**
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.<br>
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  protected static makeSize (): void {
    ImageCalculationList.reset()

    this.objectsAdaptive.forEach(item => {
      const element = item.getElement()

      if (
        element &&
        item.isVisible()
      ) {
        ImageCalculationList.get(item.getGroup())
          .makeWidth(item.getWidth())
          .makeHeight(item.getHeight())
          .makeOffsetWidth(element.offsetWidth)
          .makeOffsetHeight(element.offsetHeight)
      }
    })
  }

  /**
   * Calculation of the basic scaling of an element without taking into account other elements.<br>
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  protected static makePercent (): void {
    if (ImageCalculationList.isSize()) {
      this.objectsAdaptive.forEach(item => {
        const element = item.getElement()
        const calculation = ImageCalculationList.get(item.getGroup())

        if (element) {
          const width = calculation.getWidth()
          const height = calculation.getHeight()

          item.setPercent(
            item.getWidth() * (width ? 1 / width : 0) * (calculation.getOffsetWidth() / element.offsetWidth),
            item.getHeight() * (height ? 1 / height : 0) * (calculation.getOffsetHeight() / element.offsetHeight)
          )
        }
      })
    }
  }

  /**
   * Calculation of the largest element to determine the base size.
   * This parameter is used for scaling other elements,
   * reducing them to the necessary proportion.<br>
   * Вычисление самого большого элемента для определения базового размера.
   * Этот параметр используется для масштабирования других элементов,
   * уменьшая их до нужной пропорции.
   */
  protected static makeFactorMax (): void {
    if (ImageCalculationList.isSize()) {
      this.objectsAdaptive.forEach(item => {
        if (item.isVisible()) {
          ImageCalculationList.get(item.getGroup())
            .makeFactorMax(item.getFactor())
        }
      })
    }
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  protected static makeCallback (): void {
    this.objectsAdaptive.forEach(item => {
      item.makeCallback()
    })
  }

  /**
   * Checks if there is an active element at the moment.<br>
   * Проверяет, есть ли в текущий момент активный элемент.
   */
  private static isAdaptive (): boolean {
    return !!this.objects.find(item => item.is())
  }

  /**
   * Checks whether the composition of visible elements has changed.<br>
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of indices of visible elements /<br>список индексов видимых элементов
   */
  private static isCache (visible: string[]): boolean {
    return this.cache.join('|') !== visible.join('|')
  }
}
