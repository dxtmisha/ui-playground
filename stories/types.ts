import { type ItemNameValueType } from '../types/object.ts'

export type ArgType = {
  name: string
  table?: {
    category?: string
  }
}

export type ArgDemoType<T = any> = T[][];

export type ArgsGroupType<T = any> = Record<string, Record<string, T>>
export type VariablesType = ItemNameValueType<string>[]
