import { type PropType } from 'vue';
import { type ElementOrString } from '../../types/element.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = {
    open?: boolean;
    disabled?: boolean;
    preparation?(open: boolean): Promise<boolean>;
    beforeOpening?(open: boolean): Promise<boolean>;
    opening?(open: boolean): Promise<boolean>;
    contextmenu?: boolean;
    staticMode?: boolean;
    axis?: 'x' | 'y' | 'on';
    indent?: number;
    persistent?: boolean;
    overElement?: ElementOrString<HTMLElement>;
    autoClose?: boolean;
    flash?: boolean;
    inDom?: boolean;
    width?: string | 'auto' | 'max' | 'custom';
    height?: string | 'auto' | 'max' | 'custom';
    adaptive?: string | 'menu' | 'modal' | 'modalDynamic' | 'static';
    overscroll?: boolean;
    dense?: boolean;
    fullscreen?: boolean;
    alignment?: string | 'center' | 'top' | 'right' | 'bottom' | 'left';
    origin?: string | 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsWindow: WindowProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsWindow: {
    width: PropType<string | undefined>;
    height: PropType<string | undefined>;
    adaptive: PropType<string | undefined>;
    overscroll: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    dense: BooleanConstructor;
    fullscreen: BooleanConstructor;
    alignment: PropType<string | undefined>;
    origin: PropType<string | undefined>;
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
    overElement: PropType<ElementOrString<HTMLElement> | undefined>;
    autoClose: BooleanConstructor;
    flash: BooleanConstructor;
    inDom: BooleanConstructor;
};
