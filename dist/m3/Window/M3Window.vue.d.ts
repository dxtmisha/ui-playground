import { type WindowSlots } from '../../constructors/Window/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    width: import("vue").PropType<string | undefined>;
    height: import("vue").PropType<string | undefined>;
    adaptive: {
        type: import("vue").PropType<"menu" | "auto" | "modal" | "modalDynamic" | "static" | "staticSm" | "staticMd" | "staticLg" | undefined>;
        default: "menu" | "auto" | "modal" | "modalDynamic" | "static" | "staticSm" | "staticMd" | "staticLg" | undefined;
    };
    overscroll: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    dense: BooleanConstructor;
    fullscreen: BooleanConstructor;
    alignment: import("vue").PropType<"center" | "top" | "bottom" | "right" | "left" | undefined>;
    origin: import("vue").PropType<"center" | "top" | "bottom" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
    open: BooleanConstructor;
    disabled: BooleanConstructor;
    preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    contextmenu: BooleanConstructor;
    staticMode: BooleanConstructor;
    axis: {
        type: import("vue").PropType<"x" | "y" | "on" | undefined>;
        default: "x" | "y" | "on" | undefined;
    };
    indent: {
        type: import("vue").PropType<number | undefined>;
        default: number | undefined;
    };
    persistent: BooleanConstructor;
    overElement: import("vue").PropType<import("../../types/element").ElementOrString<HTMLElement> | undefined>;
    autoClose: BooleanConstructor;
    flash: BooleanConstructor;
    inDom: BooleanConstructor;
}, {
    id: string;
    open: import("vue").ShallowRef<boolean>;
    setOpen(): Promise<void>;
    toggle(): Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    window: (options: import("../../constructors/Window/typesBasic").WindowEmitOptions) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: import("vue").PropType<string | undefined>;
    height: import("vue").PropType<string | undefined>;
    adaptive: {
        type: import("vue").PropType<"menu" | "auto" | "modal" | "modalDynamic" | "static" | "staticSm" | "staticMd" | "staticLg" | undefined>;
        default: "menu" | "auto" | "modal" | "modalDynamic" | "static" | "staticSm" | "staticMd" | "staticLg" | undefined;
    };
    overscroll: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    dense: BooleanConstructor;
    fullscreen: BooleanConstructor;
    alignment: import("vue").PropType<"center" | "top" | "bottom" | "right" | "left" | undefined>;
    origin: import("vue").PropType<"center" | "top" | "bottom" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
    open: BooleanConstructor;
    disabled: BooleanConstructor;
    preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
    contextmenu: BooleanConstructor;
    staticMode: BooleanConstructor;
    axis: {
        type: import("vue").PropType<"x" | "y" | "on" | undefined>;
        default: "x" | "y" | "on" | undefined;
    };
    indent: {
        type: import("vue").PropType<number | undefined>;
        default: number | undefined;
    };
    persistent: BooleanConstructor;
    overElement: import("vue").PropType<import("../../types/element").ElementOrString<HTMLElement> | undefined>;
    autoClose: BooleanConstructor;
    flash: BooleanConstructor;
    inDom: BooleanConstructor;
}>> & {
    onWindow?: ((options: import("../../constructors/Window/typesBasic").WindowEmitOptions) => any) | undefined;
}, {
    contextmenu: boolean;
    disabled: boolean;
    adaptive: "menu" | "auto" | "modal" | "modalDynamic" | "static" | "staticSm" | "staticMd" | "staticLg" | undefined;
    open: boolean;
    dense: boolean;
    axis: "x" | "y" | "on" | undefined;
    indent: number | undefined;
    overscroll: boolean;
    fullscreen: boolean;
    staticMode: boolean;
    persistent: boolean;
    autoClose: boolean;
    flash: boolean;
    inDom: boolean;
}, {}>, Readonly<WindowSlots> & WindowSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
