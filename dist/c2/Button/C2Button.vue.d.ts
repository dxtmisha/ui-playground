declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    adaptive: import("vue").PropType<"icon" | undefined>;
    size: {
        type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
        default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
    };
    outline: BooleanConstructor;
    link: BooleanConstructor;
    intent: {
        type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
        default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    secondary: BooleanConstructor;
    ghost: BooleanConstructor;
    palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
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
    adaptive: import("vue").PropType<"icon" | undefined>;
    size: {
        type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
        default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
    };
    outline: BooleanConstructor;
    link: BooleanConstructor;
    intent: {
        type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
        default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    secondary: BooleanConstructor;
    ghost: BooleanConstructor;
    palette: import("vue").PropType<"carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "teal" | "celestial" | "indigo" | "orchid" | "cerise" | undefined>;
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
    size: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
    link: boolean;
    focus: boolean;
    disabled: boolean;
    loading: boolean;
    tag: string | undefined;
    selected: boolean;
    readonly: boolean;
    iconTurn: boolean;
    iconHide: boolean;
    primary: boolean;
    secondary: boolean;
    outline: boolean;
    intent: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
    ghost: boolean;
}, {}>, Readonly<import("../../constructors/uses/ref/useLabel").UseLabelSlots> & import("../../constructors/uses/ref/useLabel").UseLabelSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
