import { GeoIntl } from '../../classes/GeoIntl';
import { MaskType } from './MaskType';
import { MaskRubberItem } from './MaskRubberItem';
import { type MaskProps } from './props';
import { type MaskGroup, type MaskSpecialList, MaskSpecialProp } from './typesBasic';
/**
 * A class for working with a formatted number mask.<br>
 * Класс для работы с форматированной маской числа.
 */
export declare class MaskFormat {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type
     * @param rubberItem
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem);
    /**
     * Checks if there is a group for the remainder.<br>
     * Проверяет, есть ли группа для остатка.
     */
    isFractionRubber(): boolean;
    /**
     * Gets an object for working with number formatting.<br>
     * Получает объект для работы с форматированием числа.
     */
    getIntl(): GeoIntl;
    /**
     * Getting the number of digits in the remainder.<br>
     * Получение количества чисел в остатке.
     */
    getFraction(): number;
    /**
     * Returns masks for a number or price.<br>
     * Возвращает маски для числа или цены.
     */
    getMask(): string[];
    /**
     * Returns the settings of special characters for input.<br>
     * Возвращает настройки специальных символов для ввода.
     */
    getSpecial(): MaskSpecialProp;
    /**
     * Getting instructions for forming a rubber mask.<br>
     * Получение инструкции для формирования резиновой маски.
     */
    getRubber(): MaskSpecialList;
    /**
     * Returns the formatted value.<br>
     * Возвращает отформатированное значение.
     * @param value a string with a filled date /<br>строка с заполненной датой
     */
    getValueStandard(value: MaskGroup): string;
    /**
     * Returns the data as a formatted number.<br>
     * Возвращает данные в виде отформатированного числа.
     */
    getNumber(): string;
    /**
     * Returns the data as a formatted price with a currency symbol.<br>
     * Возвращает данные в виде отформатированной цены с символом валюты.
     */
    getCurrency(): string;
    /**
     * Returns a list of delimiter characters for transitioning to the drop group.<br>
     * Возвращает список символов-разделителей для перехода в группу дроп.
     */
    getDecimal(): string[];
    /**
     * Returns a list of symbols for output by group name.<br>
     * Возвращает список символов для вывода по названию группы.
     */
    getView(): string;
    /**
     * Returns a string with values for obtaining a formatted value.<br>
     * Возвращает строку со значениями для получения отформатированного значения.
     */
    protected getNumberForString(): string;
}
