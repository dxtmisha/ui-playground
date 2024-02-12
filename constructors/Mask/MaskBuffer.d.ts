/**
 * Class for temporary storage of entered symbol to prevent losing input place during fast input.<br>
 * Класс для временного хранения вводимого символа, чтобы не потерять место ввода при быстром вводе.
 */
export declare class MaskBuffer {
    protected chars: string[];
    protected start: boolean;
    /**
     * Checks for records in the buffer.
     * Проверяет наличие записей в буфере.
     */
    is(): boolean;
    /**
     * Gets a list of all records in the buffer.<br>
     * Получает список всех записей в буфере.
     */
    get(): string[];
    /**
     * Inserts a new input symbol into the buffer.<br>
     * Вставляет новый символ ввода в буфер.
     * @param key symbol that needs to be added /<br>символ, который необходимо добавить
     */
    add(key: string): this;
    /**
     * Starts buffering data if data is being processed.<br>
     * Начинает буферизировать данные, если в обработке идут данные.
     * @param key symbol that needs to be added /<br>символ, который необходимо добавить
     */
    go(key: string): boolean;
    /**
     * Starts buffering data
     * Начинает буферизировать данные.
     */
    goStart(): this;
    /**
     * Resets all values to the original.<br>
     * Сбрасывает все значения до исходного.
     */
    reset(): this;
    /**
     * Resets the saved values.<br>
     * Сбрасывает сохраненные значения.
     */
    resetChars(): this;
}
