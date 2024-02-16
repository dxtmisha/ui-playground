import { type MutationSlots } from '../../constructors/Mutation/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
}, {
    items: import("vue").ShallowRef<import("../../classes/mutation/MutationDataItem").MutationDataItem[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
}>> & {
    onLoad?: (() => any) | undefined;
}, {
    disabled: boolean;
}, {}>, Readonly<MutationSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
