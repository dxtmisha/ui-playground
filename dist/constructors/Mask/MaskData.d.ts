import { MaskType } from './MaskType';
import { MaskBuffer } from './MaskBuffer';
import { MaskFocus } from './MaskFocus';
import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskDate } from './MaskDate';
import { MaskSpecial } from './MaskSpecial';
import { MaskMatch } from './MaskMatch';
import { MaskRubber } from './MaskRubber';
import { MaskItem } from './MaskItem';
import { MaskSelection } from './MaskSelection';
import { MaskCharacter } from './MaskCharacter';
import { MaskValueBasic } from './MaskValueBasic';
import { MaskValue } from './MaskValue';
import { MaskEmit } from './MaskEmit';
import { type ConstrValue } from '../../types/constructor';
import { type MaskElementInput } from './typesBasic';
/**
 * Class for working with behavior when entering data.<br>
 * Класс для работы с поведением при вводе данных.
 */
export declare class MaskData {
    protected readonly type: MaskType;
    protected readonly buffer: MaskBuffer;
    protected readonly focus: MaskFocus;
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly date: MaskDate;
    protected readonly special: MaskSpecial;
    protected readonly match: MaskMatch;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly selection: MaskSelection;
    protected readonly character: MaskCharacter;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly value: MaskValue;
    protected readonly emit: MaskEmit;
    protected readonly element: ConstrValue<MaskElementInput>;
    /**
     * Constructor
     * @param type
     * @param buffer
     * @param focus
     * @param rubberTransition
     * @param date
     * @param special
     * @param match
     * @param rubber
     * @param mask
     * @param selection
     * @param character
     * @param valueBasic
     * @param value
     * @param emit
     * @param element input element /<br>элемент ввода
     */
    constructor(type: MaskType, buffer: MaskBuffer, focus: MaskFocus, rubberTransition: MaskRubberTransition, date: MaskDate, special: MaskSpecial, match: MaskMatch, rubber: MaskRubber, mask: MaskItem, selection: MaskSelection, character: MaskCharacter, valueBasic: MaskValueBasic, value: MaskValue, emit: MaskEmit, element: ConstrValue<MaskElementInput>);
    /**
     * Adding new characters that can be entered by the user.<br>
     * Добавление новых вводимых символов.
     * @param selection number of the selected key /<br>номер выделенного ключа
     * @param chars a list of values that are entered by the user /<br>список вводимых значений
     * @param focus is the element focused /<br>находится ли элемент в фокусе
     */
    add(selection: number, chars: string | string[], focus?: boolean): boolean;
    /**
     * Removing selected input characters.<br>
     * Удаление выделенных вводимых символов.
     * @param start location of the start of the selected area /<br>место начала выделенной области
     * @param end location of the end of the selected area /<br>конечный место выделенной области
     * @param focus is the element focused /<br>находится ли элемент в фокусе
     */
    pop(start: number, end?: number, focus?: boolean): this;
    /**
     * Resets all values or updates to the new one.<br>
     * Сбрасывает все значения или обновляется до нового.
     * @param value new values /<br>новые значения
     */
    reset(value?: string): this;
    /**
     * Removing extra values for insertion.<br>
     * Удаление лишних значений для вставки.
     * @param chars insertion of symbols /<br>вставка символов
     */
    extra(chars: string[]): string[];
    /**
     * Restores the selection location.<br>
     * Восстанавливает место выделения.
     */
    goSelection(updateBuffer?: boolean): this;
    /**
     * Checks if the data is in the buffer. If it is, then add it.<br>
     * Проверяет, если данный в буфер. Если есть, то добавляем.
     */
    protected goBuffer(): boolean;
}
