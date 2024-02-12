import { CacheItem } from '../../classes/CacheItem.ts';
import { MaskType } from './MaskType.ts';
import { MaskRubberItem } from './MaskRubberItem.ts';
import { MaskDate } from './MaskDate.ts';
import { MaskCharacterLength } from './MaskCharacterLength.ts';
import { MaskSpecial } from './MaskSpecial.ts';
import { MaskFormat } from './MaskFormat.ts';
import { type MaskProps } from './props.ts';
import { type MaskList, type MaskSpecialInfo } from './typesBasic.ts';
/**
 * Class for working with a mask.<br>
 * Класс для работы с маской.
 */
export declare class MaskItem extends CacheItem<string[]> {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    protected info: CacheItem<MaskSpecialInfo[]>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type
     * @param rubberItem
     * @param characterLength
     * @param date
     * @param format
     * @param special
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, date: MaskDate, format: MaskFormat, special: MaskSpecial);
    /**
     * Returns the mask symbol by its index.<br>
     * Возвращает символ маски по его индексу.
     * @param index index of the symbol’s location /<br>индекс расположения символа
     */
    get(index: number): string;
    /**
     * Returns an array with information about the location of all special characters.<br>
     * Возвращает массив с информацией о расположении всех специальных символов.
     */
    getInfo(): MaskSpecialInfo[];
    /**
     * Returns information about the selection location.<br>
     * Возвращает информацию о месте выделения.
     * @param selection
     */
    getInfoBySelection(selection: number): MaskSpecialInfo;
    /**
     * Returns the current mask.<br>
     * Возвращает текущую маску.
     */
    getList(): string[];
    /**
     * Returns the location number for replacement by its input symbol.<br>
     * Возвращает номер нахождения для замены по его символу ввода.
     * @param char input symbol /<br>символ ввода
     * @param selection minimum index for search <br>минимальный индекс для поиска
     */
    getByChar(char: string, selection?: number): number;
    /**
     * Returns the length of the active mask.<br>
     * Возвращает длину активной маски.
     */
    getLength(): number;
    /**
     * Returns the length of the mask or the maximum length of masks if there are several.<br>
     * Возвращает длину маски или максимальную длину масок, если их несколько.
     */
    getMaxLength(): number;
    /**
     * Returns the length of only special characters.<br>
     * Возвращает длину только из специальных символов.
     */
    getLengthBySpecial(): number;
    /**
     * Returns how many special characters were highlighted.<br>
     * Возвращает, сколько специальных символов было выделено.
     * @param start start of selection /<br>начало выделения
     * @param end end of selection /<br>конец выделения
     */
    getQuantity(start: number, end: number): number;
    /**
     * Returns data for cache to check for changes.<br>
     * Возвращает данные для кэша для проверки на изменения.
     */
    getComparison(): any[];
    /**
     * Returns a list of masks.<br>
     * Возвращает список масок.
     */
    protected getMask(): MaskList;
    /**
     * Returns the active mask.<br>
     * Возвращает активную маску.
     */
    protected getMaskActive(): string;
    /**
     * Returns the number of special characters in the current mask.<br>
     * Возвращает количество специальных символов в текущей маске.
     */
    protected getBasic(): string[];
    /**
     * Returns the number of special characters in the current mask.<br>
     * Возвращает количество специальных символов в текущей маске.
     * @param mask selected mask /<br>выбранная маска
     */
    protected getSpecialLength(mask: string): number;
    /**
     * Generates a mask by type.<br>
     * Генерирует маску по типу.
     */
    protected initMask(): string[];
    /**
     * Generates information about special characters.<br>
     * Генерирует информацию о специальных символах.
     */
    protected initInfo(): MaskSpecialInfo[];
}
