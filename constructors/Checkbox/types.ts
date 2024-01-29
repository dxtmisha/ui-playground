import { type ComputedRef, type VNode } from 'vue'
import { type ConstrClass } from '../../types/constructor.ts'
import { type ImageProps } from '../Image/props.ts'
import {
  type InputComponents,
  type InputEmits,
  type InputExpose,
  type InputSetup,
  type InputSlots
} from '../Input/types.ts'

import {
  type UseFieldMessageComponent,
  type UseFieldMessageSetup
} from '../FieldMessage/useFieldMessageRef.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CheckboxComponents =
  InputComponents &
  UseFieldMessageComponent &
  {
    ripple?: object
  }

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type CheckboxEmits = InputEmits

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type CheckboxSetup =
  InputSetup<boolean> &
  UseFieldMessageSetup &
  {
    iconBind: ComputedRef<ImageProps>

    renderInput: () => VNode
    renderInputHidden: () => VNode
    renderChecked: () => VNode
    renderInfo: () => VNode
  }

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type CheckboxExpose = InputExpose

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type CheckboxSlots = InputSlots

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type CheckboxClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  item: string
  itemIcon: string
  info: string
  infoLabel: string
  // :classes [!] System label / Системная метка
}
