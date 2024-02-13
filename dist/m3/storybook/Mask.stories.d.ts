import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            right: BooleanConstructor;
            dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
            type: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            currency: StringConstructor;
            language: StringConstructor;
            view: {
                type: StringConstructor;
                default: string | undefined;
            };
        }>> & {
            onBeforeinput?: ((event: InputEvent) => any) | undefined;
            onBlur?: ((event: FocusEvent) => any) | undefined;
            onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            beforeinput: (event: InputEvent) => void;
            blur: (event: FocusEvent) => void;
            change: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
            focus: (event: FocusEvent) => void;
            input: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
            keydown: (event: KeyboardEvent) => void;
            keyup: (event: KeyboardEvent) => void;
            paste: (event: ClipboardEvent) => void;
            reset: (event: Event) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            right: BooleanConstructor;
            dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
            type: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            currency: StringConstructor;
            language: StringConstructor;
            view: {
                type: StringConstructor;
                default: string | undefined;
            };
        }>> & {
            onBeforeinput?: ((event: InputEvent) => any) | undefined;
            onBlur?: ((event: FocusEvent) => any) | undefined;
            onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {
            match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            view: string;
            visible: boolean;
            special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            right: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            right: BooleanConstructor;
            dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
            type: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            currency: StringConstructor;
            language: StringConstructor;
            view: {
                type: StringConstructor;
                default: string | undefined;
            };
        }>> & {
            onBeforeinput?: ((event: InputEvent) => any) | undefined;
            onBlur?: ((event: FocusEvent) => any) | undefined;
            onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {}, {}, {}, {}, {
            match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            view: string;
            visible: boolean;
            special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            right: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        right: BooleanConstructor;
        dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        };
        name: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
        special: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        };
        match: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        };
        pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        currency: StringConstructor;
        language: StringConstructor;
        view: {
            type: StringConstructor;
            default: string | undefined;
        };
    }>> & {
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        onReset?: ((event: Event) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        beforeinput: (event: InputEvent) => void;
        blur: (event: FocusEvent) => void;
        change: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
        focus: (event: FocusEvent) => void;
        input: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
        keydown: (event: KeyboardEvent) => void;
        keyup: (event: KeyboardEvent) => void;
        paste: (event: ClipboardEvent) => void;
        reset: (event: Event) => void;
    }, string, {
        match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        view: string;
        visible: boolean;
        special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        right: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../../constructors/Mask/types").MaskSlots>;
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
    argTypes: import("../../types/storybook").StorybookArgs;
    args: import("../../types/storybook").StorybookArgsValue;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Mask: Story;
export declare const MaskNumber: Story;
export declare const MaskCurrency: Story;
export declare const MaskDatetime: Story;
export declare const MaskMultiMask: Story;
export declare const MaskGroup: Story;
