export enum PropertyKey {
  category = '_category',
  type = '_type',
  rename = '_rename',
  prop = '_prop',
  default = '_default',
  replace = '_replace',
  important = '_important',
  modification = '_modification',
  fullName = '_fullName',
  fullValue = '_fullValue',
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
  none = 'none',
  file = 'file'
}

export enum PropertyCategory {
  root = 'root',
  class = 'class',
  media = 'media',

  theme = 'theme',
  shade = 'shade',
  palette = 'palette',
  color = 'color',
  colors = 'colors'
}

export type PropertyReplace = {
  pattern?: string
  flags: string
  replace: string
}

export type PropertyValue<T> = string | string[] | number | Record<string, T> | null

export type PropertyItem = {
  value: PropertyValue<PropertyItem>
  type?: string
  description?: string

  _type?: PropertyType | null
  _category?: PropertyCategory | string
  _rename?: string
  _prop?: string | boolean
  _default?: string | number
  _replace?: string | PropertyReplace
  _important?: boolean
  _modification?: boolean
  _fullName?: boolean
  _fullValue?: boolean
  _style?: boolean

  __n?: string
  __v?: PropertyType
  __c?: string
  __f?: string
  __file?: string
  __wrap?: boolean
}

export type PropertyItemPartial = Partial<Omit<PropertyItem, 'value'>> & {
  value?: PropertyValue<PropertyItemPartial>
}
export type PropertyItemInput = Record<string, any> & (PropertyItemPartial | {
  [K in string]: PropertyItemInput
})

export type PropertyList = Record<string, PropertyItem>
export type PropertyListOrData = Record<string, PropertyItemInput>

export const SEPARATOR = '/'

export const SYMBOL_SEPARATOR = process.env.TOKEN_SEPARATOR ?? SEPARATOR
export const SYMBOL_AVAILABLE = `[\\w-&?{}()., ${SYMBOL_SEPARATOR}]+`

export const FILE_PROPERTY = 'properties.json'
