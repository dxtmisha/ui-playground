/**
 * A class for storing the length of input characters.<br>
 * Класс для хранения длины вводимых символов.
 */
export declare class MaskCharacterLength {
    protected length: number;
    /**
     * Checks if the values are filled in.<br>
     * Проверяет, заполнены ли значения.
     */
    is(): boolean;
    /**
     * Getting the length of input symbols.<br>
     * Получение длины вводимых символов.
     */
    get(): number;
    /**
     * Changing the length of input symbols.<br>
     * Изменение длины вводимых символов.
     * @param length new length /<br>новая длина
     */
    set(length: number): this;
}
