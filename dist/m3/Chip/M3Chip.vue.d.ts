declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
    height: {
        type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
        default: "sm" | "md" | "lg" | undefined;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    elevated: BooleanConstructor;
    input: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    assist: BooleanConstructor;
    filter: BooleanConstructor;
    suggestion: BooleanConstructor;
    avatar: BooleanConstructor;
    dragged: BooleanConstructor;
    palette: import("vue").PropType<"error" | "primary" | "secondary" | "tertiary" | "red" | "green" | "neutral" | "neutralVariant" | undefined>;
    tag: {
        type: import("vue").PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    icon: import("vue").PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent, value: {
        type: string;
        value: any;
        detail: Record<string, any> | undefined;
    }) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
    height: {
        type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
        default: "sm" | "md" | "lg" | undefined;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    elevated: BooleanConstructor;
    input: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    assist: BooleanConstructor;
    filter: BooleanConstructor;
    suggestion: BooleanConstructor;
    avatar: BooleanConstructor;
    dragged: BooleanConstructor;
    palette: import("vue").PropType<"error" | "primary" | "secondary" | "tertiary" | "red" | "green" | "neutral" | "neutralVariant" | undefined>;
    tag: {
        type: import("vue").PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    icon: import("vue").PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
}>> & {
    onClick?: ((event: MouseEvent, value: {
        type: string;
        value: any;
        detail: Record<string, any> | undefined;
    }) => any) | undefined;
}, {
    filter: boolean;
    focus: boolean;
    input: boolean;
    disabled: boolean;
    outlined: boolean;
    height: "sm" | "md" | "lg" | undefined;
    loading: boolean;
    tag: string | undefined;
    selected: boolean;
    readonly: boolean;
    elevated: boolean;
    iconTurn: boolean;
    iconHide: boolean;
    assist: boolean;
    suggestion: boolean;
    avatar: boolean;
    dragged: boolean;
}, {}>, Readonly<import("../../constructors/uses/ref/useLabel").UseLabelSlots> & import("../../constructors/uses/ref/useLabel").UseLabelSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
