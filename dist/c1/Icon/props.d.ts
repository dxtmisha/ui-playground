import { type PropType } from 'vue';
import { IconProps } from '../../constructors/Icon/props';
export declare const propsValues: {
    animationType: string[];
    rounded: string[];
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
    rounded?: 'none' | 'standard' | 'sm' | 'md' | 'lg' | 'full';
    size?: 'xs' | 'sm' | 'md' | 'lg';
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
    rounded: {
        type: PropType<"full" | "sm" | "none" | "standard" | "md" | "lg" | undefined>;
        default: "full" | "sm" | "none" | "standard" | "md" | "lg" | undefined;
    };
    size: {
        type: PropType<"sm" | "md" | "lg" | "xs" | undefined>;
        default: "sm" | "md" | "lg" | "xs" | undefined;
    };
    icon: PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    iconActive: PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    active: BooleanConstructor;
};
