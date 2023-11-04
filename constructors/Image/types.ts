import {
  type ComputedRef,
  type ShallowRef
} from 'vue'

import {
  type ConstrClass
} from '../../types/constructor.ts'
import {
  type ImageEventData,
  type ImageEventItem,
  type ImageTypeItem
} from './typesBasic.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ImageComponents = {
  // componentName: Record<string, any>
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ImageEmits = {
  load: [image: ImageEventData]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ImageSetup = {
  type: ComputedRef<ImageTypeItem>
  data: ShallowRef<ImageEventItem>

  text: ComputedRef<string | undefined>
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ImageExpose = {
  type: ComputedRef<ImageTypeItem>
  data: ComputedRef<ImageEventItem>
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ImageSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ImageClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
