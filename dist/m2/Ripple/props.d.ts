import { RippleProps } from '../../constructors/Ripple/props';
export declare const propsValues: {};
export type PropsToken = {};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<RippleProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    disabled: BooleanConstructor;
};
