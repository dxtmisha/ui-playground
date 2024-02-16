import { type PropType } from 'vue';
import { WindowProps } from '../../constructors/Window/props';
export declare const propsValues: {
    width: string[];
    height: string[];
    adaptive: string[];
    alignment: string[];
    origin: string[];
};
export type PropsToken = {
    width?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    height?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    adaptive?: 'menu' | 'modal' | 'modalDynamic' | 'static' | 'auto' | 'staticSm' | 'staticMd' | 'staticLg';
    overscroll?: boolean;
    dense?: boolean;
    fullscreen?: boolean;
    alignment?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<WindowProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    width: PropType<string | undefined>;
    height: PropType<string | undefined>;
    adaptive: {
        type: PropType<"menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined>;
        default: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
    };
    overscroll: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    dense: BooleanConstructor;
    fullscreen: BooleanConstructor;
    alignment: PropType<"center" | "top" | "bottom" | "right" | "left" | undefined>;
    origin: PropType<"center" | "top" | "bottom" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
    open: BooleanConstructor;
    disabled: BooleanConstructor;
    preparation: PropType<((open: boolean) => Promise<boolean>) | undefined>;
    beforeOpening: PropType<((open: boolean) => Promise<boolean>) | undefined>;
    opening: PropType<((open: boolean) => Promise<boolean>) | undefined>;
    contextmenu: BooleanConstructor;
    staticMode: BooleanConstructor;
    axis: {
        type: PropType<"x" | "y" | "on" | undefined>;
        default: "x" | "y" | "on" | undefined;
    };
    indent: {
        type: PropType<number | undefined>;
        default: number | undefined;
    };
    persistent: BooleanConstructor;
    overElement: PropType<import("../../types/element").ElementOrString<HTMLElement> | undefined>;
    autoClose: BooleanConstructor;
    flash: BooleanConstructor;
    inDom: BooleanConstructor;
};
