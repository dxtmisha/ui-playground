/**
 * The class stores the coordinates of the mouse click. It is used for the opening
 * animation, when the element appears from the point of click. And also for the contextmenu event.<br>
 * Класс хранит координаты нажатия мыши. Используется для анимации открытия,
 * когда элемент появляется от точки нажатия. А также для события contextmenu.
 */
export class WindowClient {
  protected x: number = 0
  protected y: number = 0

  /**
   * Returns the X coordinate.<br>
   * Возвращает координату X.
   */
  getX (): number {
    return this.x
  }

  /**
   * Returns the Y coordinate.<br>
   * Возвращает координату Y.
   */
  getY (): number {
    return this.y
  }

  /**
   * Returns the shift along the X coordinate.<br>
   * Возвращает сдвиг по координате X.
   */
  getShiftX (value: number): number {
    return this.x - value
  }

  /**
   * Returns the shift along the Y coordinate.<br>
   * Возвращает сдвиг по координате Y.
   */
  getShiftY (value: number): number {
    return this.y - value
  }

  /**
   * Changes the coordinates.<br>
   * Изменяет координаты.
   * @param x value of X /<br>значение X
   * @param y value of Y /<br>значение Y
   */
  set (x: number, y: number): this {
    this.x = x
    this.y = y

    return this
  }
}
