import { type ScrollbarSlots } from '../../constructors/Scrollbar/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: BooleanConstructor;
    border: BooleanConstructor;
    inverse: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    border: BooleanConstructor;
    inverse: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    tag: string;
    inverse: boolean;
    visible: boolean;
    border: boolean;
}, {}>, Readonly<ScrollbarSlots> & ScrollbarSlots>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
