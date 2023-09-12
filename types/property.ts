export enum PropertyKey {
  category = '_category',
  type = '_type',
  rename = '_rename',
  prop = '_prop',
  default = '_default',
  replace = '_replace',
  important = '_important',
  modification = '_modification',
  full = '_full',
  style = '_style',
  name = '__n',
  variable = '__v',
  css = '__c',
  code = '__f',
  file = '__file',
  wrap = '__wrap'
}

export enum PropertyType {
  design = 'design',
  component = 'component',
  var = 'var',
  property = 'property',
  selector = 'selector',
  virtual = 'virtual',
  state = 'state',
  subclass = 'subclass',
  media = 'media',
  mediaMax = 'media-max',
  animate = 'animate',
  link = 'link',
  linkClass = 'link-class',
  scss = 'scss',
  classType = 'class',
  theme = 'theme',
  root = 'root',
  mixin = 'mixin',
  none = 'none'
}

export enum PropertyFull {
  name = 'name',
  value = 'value'
}

export type PropertyReplace = {
  pattern?: string
  flags?: string
  replace?: string
}

export type PropertyItem = {
  value?: string | string[] | number | Record<string, PropertyItem>
  type?: string
  description?: string

  _category?: string
  _type?: (PropertyType | string) | (PropertyType | string)[]
  _rename?: string
  _prop?: string | boolean
  _default?: string | number
  _replace?: string | PropertyReplace
  _important?: boolean
  _modification?: boolean
  _full?: PropertyFull | PropertyFull[]
  _style?: boolean

  __n?: string
  __v?: string
  __c?: string
  __f?: string
  __file?: string
  __wrap?: boolean
}

export type PropertyList = Record<string, PropertyItem>
export type PropertyListOrData = Record<string, PropertyItem | Record<string, PropertyItem>>

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
