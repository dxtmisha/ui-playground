import { type PropType } from 'vue';
import { type UseLabelProps } from '../uses/ref/useLabel.ts';
import { type UseIconTrailingProps } from '../Icon/useIconRef.ts';
import { type UseProgressProp } from '../Progress/useProgressRef.ts';
import { type UseEnabledProps } from '../uses/ref/useEnabled.ts';
import { type UseEventClickProps } from '../uses/ref/useEventClick.ts';
import { type ButtonProps } from '../Button/props.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ChipProps = UseLabelProps & UseIconTrailingProps & UseProgressProp & UseEnabledProps & UseEventClickProps & {
    tag?: ButtonProps['tag'];
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsChip: ChipProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsChip: {
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
    progress: PropType<boolean | import("../Progress/props.ts").ProgressProps | undefined>;
    iconTrailing: PropType<string | import("../Icon/props.ts").IconProps | undefined>;
    icon: PropType<string | import("../Icon/props.ts").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
