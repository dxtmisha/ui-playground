import { type IconProps } from './props';
import { type IconEventLoad } from './typesBasic';
/**
 * Base class for working with icons.<br>
 * Базовый класс для работы с иконками.
 */
export declare class Icon {
    protected readonly props: IconProps;
    protected readonly classIcon: string;
    protected readonly classIconActive: string;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param classIcon class name for the main icon /<br>название класса для основной иконки
     * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
     */
    constructor(props: IconProps, classIcon?: string, classIconActive?: string);
    /**
     * Checks if the additional icon is active.<br>
     * Проверяет, активна ли дополнительная иконка.
     */
    isActive(): boolean;
    /**
     * Returns the property for the base icon.<br>
     * Возвращает свойство для базовой иконки.
     */
    getIconBind(): IconEventLoad['iconBind'];
    /**
     * Returns the property for the additional icon.<br>
     * Возвращает свойство для дополнительной иконки.
     */
    getIconActiveBind(): IconEventLoad['iconActiveBind'];
}
