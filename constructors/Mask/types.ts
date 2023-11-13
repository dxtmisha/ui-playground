import { type ConstrClass } from '../../types/constructor.ts'
import { type MaskEventData } from './typesBasic.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MaskComponents = {
  // none
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type MaskEmits = {
  focus: [value: MaskEventData]
  blur: [value: MaskEventData]
  input: [value: MaskEventData]
  change: [value: MaskEventData]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type MaskSetup = {
  // TODO
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type MaskExpose = {
  // TODO
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type MaskSlots = {
  // none
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type MaskClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  character: string
  // :classes [!] System label / Системная метка
}
