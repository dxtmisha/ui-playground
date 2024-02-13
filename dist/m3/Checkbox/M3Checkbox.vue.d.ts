declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    required: BooleanConstructor;
    iconCheckbox: {
        type: StringConstructor;
        default: string | undefined;
    };
    iconIndeterminate: {
        type: StringConstructor;
        default: string | undefined;
    };
    comp: BooleanConstructor;
    value: (BooleanConstructor | StringConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor)[];
    icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic.ts").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputMatch | undefined>;
    arrow: BooleanConstructor;
    step: (StringConstructor | NumberConstructor)[];
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    minlength: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<AutoFill | undefined>;
        default: AutoFill | undefined;
    };
    input: import("vue").PropType<Record<string, any> | undefined>;
    placeholder: StringConstructor;
    validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
}, {
    value: import("vue").ShallowRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic.ts").InputValidationItem) => void;
    input: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic.ts").InputValidationItem) => void;
    "update:value": (value: any) => void;
    "update:modelValue": (value: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    required: BooleanConstructor;
    iconCheckbox: {
        type: StringConstructor;
        default: string | undefined;
    };
    iconIndeterminate: {
        type: StringConstructor;
        default: string | undefined;
    };
    comp: BooleanConstructor;
    value: (BooleanConstructor | StringConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor)[];
    icon: import("vue").PropType<string | import("../../constructors/Image/props.ts").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic.ts").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputMatch | undefined>;
    arrow: BooleanConstructor;
    step: (StringConstructor | NumberConstructor)[];
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    minlength: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<AutoFill | undefined>;
        default: AutoFill | undefined;
    };
    input: import("vue").PropType<Record<string, any> | undefined>;
    placeholder: StringConstructor;
    validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic.ts").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props.ts").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
}>> & {
    onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic.ts").InputValidationItem) => any) | undefined;
    onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic.ts").InputValidationItem) => any) | undefined;
    "onUpdate:value"?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    disabled: boolean;
    type: import("../../constructors/Input/typesBasic.ts").InputTypeName | undefined;
    spellcheck: boolean;
    autofocus: boolean;
    readonly: boolean;
    indeterminate: boolean;
    autocomplete: AutoFill | undefined;
    arrow: boolean;
    required: boolean;
    iconCheckbox: string;
    iconIndeterminate: string;
    comp: boolean;
}, {}>, Readonly<import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots> & import("../../constructors/uses/ref/useLabel.ts").UseLabelSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};