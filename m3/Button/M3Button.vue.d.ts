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
    filled: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    outlined: BooleanConstructor;
    text: BooleanConstructor;
    elevated: BooleanConstructor;
    tonal: BooleanConstructor;
    palette: import("vue").PropType<"error" | "primary" | "secondary" | "tertiary" | "red" | "green" | "neutral" | "neutralVariant" | undefined>;
    tag: {
        type: import("vue").PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
    iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
    icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
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
    filled: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    outlined: BooleanConstructor;
    text: BooleanConstructor;
    elevated: BooleanConstructor;
    tonal: BooleanConstructor;
    palette: import("vue").PropType<"error" | "primary" | "secondary" | "tertiary" | "red" | "green" | "neutral" | "neutralVariant" | undefined>;
    tag: {
        type: import("vue").PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
    iconTrailing: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
    icon: import("vue").PropType<string | import("../../constructors/Icon/props.ts").IconProps | undefined>;
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
    text: boolean;
    focus: boolean;
    disabled: boolean;
    filled: boolean;
    outlined: boolean;
    height: "sm" | "md" | "lg" | undefined;
    loading: boolean;
    tag: string | undefined;
    selected: boolean;
    readonly: boolean;
    elevated: boolean;
    tonal: boolean;
    iconTurn: boolean;
    iconHide: boolean;
}, {}>, Readonly<import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots> & import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
