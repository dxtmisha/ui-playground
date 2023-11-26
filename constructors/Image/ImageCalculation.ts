import { type ImageSize } from './typesBasic.ts'

/**
 * A class for storing data for adaptive computation of image scaling for a specific group.<br>
 * Класс для хранения данных для адаптивного вычисления масштабирования изображения для конкретной группы.
 */
export class ImageCalculation {
  protected factorMax: number = 1

  protected size: ImageSize = {
    width: 0,
    height: 0
  }

  protected offset: ImageSize = {
    width: 7680,
    height: 7680
  }

  /**
   * Constructor
   * @param name group name /<br>название группы
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly name: string
  ) {
  }

  /**
   * Checks whether the element belongs to the current group.<br>
   * Проверяет, принадлежит ли элемент к текущей группе.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  is (name: string): boolean {
    return this.name === name
  }

  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.<br>
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  isSize (): boolean {
    return Boolean(this.size.width || this.size.width)
  }

  /**
   * Returns the maximum physical width.<br>
   * Возвращает максимальную физическую ширину.
   */
  getWidth (): number {
    return this.size.width
  }

  /**
   * Returns the maximum physical height.<br>
   * Возвращает максимальную физическую высоту.
   */
  getHeight (): number {
    return this.size.height
  }

  /**
   * Returns the actual width.<br>
   * Возвращает фактическую ширину.
   */
  getOffsetWidth (): number {
    return this.offset.width
  }

  /**
   * Returns the actual height.<br>
   * Возвращает фактическую высоту.
   */
  getOffsetHeight (): number {
    return this.offset.height
  }

  /**
   * Returns the maximum multiplier for scaling.<br>
   * Возвращает максимальный множитель для масштабирования.
   */
  getFactorMax (): number {
    return this.factorMax
  }

  /**
   * Updating size.width, if it is less than the selected value.<br>
   * Обновление size.width, если она меньше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeWidth (width: number): this {
    if (width > this.size.width) {
      this.size.width = width
    }

    return this
  }

  /**
   * Updating size.height, if it is less than the selected value.<br>
   * Обновление size.height, если она меньше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeHeight (height: number): this {
    if (height > this.size.height) {
      this.size.height = height
    }

    return this
  }

  /**
   * Updating offset.width, if it is larger than the selected value.<br>
   * Обновление offset.width, если она больше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeOffsetWidth (width: number): this {
    if (width < this.offset.width) {
      this.offset.width = width
    }

    return this
  }

  /**
   * Updating offset.height, if it is larger than the selected value.<br>
   * Обновление offset.height, если она больше выбранного значения.
   * @param height value of the selected height /<br>значение выбранной высоты
   */
  makeOffsetHeight (height: number): this {
    if (height < this.offset.height) {
      this.offset.height = height
    }

    return this
  }

  /**
   * Changes the multiplier value if it is greater than the checked value.<br>
   * Изменяет значение множителя, если оно больше проверяемого значения.
   * @param value values for verification /<br>значения для проверки
   */
  makeFactorMax (value: number): this {
    if (value < this.factorMax) {
      this.factorMax = value
    }

    return this
  }

  /**
   * Restoring the value to its original state.<br>
   * Восстановление значения в изначальное состояние.
   */
  reset (): this {
    this.factorMax = 1

    this.size = {
      width: 0,
      height: 0
    }

    this.offset = {
      width: 7680,
      height: 7680
    }

    return this
  }
}
