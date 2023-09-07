export type PropertyPath = string | string[]
export type PropertyValue = string | Record<string, any>

export type PropertyRootPath = {
  dir: string[]
  file: string
  full: string[]
}
export type PropertyRootItem = {
  design: string
  paths: PropertyRootPath[]
}
export type PropertyRoot = PropertyRootItem[]

export type PropertyItem = {
  value?: string
  type?: string
  description?: string
}
export type PropertyList = Record<string, PropertyItem | PropertyList>

export type PropertySystem = {
  time: number,
  files: Record<string, string[]>,
  sizes: Record<string, string[]>
}

export type PropertySystemItem = {
  size: number
}
