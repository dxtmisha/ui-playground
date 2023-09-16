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

export const SEPARATOR = '/'

export const SYMBOL_SEPARATOR = process.env.TOKEN_SEPARATOR || SEPARATOR
export const SYMBOL_AVAILABLE = `[\\w-&?{}()., ${SYMBOL_SEPARATOR}]+`

export const FILE_PROPERTY = 'properties.json'

export const SYMBOLS = {
  $: PropertyType.var,
  ':': PropertyType.selector,
  '::': PropertyType.virtual,
  '~': PropertyType.state,
  '#': PropertyType.subclass,
  '@': PropertyType.link,
  '@@': PropertyType.linkClass,
  '&': PropertyType.scss,
  '&&': PropertyType.root,
  '--': PropertyType.none
}
