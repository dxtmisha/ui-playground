/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ConstructorComponents = {
  componentName: Record<string, any>
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ButtonEmits = {
  load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ButtonSetup = {}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ButtonExpose = {}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ButtonSlots = {
  default? (props: any): any
}
