import { type ImageSlots } from '../../constructors/Image/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
}, {
    type: import("vue").ComputedRef<import("../../constructors/Image/typesBasic").ImageTypeItem>;
    data: import("vue").ComputedRef<import("../../constructors/Image/typesBasic").ImageEventItem>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (image: import("../../constructors/Image/typesBasic").ImageEventData) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onLoad?: ((image: import("../../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
}, {
    turn: boolean;
    disabled: boolean;
    hide: boolean;
    adaptiveGroup: string;
    adaptiveAlways: boolean;
    adaptive: boolean;
}, {}>, Readonly<ImageSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
