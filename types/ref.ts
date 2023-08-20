import { type ComputedRef, type Ref } from 'vue'

export type RefType<T> = ComputedRef<T> | Ref<T>
export type RefOrValueType<T> = Ref<T> | T
export type RefOrNormalType<T> = RefType<T> | T
