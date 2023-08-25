export type Undefined = undefined | null
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'
export type NumberOrString = number | string
export type NumberOrStringOrDate = NumberOrString | Date
export type ObjectType<T = any> = Record<string, T>
export type ObjectOrArrayType<T = any> = T[] | ObjectType<T>

export type FunctionType<R = any> = () => R
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R
export type FunctionArgs<T, R> = (...args: T[]) => R
