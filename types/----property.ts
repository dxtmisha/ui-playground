export type PropertyReadParent = {
  name: string,
  item: PropertyItem
}
export type PropertyReadParents = PropertyReadParent[]
export type PropertyRead = {
  design?: string,
  component?: string,
  name: string,
  value: PropertyItem['value'],
  item: PropertyItem,
  parent?: PropertyItem,
  parents: PropertyReadParents
}
export type PropertyReadFull = PropertyRead & {
  index: string
}
export type PropertyReadCallback<T> = (item: PropertyRead) => T

export type PropertyPath = string | string[]
export type PropertyFileValue = string | Record<string, any>
