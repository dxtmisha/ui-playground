import { ScrollbarProps } from '../../constructors/Scrollbar/props.ts';
export declare const propsValues: {};
export type PropsToken = {
    visible?: boolean;
    border?: boolean;
    inverse?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ScrollbarProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    visible: BooleanConstructor;
    border: BooleanConstructor;
    inverse: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
};
