import { EventItem } from '../../../classes/EventItem.ts'

import { ImageAdaptiveItem } from './ImageAdaptiveItem.ts'
import { ImageCalculationList } from './ImageCalculationList.ts'

/**
 * Class for working with image scaling.<br>
 * Класс для работы с масштабированием изображения.
 */
export class ImageAdaptiveGroup {
  protected static objects: ImageAdaptiveItem[] = []
  protected static objectsAdaptive: ImageAdaptiveItem[] = []

  private static cache: string[] = []

  protected static event?: EventItem<Window, Event, any>
  protected static time?: number

  /**
   * Checks if the object is present in the calculation list.<br>
   * Проверяет, присутствует ли объект в списке вычислений.
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
   * Update the data.<br>
   * Обновить данные.
   */
  static reset (): void {
    this.cache = []
    this.start()
  }

  /**
   * Starting or stopping tracking the image size.<br>
   * Запуск или отключение слежения за размером изображения.
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
   * Updates the list of visible values and returns this list.<br>
   * Обновляет список видимых значений и возвращает этот список.
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
   * Method for checking the conditions for starting the update of parameters.<br>
   * Метод проверки условий запуска обновления параметров.
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
   * Updates the list of active records.<br>
   * Обновляет список активных записей.
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
   * Updates the physical and virtual sizes.<br>
   * Обновляет физические и виртуальные размеры.
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
   * Change of the output size.<br>
   * Изменение выводимого размера.
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
   * Changes of the scaling value.<br>
   * Изменения масштабирования значения.
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
   * Checks if the composition of visible values has changed.<br>
   * Проверяет, изменился ли состав видимых значений.
   * @param visible list of indexes of visible values /<br>список индексов видимых значений
   */
  private static isCache (visible: string[]): boolean {
    return this.cache.join('|') !== visible.join('|')
  }

  /**
   * Checks if there is an active element at the moment.<br>
   * Проверяет, есть ли в текущий момент активный элемент.
   * @private
   */
  private static isAdaptive (): boolean {
    return !!this.objects.find(item => item.is())
  }
}
