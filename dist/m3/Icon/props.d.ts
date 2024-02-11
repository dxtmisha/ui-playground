import { type PropType } from 'vue';
import { IconProps } from '../../constructors/Icon/props.ts';
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
    rounded?: 'none' | 'standard' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
    rounded: PropType<"none" | "standard" | "sm" | "md" | "lg" | "full" | "xl" | "2xl" | undefined>;
    size: PropType<"sm" | "md" | "lg" | "xs" | "xl" | undefined>;
    icon: PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    iconActive: PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    active: BooleanConstructor;
};
