import { type PropType } from 'vue';
import type { InputMatch, InputMode, InputTypeName, InputValidityCode } from './typesBasic.ts';
import { type UseLabelProps } from '../uses/ref/useLabel.ts';
import { type UseEnabledProps } from '../uses/ref/useEnabled.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type InputBasicProps<V = any> = UseLabelProps & UseEnabledProps & {
    selected?: boolean;
    name?: string;
    value?: V;
    modelValue?: V;
    detail?: Record<string, any>;
    type?: InputTypeName;
    inputmode?: InputMode;
    spellcheck?: boolean;
    required?: boolean;
    pattern?: string;
    match?: InputMatch;
    arrow?: boolean;
    step?: string | number;
    min?: string | number;
    max?: string | number;
    minlength?: string | number;
    maxlength?: string | number;
    autofocus?: boolean;
    autocomplete?: HTMLInputElement['autocomplete'];
    input?: Record<string, any>;
    placeholder?: string;
    helperMessage?: string;
    validationMessage?: string;
    validationCode?: InputValidityCode;
    on?: Record<string, () => void>;
    ['onUpdate:value']?: (value: V) => void;
    ['onUpdate:modelValue']?: (value: V) => void;
};
export type InputProps = InputBasicProps<string> & {};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsInput: InputBasicProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsBasicInput: {
    name: StringConstructor;
    value: StringConstructor;
    modelValue: StringConstructor;
    detail: PropType<Record<string, any> | undefined>;
    type: {
        type: PropType<InputTypeName | undefined>;
        default: InputTypeName | undefined;
    };
    inputmode: PropType<InputMode | undefined>;
    spellcheck: BooleanConstructor;
    required: BooleanConstructor;
    pattern: StringConstructor;
    match: PropType<InputMatch | undefined>;
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
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    validationCode: PropType<InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': PropType<((value: any) => void) | undefined>;
    progress: PropType<boolean | import("../Progress/props.ts").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
export declare const propsInput: {
    name: StringConstructor;
    value: StringConstructor;
    modelValue: StringConstructor;
    detail: PropType<Record<string, any> | undefined>;
    type: {
        type: PropType<InputTypeName | undefined>;
        default: InputTypeName | undefined;
    };
    inputmode: PropType<InputMode | undefined>;
    spellcheck: BooleanConstructor;
    required: BooleanConstructor;
    pattern: StringConstructor;
    match: PropType<InputMatch | undefined>;
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
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    validationCode: PropType<InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': PropType<((value: any) => void) | undefined>;
    progress: PropType<boolean | import("../Progress/props.ts").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
