import { type PropType } from 'vue';
import { type InputPatternItemOrFunction } from '../Input/typesBasic.ts';
import { type MaskFractionItem, type MaskList, type MaskMatchItem, type MaskSpecialProp, type MaskTypeItem } from './typesBasic.ts';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type MaskProps = {
    type?: MaskTypeItem;
    name?: string;
    value?: string | number;
    mask?: MaskList;
    special?: MaskSpecialProp;
    match?: MaskMatchItem;
    pattern?: InputPatternItemOrFunction;
    check?: InputPatternItemOrFunction;
    fraction?: MaskFractionItem;
    currency?: string;
    language?: string;
    view?: string;
    visible?: boolean;
    right?: boolean;
    dir?: string | 'ltr' | 'rtl';
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMask: MaskProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsMask: {
    visible: BooleanConstructor;
    right: BooleanConstructor;
    dir: PropType<string | undefined>;
    type: {
        type: PropType<MaskTypeItem | undefined>;
        default: MaskTypeItem | undefined;
    };
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    mask: PropType<MaskList | undefined>;
    special: {
        type: PropType<MaskSpecialProp | undefined>;
        default: MaskSpecialProp | undefined;
    };
    match: {
        type: PropType<MaskMatchItem | undefined>;
        default: MaskMatchItem | undefined;
    };
    pattern: PropType<InputPatternItemOrFunction | undefined>;
    check: PropType<InputPatternItemOrFunction | undefined>;
    fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    currency: StringConstructor;
    language: StringConstructor;
    view: {
        type: StringConstructor;
        default: string | undefined;
    };
};
