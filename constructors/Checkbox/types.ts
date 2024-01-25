import { type ConstrClass } from '../../types/constructor.ts'
import {
  type InputEmits,
  type InputExpose,
  type InputSetup
} from '../Input/types.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CheckboxComponents = {
  image: object
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
export type CheckboxSetup = InputSetup

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type CheckboxExpose = InputExpose

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type CheckboxSlots = {
  // default? (props: any): any
}

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
  // :classes [!] System label / Системная метка
}
