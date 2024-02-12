import { type ComputedRef, type Ref, type VNode, type VNodeArrayChildren } from 'vue';
export type RefType<T> = ComputedRef<T> | Ref<T>;
export type RefUndefined<T> = RefType<T | undefined>;
export type RefOrNormal<T> = RefType<T> | T;
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
export type RawSlots = {
    [name: string]: unknown;
    $stable?: boolean;
};
