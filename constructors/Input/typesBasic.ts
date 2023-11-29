import { MaskGroup } from '../Mask/typesBasic.ts'

export type InputPatternElement = Partial<HTMLInputElement>
export type InputPatternItem = string | InputPatternElement
export type InputPatternItemOrFunction = InputPatternItem | ((item: MaskGroup) => InputPatternItem)
export type InputPatternList = Record<string, InputPatternItemOrFunction>

export type InputValidationItem<P extends InputPatternItemOrFunction = InputPatternItemOrFunction> = {
  group: string
  status: boolean
  input: HTMLInputElement
  validationMessage: string
  validity: ValidityState
  pattern: P
}
