import { type ConstrClass } from '../../types/constructor.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RippleComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type RippleEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type RippleSetup = {
  onClick: (event: MouseEvent) => void
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type RippleExpose = {
  // none
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type RippleSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type RippleClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
