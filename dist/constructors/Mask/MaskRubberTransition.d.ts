/**
 * Class for storing and working with the transition symbol for the active group of characters.<br>
 * Класс для хранения и работы со символом перехода для активной группы символов.
 */
export declare class MaskRubberTransition {
    protected char: string;
    /**
     * Checks if the active group has a transition symbol.<br>
     * Проверяет, есть ли у активной группы символ перехода.
     */
    is(): boolean;
    /**
     * Checks if the current character is a transition character.<br>
     * Проверяет, является ли текущий символ символом перехода.
     * @param char transition symbol /<br>символ перехода
     */
    isChar(char: string): boolean;
    /**
     * Returns the current transition symbol.<br>
     * Возвращает текущий символ перехода.
     */
    get(): string;
    /**
     * Changes the transition symbol.<br>
     * Изменяет символ перехода.
     * @param char transition symbol /<br>символ перехода
     */
    set(char: string): this;
    /**
     * Resets the values to the base ones.<br>
     * Сбрасывает значения до базовых.
     */
    reset(): this;
}
