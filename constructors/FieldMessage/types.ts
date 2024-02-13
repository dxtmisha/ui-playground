import { ComputedRef, VNode } from 'vue'
import { type ConstrClass } from '../../types/constructor'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldMessageComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type FieldMessageEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type FieldMessageSetup = {
  is: ComputedRef<boolean>
  isMessage: ComputedRef<boolean>
  isValidation: ComputedRef<boolean>
  isCounter: ComputedRef<boolean>
  isMax: ComputedRef<boolean>
  message: ComputedRef<string | undefined>
  counter: ComputedRef<string | undefined>

  renderInfo: () => VNode
  renderCounter: () => VNode
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type FieldMessageExpose = {
  // None
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type FieldMessageSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type FieldMessageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  info: string
  counter: string
  // :classes [!] System label / Системная метка
}
