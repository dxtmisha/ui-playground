export type UndefinedType = undefined
export type EmptyType = UndefinedType | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'
export type NumberOrStringType = number | string
export type NumberOrStringOrDateType = NumberOrStringType | Date
export type ObjectType<T = any> = Record<string, T>
export type ObjectOrArrayType<T = any> = T[] | ObjectType<T>

export type FunctionType<R = any> = () => R
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R
