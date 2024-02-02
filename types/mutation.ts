import { useEnv } from '../composables/useEnv.ts'

export const CLASS_NAME = 'd-mutation'
export const KEY_UI = useEnv('DESIGNS_GLOBAL', 'ui')
export const KEY_INIT = 'init'
export const KEY_END = 'end'

export enum MutationStatus {
  new = 'new',
  init = KEY_INIT,
  end = KEY_END
}
