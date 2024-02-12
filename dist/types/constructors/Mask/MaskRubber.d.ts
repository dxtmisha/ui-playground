import { MaskType } from './MaskType.ts';
import { MaskRubberItem } from './MaskRubberItem.ts';
import { MaskRubberTransition } from './MaskRubberTransition.ts';
import { MaskSpecial } from './MaskSpecial.ts';
import { MaskMatch } from './MaskMatch.ts';
import { MaskFormat } from './MaskFormat.ts';
import { type MaskProps } from './props.ts';
import { type MaskGroup, type MaskSpecialItem, type MaskSpecialList } from './typesBasic.ts';
import { CacheItem } from '../../classes/CacheItem.ts';
/**
 * Class for working with the rubber type.<br>
 * Класс для работы с резиновым типом.
 */
export declare class MaskRubber extends CacheItem<MaskSpecialList> {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly special: MaskSpecial;
    protected readonly match: MaskMatch;
    protected readonly format: MaskFormat;
    /**
     * Constructor
     * @param props base data /<br>базовые данные
     * @param type
     * @param rubberItem
     * @param rubberTransition
     * @param special
     * @param match
     * @param format
     *
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, rubberTransition: MaskRubberTransition, special: MaskSpecial, match: MaskMatch, format: MaskFormat);
    /**
     * Checks if the selected group is rubber.<br>
     * Проверяет, является ли выбранная группа резиновой.
     * @param groupName group name /<br>название группы
     */
    is(groupName: string): boolean;
    /**
     * Checks if the symbol is a transition.<br>
     * Проверяет, является ли символ перехода.
     * @param char checkable symbol /<br>проверяемая переменная
     */
    isTransition(char: string): boolean;
    /**
     * Checks if the selected group has data and whether it is rubber.<br>
     * Проверяет, есть ли данные у выбранной группы и является ли она резиновой.
     * @param data values for verification /<br>значения для проверки
     * @param groupName group name /<br>название группы
     */
    isValue(data: MaskGroup, groupName: string): boolean;
    /**
     * Getting properties for the rubber group.<br>
     * Получение свойства для резиновой группы.
     * @param groupName group name /<br>название группы
     */
    get(groupName: string): MaskSpecialItem | undefined;
    /**
     * Getting a list of rubber groups.<br>
     * Получение списка резиновых групп.
     */
    getList(): MaskSpecialList;
    /**
     * Getting a list of transition symbols.<br>
     * Получение списка символов перехода.
     */
    getTransitionList(): string[];
    /**
     * Updates the group of rubber symbols if all conditions are met and returns true.<br>
     * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
     * @param data values for verification /<br>значения для проверки
     * @param groupName group name /<br>название группы
     * @param char symbol for checking /<br>символ для проверки
     */
    update(data: MaskGroup, groupName: string, char: string): boolean;
    /**
     * Reduces the length of the entered symbol by its group.<br>
     * Уменьшает длину вводимого символа по его группе.
     * @param groupName group name /<br>название группы
     */
    pop(groupName: string): boolean;
    /**
     * Resets all states of all groups to the initial one.<br>
     * Сбрасывает все состояния всех групп до начального.
     */
    reset(): this;
    /**
     * Processes data to get an object to work with elastic groups.<br>
     * Обрабатывает данные для получения объекта для работы с резиновыми группами.
     */
    protected initList(): MaskSpecialList;
}
