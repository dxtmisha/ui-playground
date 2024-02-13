import { type ConstrClass } from '../../types/constructor'
import { type MutationDataItem } from '../../classes/mutation/MutationDataItem'
import { ShallowRef } from 'vue'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MutationComponents = {
  item: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type MutationEmits = {
  load: []
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type MutationSetup = {
  items: ShallowRef<MutationDataItem[]>
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type MutationExpose = {
  items: ShallowRef<MutationDataItem[]>
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type MutationSlots = {
  // none
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type MutationClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
