import { type ComputedRef, type Ref } from 'vue'

export type RefType<T> = ComputedRef<T> | Ref<T>
export type RefOrNormal<T> = RefType<T> | T
