import { type ConstrClass } from '../../types/constructor'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type M3Components = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type M3Emits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type M3Setup = {
  // TODO
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type M3Expose = {
  // TODO
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type M3Slots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type M3Classes = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
