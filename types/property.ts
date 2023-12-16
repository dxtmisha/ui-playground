export enum PropertyKey {
  category = '_category',
  type = '_type',
  subclass = '_subclass',
  rename = '_rename',
  prop = '_prop',
  default = '_default',
  replace = '_replace',
  important = '_important',
  varKey = '_var',
  modification = '_modification',
  fullName = '_fullName',
  fullValue = '_fullValue',
  style = '_style',
  name = '__n',
  nameIndex = '__ni',
  variable = '__v',
  css = '__c',
  code = '__f',
  sort = '__s',
  order = '__o',
  index = '__i',
  stateMain = '__m',
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
  animateFrame = 'animate-frame',
  link = 'link',
  linkClass = 'link-class',
  classType = 'class',
  scss = 'scss',
  theme = 'theme',
  root = 'root',
  mixin = 'mixin',
  none = 'none',
  file = 'file',
  other = 'other'
}

export enum PropertyCategory {
  root = 'root',
  class = 'class',
  media = 'media',

  theme = 'theme',
  shade = 'shade',
  palette = 'palette',
  paletteNone = 'palette-none',
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
  _subclass?: boolean
  _category?: PropertyCategory | string
  _rename?: string
  _prop?: string | boolean
  _default?: string | number | boolean
  _replace?: string | PropertyReplace
  _important?: boolean
  _var?: boolean
  _modification?: boolean
  _fullName?: boolean
  _fullValue?: boolean
  _style?: boolean

  __i?: string
  __n?: string
  __ni?: string
  __v?: PropertyType
  __c?: string
  __f?: string | string[]
  __s?: string
  __o?: number
  __m?: boolean
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

export const NAME_CONSTRUCTOR = 'd'
export const DIR_CONSTRUCTOR = 'constructors'
export const FILE_PROPERTY = 'properties.json'
export const EXTENSION_STYLE_FILE = 'scss'
