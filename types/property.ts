export type propertyPath = string | string[]

export type propertyItem = {
  value?: string
  type?: string
  description?: string
}

export type propertyList = Record<string, propertyItem | propertyList>
