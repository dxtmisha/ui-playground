import { Undefined } from './basic.ts'

export type WindowType = Window & typeof globalThis
export type ElementType = WindowType | HTMLElement | Element
export type ElementHtmlType = HTMLElement | Element
export type ElementNonWindowType<E extends ElementType> = Exclude<E, WindowType>
export type ElementOrUndefinedType<E extends ElementType> = E | Undefined
export type ElementOrStringType<E extends ElementType> = E | string
export type ElementAttributes = Record<string, string | Undefined>

export type ElementOrWindow = HTMLElement | Window
export type ElementOrString<E extends ElementOrWindow> = E | string
