export const COMPONENTS_EXCEPTIONS: string[] = [
  'Mutation',
  'MutationItem'
]

export const COMPONENTS_DIR = 'lib'
export const COMPONENTS_FILE = 'components'
export const COMPONENTS_MAIN = 'main'
export const COMPONENTS_TYPES = 'types'
export const COMPONENTS_FILE_TYPES = 'fileTypes'
export const COMPONENTS_STYLE = 'style'
export const COMPONENTS_REGISTRATION = 'create'
export const COMPONENTS_REGISTRATION_FUNCTION = 'createUiComponents'

export type ComponentsData = {
  design: string
  name: string
  alias: string
  codeFull: string
  dir: string
}
export type ComponentsItem = {
  name: string
  components: ComponentsData[]
}
export type ComponentsList = ComponentsItem[]
