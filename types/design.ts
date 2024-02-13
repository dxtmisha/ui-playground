import { PropertyItem } from './property'

export type DesignStructureState = {
  index: string
  type: string
  item: PropertyItem
  className?: string
  state: DesignStructureState[]
}
export type DesignStructureStateList = DesignStructureState['state']

export type DesignStructureClasses = {
  index: string
  className: string
  full: boolean
}
export type DesignStructureClassesList = DesignStructureClasses[]

export type DesignStructureItemSub = {
  name: string
  index: string
  value: (string | boolean)[]
  state: DesignStructureItemSub[]
}

export type DesignStructureItem = {
  name: string
  index: string
  type: string
  className?: string
  value: (string | boolean)[]
  valueAll: (string | boolean)[]
  state: DesignStructureItemSub[]
  style?: boolean
  default?: string | number | boolean
  category?: string
}
export type DesignStructureList = Record<string, DesignStructureItem>
