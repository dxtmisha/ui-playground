export type Undefined = undefined | null
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'
export type NumberOrString = number | string
export type NumberOrStringOrDate = NumberOrString | Date
export type ObjectItem<T = any> = Record<string, T>
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>

export type FunctionReturn<R = any> = () => R
export type FunctionArgs<T, R> = (...args: T[]) => R

export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R
