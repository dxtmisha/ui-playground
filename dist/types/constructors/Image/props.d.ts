import { PropType } from 'vue';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ImageProps = {
    value?: string | File;
    coordinator?: [number, number?, number?, number?] | number[] | any;
    size?: 'auto' | 'contain' | 'cover' | string | number;
    x?: string | number;
    y?: string | number;
    adaptiveGroup?: string;
    adaptiveAlways?: boolean;
    objectWidth?: string | number;
    objectHeight?: string | number;
    url?: string;
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsImage: ImageProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsImage: {
    turn: BooleanConstructor;
    disabled: BooleanConstructor;
    hide: BooleanConstructor;
    adaptive: BooleanConstructor;
    value: (StringConstructor | {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
        prototype: File;
    })[];
    coordinator: PropType<any>;
    size: PropType<string | number | undefined>;
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
