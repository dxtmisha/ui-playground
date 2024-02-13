import { type MaskGroup } from '../Mask/typesBasic';
export type InputTypeName = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url';
export type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
export type InputElementItem = HTMLElement | Record<string, any> | undefined;
export type InputMatchItem = {
    name?: string | HTMLInputElement;
    validationMessage?: string;
};
export type InputMatch = string | HTMLInputElement | InputMatchItem;
export type InputPatternElement = Partial<HTMLInputElement>;
export type InputPatternItem = string | InputPatternElement;
export type InputPatternItemOrFunction = InputPatternItem | ((item: MaskGroup) => InputPatternItem);
export type InputPatternList = Record<string, InputPatternItemOrFunction>;
export type InputValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};
export type InputValidityCode = string | InputValidityCodeItem;
export type InputValidationItem<V = string, T extends string = string> = {
    type?: T;
    group?: string;
    status?: boolean;
    required?: boolean;
    input?: HTMLInputElement;
    validationMessage?: string;
    validity?: ValidityState;
    pattern?: InputPatternItemOrFunction;
    value: V;
    detail?: Record<string, any>;
};
