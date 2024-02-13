import { CacheItem } from '../../classes/CacheItem';
import { type InputCheckItem, type InputCheckList } from '../Input/useInputCheck';
import { MaskType } from './MaskType';
import { MaskSpecial } from './MaskSpecial';
import { MaskDate } from './MaskDate';
import { type InputPatternItemOrFunction, type InputPatternList } from '../Input/typesBasic';
import { type MaskProps } from './props';
/**
 * A class for obtaining data to verify input data by its group.<br>
 * Класс для получения данных для проверки вводимых данных по его группе.
 */
export declare class MaskPattern {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly special: MaskSpecial;
    protected inputs: CacheItem<InputCheckList>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type
     * @param date
     * @param special
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, special: MaskSpecial);
    /**
     * Checks if there is a global check of input data.<br>
     * Проверяет, есть ли глобальная проверка вводимых данных.
     */
    isCheck(): boolean;
    /**
     * Returns data for verification by the group name.<br>
     * Возвращает данные для проверки по названию группы.
     * @param groupName group for checking /<br>группа для проверки
     */
    get(groupName: string): InputPatternItemOrFunction | undefined;
    /**
     * Returns a list of all available properties by groups.<br>
     * Возвращает список всех доступных свойств по группам.
     */
    getList(): InputPatternList;
    /**
     * Returns values for verification.<br>
     * Возвращает значения для проверки.
     * @param groupName group for checking /<br>группа для проверки
     */
    getPattern(groupName?: string): InputPatternItemOrFunction | undefined;
    /**
     * Returns global data for input verification.<br>
     * Возвращает глобальные данные для проверки вводимых данных.
     */
    getCheck(): InputPatternItemOrFunction | undefined;
    /**
     * Returns an object for validation by its group.<br>
     * Возвращает объект для проверки на валидность по его группе.
     * @param groupName group for checking /<br>группа для проверки
     */
    getInput(groupName?: string): InputCheckItem | undefined;
    /**
     * Returns a list of objects for validation, divided by group name.<br>
     * Возвращает список объектов для проверки на валидность, разделенных по названию группы.
     */
    getInputList(): InputCheckList;
    /**
     * Returns a list of basic data for verification.<br>
     * Возвращает список базовых данных для проверки.
     */
    protected getByType(): InputPatternList;
    /**
     * Initializes a list of input objects for validation.<br>
     * Инициализирует список объектов ввода для проверки на валидность.
     */
    protected initInput(): InputCheckList;
}
