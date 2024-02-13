import { type PropType } from 'vue';
import { ProgressProps } from '../../constructors/Progress/props';
export declare const propsValues: {
    indeterminate: string[];
    position: string[];
};
export type PropsToken = {
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom';
    dense?: boolean;
    inverse?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ProgressProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    linear: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    circular: BooleanConstructor;
    indeterminate: {
        type: PropType<"type1" | "type2" | "type3" | undefined>;
        default: "type1" | "type2" | "type3" | undefined;
    };
    position: {
        type: PropType<"top" | "bottom" | undefined>;
        default: "top" | "bottom" | undefined;
    };
    dense: BooleanConstructor;
    inverse: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
    visible: BooleanConstructor;
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
};
