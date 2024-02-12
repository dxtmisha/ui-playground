import { type PropType } from 'vue';
import type { ImageProps } from '../Image/props.ts';
import { type InputBasicProps } from '../Input/props.ts';
import { type UseFieldMessageProps } from '../FieldMessage/useFieldMessageRef.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type CheckboxProps = Omit<InputBasicProps, 'type' | 'inputmode' | 'spellcheck' | 'pattern' | 'match' | 'arrow' | 'step' | 'min' | 'max' | 'minlength' | 'maxlength' | 'placeholder'> & UseFieldMessageProps & {
    icon?: string | ImageProps;
    indeterminate?: boolean;
    iconCheckbox?: string;
    iconIndeterminate?: string;
    comp?: boolean;
    required?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsCheckbox: CheckboxProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsCheckbox: {
    comp: BooleanConstructor;
    required: BooleanConstructor;
    value: (BooleanConstructor | StringConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor)[];
    icon: PropType<string | ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    iconCheckbox: StringConstructor;
    iconIndeterminate: StringConstructor;
    disabled: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    detail: PropType<Record<string, any> | undefined>;
    type: {
        type: PropType<import("../Input/typesBasic.ts").InputTypeName | undefined>;
        default: import("../Input/typesBasic.ts").InputTypeName | undefined;
    };
    inputmode: PropType<import("../Input/typesBasic.ts").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: PropType<import("../Input/typesBasic.ts").InputMatch | undefined>;
    arrow: BooleanConstructor;
    step: (StringConstructor | NumberConstructor)[];
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    minlength: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    autocomplete: {
        type: PropType<AutoFill | undefined>;
        default: AutoFill | undefined;
    };
    input: PropType<Record<string, any> | undefined>;
    placeholder: StringConstructor;
    validationCode: PropType<import("../Input/typesBasic.ts").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': PropType<((value: any) => void) | undefined>;
    progress: PropType<boolean | import("../Progress/props.ts").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
