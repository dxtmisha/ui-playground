import { type PropType } from 'vue';
import { type UseLabelProps } from '../uses/ref/useLabel';
import { type UseIconTrailingProps } from '../Icon/useIconRef';
import { type UseProgressProp } from '../Progress/useProgressRef';
import { type UseEnabledProps } from '../uses/ref/useEnabled';
import { type UseEventClickProps } from '../uses/ref/useEventClick';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ButtonProps = UseLabelProps & UseIconTrailingProps & UseProgressProp & UseEnabledProps & UseEventClickProps & {
    tag?: 'button' | 'a' | 'span' | string;
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsButton: ButtonProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsButton: {
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    tag: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: PropType<boolean | import("../Progress/props").ProgressProps | undefined>;
    iconTrailing: PropType<string | import("../Icon/props").IconProps | undefined>;
    icon: PropType<string | import("../Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
