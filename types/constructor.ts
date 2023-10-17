import { Ref } from 'vue'
import { RefOrNormal, RefType } from './ref.ts'

export type ConstrItem = Record<string, any>

export type ConstrComponent = Record<string, any>
export type ConstrComponentMod<P extends ConstrItem> = Record<keyof P, RefOrNormal<any>>

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T]
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

export type ConstrClass = string | string[] | Record<string, boolean>
export type ConstrClassList = Record<string, ConstrClass>
export type ConstrClasses = { main: ConstrClass } & ConstrClassList

export type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  CLASSES extends ConstrClasses,
  P extends ConstrItem
> = {
  components?: COMP
  modification?: ConstrComponentMod<P>
  emits?: ConstrEmit<EMITS>
  classes?: RefType<CLASSES>
}

export type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  name: string
  element: Ref<E | undefined>,
  classes?: RefType<CLASSES>
} & SETUP
