import { MaskGroup } from '../Mask/typesBasic.ts'

export type InputPatternElement = Partial<HTMLInputElement>
export type InputPatternItem = string | InputPatternElement
export type InputPatternItemOrFunction = InputPatternItem | ((item: MaskGroup) => InputPatternItem)
export type InputPatternList = Record<string, InputPatternItemOrFunction>

export type InputValidationItem<V = string, T extends string = string> = {
  type?: T
  group?: string
  status?: boolean
  input?: HTMLInputElement
  validationMessage?: string
  validity?: ValidityState
  pattern?: InputPatternItemOrFunction
  value?: V
}
