import { CheckboxProps } from '../../constructors/Checkbox/props';
export declare const propsValues: {};
export type PropsToken = {
    required?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<CheckboxProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
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
    icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
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
    validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    progress: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
