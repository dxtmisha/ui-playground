export type ArgType = {
  name: string
  table?: {
    category?: string
  }
}

export type ArgDemoType<T = any> = T[][];
