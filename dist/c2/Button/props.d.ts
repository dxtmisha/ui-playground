import { type PropType } from 'vue';
import { ButtonProps } from '../../constructors/Button/props.ts';
export declare const propsValues: {
    adaptive: string[];
    size: string[];
    intent: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
    adaptive?: 'icon';
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'x';
    outline?: boolean;
    link?: boolean;
    intent?: 'positive' | 'informative' | 'negative' | 'neutral' | 'default';
    primary?: boolean;
    secondary?: boolean;
    ghost?: boolean;
    palette?: 'carmine' | 'iris' | 'redfish' | 'goldenrod' | 'asparagus' | 'slate' | 'gray' | 'alpha' | 'pistachio' | 'mint' | 'jade' | 'teal' | 'celestial' | 'indigo' | 'orchid' | 'cerise';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    adaptive: PropType<"icon" | undefined>;
    size: {
        type: PropType<"x" | "sm" | "md" | "lg" | "xl" | "xs" | undefined>;
        default: "x" | "sm" | "md" | "lg" | "xl" | "xs" | undefined;
    };
    outline: BooleanConstructor;
    link: BooleanConstructor;
    intent: {
        type: PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
        default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    secondary: BooleanConstructor;
    ghost: BooleanConstructor;
    palette: PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
    tag: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
    iconTrailing: PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
    icon: PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
