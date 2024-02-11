import { type ProgressSlots } from '../../constructors/Progress/types.ts';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    linear: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    circular: BooleanConstructor;
    indeterminate: {
        type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
        default: "type1" | "type2" | "type3" | undefined;
    };
    position: {
        type: import("vue").PropType<"top" | "bottom" | undefined>;
        default: "top" | "bottom" | undefined;
    };
    dense: BooleanConstructor;
    inverse: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
    visible: BooleanConstructor;
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    linear: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    circular: BooleanConstructor;
    indeterminate: {
        type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
        default: "type1" | "type2" | "type3" | undefined;
    };
    position: {
        type: import("vue").PropType<"top" | "bottom" | undefined>;
        default: "top" | "bottom" | undefined;
    };
    dense: BooleanConstructor;
    inverse: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
    visible: BooleanConstructor;
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
}>>, {
    indeterminate: "type1" | "type2" | "type3" | undefined;
    position: "top" | "bottom" | undefined;
    max: string | number;
    visible: boolean;
    delay: string | number;
    linear: boolean;
    circular: boolean;
    dense: boolean;
    inverse: boolean;
}, {}>, Readonly<ProgressSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
