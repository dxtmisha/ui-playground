import { ImageProps } from '../../constructors/Image/props';
export declare const propsValues: {};
export type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ImageProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    turn: BooleanConstructor;
    disabled: BooleanConstructor;
    hide: BooleanConstructor;
    adaptive: BooleanConstructor;
    value: (StringConstructor | {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
        prototype: File;
    })[];
    coordinator: import("vue").PropType<any>;
    size: import("vue").PropType<string | number | undefined>;
    x: (StringConstructor | NumberConstructor)[];
    y: (StringConstructor | NumberConstructor)[];
    adaptiveGroup: {
        type: StringConstructor;
        default: string | undefined;
    };
    adaptiveAlways: BooleanConstructor;
    objectWidth: (StringConstructor | NumberConstructor)[];
    objectHeight: (StringConstructor | NumberConstructor)[];
    url: StringConstructor;
};
