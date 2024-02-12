import { Icon } from './Icon.ts';
import { type IconProps } from './props.ts';
/**
 * Base Icon class for working in Vue.<br>
 * Базовый класс Icon для работы во Vue.
 */
export declare class IconRef {
    protected readonly item: Icon;
    readonly active: import("vue").ComputedRef<boolean>;
    readonly iconBind: import("vue").ComputedRef<import("../../types/constructor.ts").ConstrItem | undefined>;
    readonly iconActiveBind: import("vue").ComputedRef<import("../../types/constructor.ts").ConstrItem | undefined>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param classIcon class name for the main icon /<br>название класса для основной иконки
     * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
     */
    constructor(props: IconProps, classIcon?: string, classIconActive?: string);
}
