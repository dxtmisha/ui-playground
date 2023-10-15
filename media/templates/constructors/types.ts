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
export type ConstructorsEmits = {
  load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
// :constructors.once export type ConstructorsSetup = {}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
// :constructors.once export type ConstructorsExpose = {}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ConstructorsSlots = {
  default? (props: any): any
}
