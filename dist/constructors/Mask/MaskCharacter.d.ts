import { MaskItem } from './MaskItem';
import { MaskSpecial } from './MaskSpecial';
import { MaskRubber } from './MaskRubber';
import { MaskSelection } from './MaskSelection';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskRubberItem } from './MaskRubberItem';
/**
 * Class for working with and storing input characters.<br>
 * Класс для работы и хранения вводимых символов.
 */
export declare class MaskCharacter {
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly special: MaskSpecial;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly selection: MaskSelection;
    protected value: string[];
    /**
     * Constructor
     * @param rubberItem
     * @param characterLength
     * @param special
     * @param rubber
     * @param mask
     * @param selection
     */
    constructor(rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, special: MaskSpecial, rubber: MaskRubber, mask: MaskItem, selection: MaskSelection);
    /**
     * Checks if the value is filled.<br>
     * Проверяет, заполнено ли значение.
     */
    is(): boolean;
    /**
     * Checks if the selected character was previously deleted.<br>
     * Проверяет, является ли выделенный символ ранее удаленным.
     */
    isCharDelete(): boolean;
    /**
     * Getting input characters.<br>
     * Получение вводимых символов.
     */
    get(): string[];
    /**
     * Getting the selected mask character.<br>
     * Получение выбранного символа маски.
     */
    getFocus(): string;
    /**
     * Getting the mask character by the key number of the nearest special character.<br>
     * Получение символа маски по номеру ключа ближайшего специального символа.
     */
    getImmediate(): string;
    /**
     * Getting the next mask character.<br>
     * Получение следующего символа маски.
     */
    getNext(): string;
    /**
     * Adding 1 entered character at its selection location.<br>
     * Добавление 1 введенного символа по месту его выделения.
     * @param char entered character /<br>введенный символ
     */
    add(char: string): this;
    /**
     * Deleting 1 entered character at its selection location.<br>
     * Удаление 1 введенного символа по месту его выделения.
     */
    pop(): this;
    /**
     * Resets the values to the initial values.<br>
     * Сбрасывает значения до начальных значений.
     */
    reset(): this;
    /**
     * Shifts by 1 value depending on the direction of selection change.<br>
     * Сдвигает на 1 значение в зависимости от направления изменения выделения.
     * @param status shift status /<br>статус сдвига
     */
    shift(status?: number): this;
    /**
     * Checks if there is another group of special characters ahead.<br>
     * Проверяет, если впереди другая группа специальных символов.
     */
    protected isSpecialNextAnother(): boolean;
    /**
     * Updates of the length of entered characters.<br>
     * Обновления длины введенных символов.
     */
    protected updateLength(): this;
}
