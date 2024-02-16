import { type MutationItemSlots } from '../../constructors/MutationItem/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    item: import("vue").PropType<import("../../classes/mutation/MutationDataItem").MutationDataItem | undefined>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: import("vue").PropType<import("../../classes/mutation/MutationDataItem").MutationDataItem | undefined>;
}>> & {
    onLoad?: (() => any) | undefined;
}, {}, {}>, Readonly<MutationItemSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
