import { ButtonDesign } from '../Button/ButtonDesign.ts'

import {
  type ChipProps
} from './props.ts'
import {
  type ChipClasses,
  type ChipComponents,
  type ChipExpose,
  type ChipSetup
} from './types.ts'

/**
 * ChipDesign
 */
export class ChipDesign<
  COMP extends ChipComponents,
  SETUP extends ChipSetup,
  EXPOSE extends ChipExpose,
  CLASSES extends ChipClasses,
  P extends ChipProps
> extends ButtonDesign<
  COMP,
  SETUP,
  EXPOSE,
  CLASSES,
  P
> {
}
