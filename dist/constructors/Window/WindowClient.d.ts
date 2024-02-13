/**
 * The class stores the coordinates of the mouse click. It is used for the opening
 * animation, when the element appears from the point of click. And also for the contextmenu event.<br>
 * Класс хранит координаты нажатия мыши. Используется для анимации открытия,
 * когда элемент появляется от точки нажатия. А также для события contextmenu.
 */
export declare class WindowClient {
    protected x: number;
    protected y: number;
    /**
     * Checks if the button was pressed.<br>
     * Проверяет, было ли нажатие на кнопку.
     */
    is(): boolean;
    /**
     * Returns the X coordinate.<br>
     * Возвращает координату X.
     */
    getX(): number;
    /**
     * Returns the Y coordinate.<br>
     * Возвращает координату Y.
     */
    getY(): number;
    /**
     * Returns the shift along the X coordinate.<br>
     * Возвращает сдвиг по координате X.
     */
    getShiftX(value: number): number;
    /**
     * Returns the shift along the Y coordinate.<br>
     * Возвращает сдвиг по координате Y.
     */
    getShiftY(value: number): number;
    /**
     * Changes the coordinates.<br>
     * Изменяет координаты.
     * @param x value of X /<br>значение X
     * @param y value of Y /<br>значение Y
     */
    set(x: number, y: number): this;
    /**
     * Resets all data to initial values.<br>
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
}
