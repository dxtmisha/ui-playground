import { ComputedRef } from 'vue'

import { type ConstrClass } from '../../types/constructor.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ProgressComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ProgressEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ProgressSetup = {
  tag: ComputedRef<string>
  valueInPercent?: ComputedRef<string | null>

  hide: ComputedRef<boolean>
  visible: ComputedRef<boolean>

  onAnimation: (event: AnimationEvent) => void
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ProgressExpose = {
  // none
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ProgressSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ProgressClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  circle: string
  circleSub: string
  // :classes [!] System label / Системная метка
}
