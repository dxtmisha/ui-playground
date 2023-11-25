import { type ImageSize } from './typesBasic.ts'

/**
 * Class for managing calculations for a specific group.<br>
 * Класс для управления вычислениями для конкретной группы.
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
   * Checks if this object matches its name.<br>
   * Проверяет, подходит ли этот объект по его имени.
   * @param name name of the checked group /<br>название проверяемой группы
   */
  is (name: string): boolean {
    return this.name === name
  }

  /**
   If the element has a size.<br>
   * Если у элемента есть размер.
   */
  isSize (): boolean {
    return Boolean(this.size.width || this.size.width)
  }

  /**
   * Returns the physical width.<br>
   * Возвращает физическую ширину.
   */
  getWidth (): number {
    return this.size.width
  }

  /**
   * Returns the physical height.<br>
   * Возвращает физическую высоту.
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
   * Returns the maximum value allowed for scaling.<br>
   * Возвращает максимальное значение, допустимое для масштабирования.
   */
  getFactorMax (): number {
    return this.factorMax
  }

  /**
   * Updating size.width, if it is larger than the selected value.<br>
   * Обновление size.width, если она больше выбранного значения.
   * @param width value of the selected width /<br>значение выбранной ширины
   */
  makeWidth (width: number): this {
    if (width > this.size.width) {
      this.size.width = width
    }

    return this
  }

  /**
   * Updating size.height, if it is larger than the selected value.<br>
   * Обновление size.height, если она больше выбранного значения.
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
   * Changes the scaling value if it is greater than the checked value.<br>
   * Изменения значения масштабирования, если он больше проверяемой значения.
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
