import { ButtonDesign } from '../Button/ButtonDesign'

import {
  type ChipProps
} from './props'
import {
  type ChipClasses,
  type ChipComponents,
  type ChipExpose,
  type ChipSetup
} from './types'

/**
 * Class constructor for the chips component.<br>
 * Класс-конструктор для компонента чипсов.
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
