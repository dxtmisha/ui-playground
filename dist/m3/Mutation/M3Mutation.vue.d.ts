import { type MutationSlots } from '../../constructors/Mutation/types.ts';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    items: import("vue").ShallowRef<import("../../classes/mutation/MutationDataItem.ts").MutationDataItem[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: () => void;
}, string, import("vue").PublicProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    onLoad?: (() => any) | undefined;
}, {
    readonly [x: number]: string;
} | {}, {}>, Readonly<MutationSlots>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
