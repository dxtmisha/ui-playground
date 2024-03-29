import { type PropType } from 'vue';
import { MaskProps } from '../../constructors/Mask/props';
export declare const propsValues: {
    dir: string[];
};
export type PropsToken = {
    visible?: boolean;
    right?: boolean;
    dir?: 'ltr' | 'rtl';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<MaskProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    visible: BooleanConstructor;
    right: BooleanConstructor;
    dir: PropType<"ltr" | "rtl" | undefined>;
    type: {
        type: PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
    };
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    mask: PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
    special: {
        type: PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
    };
    match: {
        type: PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
    };
    pattern: PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
    check: PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
    fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    currency: StringConstructor;
    language: StringConstructor;
    view: {
        type: StringConstructor;
        default: string | undefined;
    };
};
