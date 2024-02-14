import { CacheItem } from '../../classes/CacheItem';
import { MaskType } from './MaskType';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { MaskItem } from './MaskItem';
import { MaskSpecial } from './MaskSpecial';
import { MaskValueBasic } from './MaskValueBasic';
import { type MaskGroup, type MaskGroupItem } from './typesBasic';
/**
 * Class for transforming the entered data into the final result.<br>
 * Класс для преобразования введенных данных в конечный результат.
 */
export declare class MaskValue {
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly valueBasic: MaskValueBasic;
    protected info: CacheItem<MaskGroup>;
    protected valueFinal: CacheItem<string>;
    /**
     * Constructor
     * @param type
     * @param date
     * @param format
     * @param mask
     * @param special
     * @param valueBasic
     */
    constructor(type: MaskType, date: MaskDate, format: MaskFormat, mask: MaskItem, special: MaskSpecial, valueBasic: MaskValueBasic);
    /**
     * Checks if the mask is fully filled.<br>
     * Проверяет, полностью ли заполнена маска.
     */
    isFull(): boolean;
    /**
     * Checks if the mask is fully filled by length.<br>
     * Проверяет, полностью ли заполнена маска по длине.
     */
    isEnd(): boolean;
    /**
     * Checks if the values are fully filled in for the group.<br>
     * Проверяет, полностью ли заполнены значения по группе.
     * @param groupName group name /<br>название группы
     */
    isFullByGroup(groupName: string): boolean;
    /**
     * Getting the final value for export.<br>
     * Получение конечного значения для экспорта.
     */
    get(): string;
    /**
     * Getting full information for global verification.<br>
     * Получение полной информации для глобальной проверки.
     */
    getForCheck(): MaskGroupItem;
    /**
     * Receiving a list with information about standard values.<br>
     * Получение списка с информацией о стандартных значениях.
     */
    getInfo(): MaskGroup;
    /**
     * Getting information for a specific group.<br>
     * Получение информации для конкретной группы.
     * @param groupName group name /<br>название группы
     */
    getInfoItem(groupName: string): MaskGroupItem | undefined;
    /**
     * Checks if there is a value by the key number in the basic values.<br>
     * Проверяет, есть ли значение по номеру ключа в базовых значениях.
     * @param index key number /<br>номер ключа
     */
    protected isStandard(index: number): boolean;
    /**
     * Adding a new character to the list, divided by groups, if it is not there,
     * and returning the property of the given group.<br>
     * Добавление нового символа в список, разделенный по группам, если его там нет,
     * и возвращение свойства данной группы.
     * @param data data for verification /<br>данные для проверки
     * @param groupName group name /<br>название группы
     */
    protected add(data: MaskGroup, groupName: string): MaskGroupItem;
    /**
     * Initialization of the list with information about standard values.<br>
     * Инициализация списка с информацией о стандартных значениях.
     */
    protected initInfo(): MaskGroup;
    protected initValue(): string;
}
