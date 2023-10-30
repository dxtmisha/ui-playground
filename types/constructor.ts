import { type Ref } from 'vue'

import { type Undefined } from './basic.ts'
import {
  type RefOrNormal,
  type RefType
} from './ref.ts'

export type ConstrItem = Record<string, any>

export type ConstrComponent = Record<string, any>
export type ConstrComponentMod<P extends ConstrItem> = {
  [K in keyof P]?: RefOrNormal<P[K]>
}

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T]
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

export type ConstrClassObject = Record<string, boolean>
export type ConstrClass = string | (string | Undefined)[] | ConstrClassObject
export type ConstrClassList = Record<string, ConstrClass>
export type ConstrClasses = { main: ConstrClass } & ConstrClassList

export type ConstrStylesItem = string | null
export type ConstrStyles = Record<string, ConstrStylesItem>

export type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  components?: COMP
  compMod?: ConstrComponentMod<P>
  emits?: ConstrEmit<EMITS>
  classes?: RefType<ConstrClasses>
  styles?: RefType<ConstrStyles>
}

export type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  name: string
  element: Ref<E | undefined>,
  classes: RefType<CLASSES>
  styles: RefType<ConstrStyles>
} & SETUP
