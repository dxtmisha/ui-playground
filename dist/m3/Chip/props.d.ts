import { type PropType } from 'vue';
import { ChipProps } from '../../constructors/Chip/props';
export declare const propsValues: {
    adaptive: string[];
    height: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
    adaptive?: 'icon' | 'sm' | 'md';
    height?: 'sm' | 'md' | 'lg';
    outlined?: boolean;
    elevated?: boolean;
    input?: boolean;
    assist?: boolean;
    filter?: boolean;
    suggestion?: boolean;
    avatar?: boolean;
    dragged?: boolean;
    palette?: 'primary' | 'secondary' | 'tertiary' | 'red' | 'green' | 'error' | 'neutral' | 'neutralVariant';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ChipProps, keyof PropsToken>;
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
    adaptive: PropType<"icon" | "sm" | "md" | undefined>;
    height: {
        type: PropType<"sm" | "md" | "lg" | undefined>;
        default: "sm" | "md" | "lg" | undefined;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    elevated: BooleanConstructor;
    input: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    assist: BooleanConstructor;
    filter: BooleanConstructor;
    suggestion: BooleanConstructor;
    avatar: BooleanConstructor;
    dragged: BooleanConstructor;
    palette: PropType<"error" | "primary" | "secondary" | "tertiary" | "red" | "green" | "neutral" | "neutralVariant" | undefined>;
    tag: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    iconTrailing: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    icon: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
