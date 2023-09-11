export type PropertyBool = 'subclass'
  | 'var'
  | 'important'
  | 'modification'
  | 'style'
  | 'fullName'
  | 'fullValue'
  | 'props'

export type PropertyItemTool = {
  [K in keyof Pick<typeof PropertyTool, 'type'>]?: PropertyType | PropertyType[]
} & {
  [K in keyof Pick<typeof PropertyTool, PropertyBool>]?: boolean
} & {
  [K in keyof Omit<typeof PropertyTool, PropertyBool | 'type'>]?: string
}

const a: PropertyItemTool = {}
a.code = 'kj'

export type PropertySystemItem = {
  size: number
}
