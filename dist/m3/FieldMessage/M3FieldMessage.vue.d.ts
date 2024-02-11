import { type FieldMessageSlots } from '../../constructors/FieldMessage/types.ts';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    counter: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    counter: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
}>>, {
    disabled: boolean;
}, {}>, Readonly<FieldMessageSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
