import { MaskType } from './MaskType';
import { type MaskProps } from './props';
export declare class MaskRight {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param type
     */
    constructor(props: MaskProps, type: MaskType);
    /**
     * Returns whether the type is a number or mirror.<br>
     * Возвращает, является ли тип номером или зеркальным.
     */
    isEnd(): boolean;
    /**
     * Checks if the alignment value is right.<br>
     * Проверяет, является ли значение выравнивания справа.
     */
    isRight(): boolean;
}
