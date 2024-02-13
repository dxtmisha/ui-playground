import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
            overElement: import("vue").PropType<import("../../types/element.ts").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => any) | undefined;
        }, {
            id: string;
            open: import("vue").ShallowRef<boolean>;
            setOpen(): Promise<void>;
            toggle(): Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            window: (options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
            overElement: import("vue").PropType<import("../../types/element.ts").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => any) | undefined;
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
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
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
            overElement: import("vue").PropType<import("../../types/element.ts").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => any) | undefined;
        }, {
            id: string;
            open: import("vue").ShallowRef<boolean>;
            setOpen(): Promise<void>;
            toggle(): Promise<void>;
        }, {}, {}, {}, {
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
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        overElement: import("vue").PropType<import("../../types/element.ts").ElementOrString<HTMLElement> | undefined>;
        autoClose: BooleanConstructor;
        flash: BooleanConstructor;
        inDom: BooleanConstructor;
    }>> & {
        onWindow?: ((options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => any) | undefined;
    }, {
        id: string;
        open: import("vue").ShallowRef<boolean>;
        setOpen(): Promise<void>;
        toggle(): Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        window: (options: import("../../constructors/Window/typesBasic.ts").WindowEmitOptions) => void;
    }, string, {
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
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/Window/types.ts").WindowSlots> & import("../../constructors/Window/types.ts").WindowSlots;
    });
    tags: string[];
    parameters: {
        design: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: import("../../types/storybook.ts").StorybookArgs;
    args: import("../../types/storybook.ts").StorybookArgsValue;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Window: Story;
export declare const WindowContextmenu: Story;
export declare const WindowOver: Story;
export declare const WindowStaticMode: Story;
export declare const WindowManagement: Story;
