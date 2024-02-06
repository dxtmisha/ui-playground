import { toKebabCase } from '../functions/string.ts'
import { useEnv } from '../composables/useEnv.ts'

export const CLASS_NAME = 'd-mutation'
export const KEY_NAME = toKebabCase(useEnv('DESIGNS_MAIN', 'design'))
export const KEY_UI = toKebabCase(useEnv('DESIGNS_GLOBAL', 'ui'))
export const KEY_INIT = 'init'
export const KEY_END = 'end'
export const KEY_GLOBAL_PROJECT = '__UI_PROJECT'

export enum MutationStatus {
  new = 'new',
  init = KEY_INIT,
  end = KEY_END
}

export type MutationComponentProps = Record<string, any>
export type MutationComponentCallback = (props: MutationComponentProps) => void
export type MutationComponentCache = Record<string, MutationComponentProps>
export type MutationComponentItem = {
  item: any
  callback: MutationComponentCallback
}
export type MutationComponent = Record<string, MutationComponentItem>

export type MutationSlotsItem = {
  tag: string
  attributes: Record<string, any>
}
export type MutationSlotsItemOrString = MutationSlotsItem | string
export type MutationSlots = Record<string, MutationSlotsItemOrString[]>

export type MutationProjectItem = {
  item: any
  router?: Record<string, any>
  store?: Record<string, any>
}
export type MutationProject = Record<string, MutationProjectItem>
