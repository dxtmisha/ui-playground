import { MaskSpecial } from './MaskSpecial.ts';
import { MaskItem } from './MaskItem.ts';
/**
 * Class for working with the character input location.<br>
 * Класс для работы с местом ввода символа.
 */
export declare class MaskSelection {
    protected readonly special: MaskSpecial;
    protected readonly mask: MaskItem;
    protected value: number;
    protected immediate: number;
    protected shift: boolean;
    /**
     * Constructor
     * @param special
     * @param mask
     */
    constructor(special: MaskSpecial, mask: MaskItem);
    /**
     * Getting the selection key number.<br>
     * Получение номера ключа выделения.
     */
    get(): number;
    /**
     * Returns the selection number for the first element that is a special symbol.
     * Возвращает номер выделения для первого элемента, являющегося специальным символом.
     */
    getFirst(): number;
    /**
     * Getting the current key of the selected character.<br>
     * Получение текущего ключа выделенного символа.
     */
    getFocus(): number;
    /**
     * Getting the next key of the selected character.<br>
     * Получение следующего ключа выделенного символа.
     */
    getNext(): number;
    /**
     * Getting the previous key of the selected symbol.<br>
     * Получение предыдущего ключа выделенного символа.
     */
    getPrevious(): number;
    /**
     * Getting the key number of the nearest special character.<br>
     * Получение номера ключа ближайшего специального символа.
     */
    getImmediate(): number;
    /**
     * Getting the number of the key shifted to the left direction.
     * Получение номера ключа, сдвинутого в левом направлении.
     */
    getShift(): number;
    /**
     * Changing the selection key number.<br>
     * Изменение номера ключа выделения.
     * @param selection selection number /<br>номер выделения
     */
    set(selection: number): this;
    /**
     * Changes the selection key number according to the mask structure.<br>
     * Изменяет номер ключа выделения по структуре маски.
     * @param selection selection number /<br>номер выделения
     * @param focus is the element in focus /<br>элемент в фокусе ли
     */
    setByMask(selection: number, focus?: boolean): this;
    /**
     * Changing the selection key for the nearest special character.<br>
     * Изменение ключа выделения для ближайшего специального символа.
     * @param immediate selection key number /<br>номер ключа выделения
     */
    setImmediate(immediate: number): this;
    /**
     * Turning shift on or off.<br>
     * Включение или отключение сдвига.
     * @param shift value for shift /<br>значение для сдвига
     */
    setShift(shift: boolean): this;
    /**
     * Resets the selection key for the nearest special character to the selection location.<br>
     * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
     */
    resetImmediate(): this;
    /**
     * Move the selection location back by 1 step.
     * Передвигаем место выделения назад на 1 шаг.
     */
    goBack(): this;
    /**
     * Move the selection location forward by 1 step.
     * Передвигаем место выделения вперед на 1 шаг.
     */
    goNext(): this;
    /**
     * Getting the key number at the selection location.<br>
     * Получение номера ключа по месту выделения.
     * @param selection selection location /<br>место выделения
     */
    protected getCharacter(selection: number): number;
}
