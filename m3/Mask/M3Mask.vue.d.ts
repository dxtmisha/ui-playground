import { type MaskSlots } from '../../constructors/Mask/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: BooleanConstructor;
    right: BooleanConstructor;
    dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskTypeItem | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskTypeItem | undefined;
    };
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    mask: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskList | undefined>;
    special: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskSpecialProp | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskSpecialProp | undefined;
    };
    match: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskMatchItem | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskMatchItem | undefined;
    };
    pattern: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputPatternItemOrFunction | undefined>;
    check: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputPatternItemOrFunction | undefined>;
    fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    currency: StringConstructor;
    language: StringConstructor;
    view: {
        type: StringConstructor;
        default: string | undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeinput: (event: InputEvent) => void;
    blur: (event: FocusEvent) => void;
    change: (event: InputEvent, value: import("../../constructors/Mask/typesBasic.ts").MaskEventData) => void;
    focus: (event: FocusEvent) => void;
    input: (event: InputEvent, value: import("../../constructors/Mask/typesBasic.ts").MaskEventData) => void;
    keydown: (event: KeyboardEvent) => void;
    keyup: (event: KeyboardEvent) => void;
    paste: (event: ClipboardEvent) => void;
    reset: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    right: BooleanConstructor;
    dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskTypeItem | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskTypeItem | undefined;
    };
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    mask: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskList | undefined>;
    special: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskSpecialProp | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskSpecialProp | undefined;
    };
    match: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic.ts").MaskMatchItem | undefined>;
        default: import("../../constructors/Mask/typesBasic.ts").MaskMatchItem | undefined;
    };
    pattern: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputPatternItemOrFunction | undefined>;
    check: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputPatternItemOrFunction | undefined>;
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
    onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic.ts").MaskEventData) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic.ts").MaskEventData) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    onReset?: ((event: Event) => any) | undefined;
}, {
    match: import("../../constructors/Mask/typesBasic.ts").MaskMatchItem | undefined;
    type: import("../../constructors/Mask/typesBasic.ts").MaskTypeItem | undefined;
    view: string;
    visible: boolean;
    special: import("../../constructors/Mask/typesBasic.ts").MaskSpecialProp | undefined;
    right: boolean;
}, {}>, Readonly<MaskSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
