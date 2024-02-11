import { type PropType } from 'vue';
import { IconProps } from '../../constructors/Icon/props.ts';
export declare const propsValues: {
    animationType: string[];
    variation: string[];
    shape: string[];
    size: string[];
};
export type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    variation?: 'icon' | 'payment' | 'avatar' | 'country';
    shape?: 'rect' | 'circle' | 'box';
    size?: '12' | '16' | '20' | '24' | '32';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<IconProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    turn: BooleanConstructor;
    disabled: BooleanConstructor;
    hide: BooleanConstructor;
    animationType: {
        type: PropType<"type1" | "type2" | undefined>;
        default: "type1" | "type2" | undefined;
    };
    animationShow: BooleanConstructor;
    overlay: BooleanConstructor;
    dynamic: BooleanConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    high: BooleanConstructor;
    variation: {
        type: PropType<"icon" | "payment" | "avatar" | "country" | undefined>;
        default: "icon" | "payment" | "avatar" | "country" | undefined;
    };
    shape: {
        type: PropType<"circle" | "rect" | "box" | undefined>;
        default: "circle" | "rect" | "box" | undefined;
    };
    size: {
        type: PropType<"12" | "16" | "20" | "24" | "32" | undefined>;
        default: "12" | "16" | "20" | "24" | "32" | undefined;
    };
    icon: PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    iconActive: PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    active: BooleanConstructor;
};
