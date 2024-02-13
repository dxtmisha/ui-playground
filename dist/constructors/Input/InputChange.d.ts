/**
 * Class for determining whether the data has been changed.<br>
 * Класс для определения, были ли изменены данные.
 */
export declare class InputChange {
    protected change: boolean;
    /**
     * Returns values.<br>
     * Возвращает значения.
     */
    get(): boolean;
    /**
     * Changes values.<br>
     * Изменяет значения.
     * @param change values for change /<br>значения для изменения
     */
    set(change: boolean): this;
    /**
     * Transitions to editing state.<br>
     * Переходит в состояние редактирования.
     */
    toChange(): this;
    /**
     * Restores the original value.<br>
     * Восстанавливает первоначальное значение.
     */
    reset(): this;
}
