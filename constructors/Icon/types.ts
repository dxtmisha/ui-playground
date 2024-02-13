import { type ComputedRef } from 'vue'
import { type ConstrClass } from '../../types/constructor'

import { type ImageEmits } from '../Image/types'
import { type IconEventLoad } from './typesBasic'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type IconComponents = {
  image: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type IconEmits = ImageEmits

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type IconSetup = {
  iconBind: ComputedRef<IconEventLoad['iconBind']>
  iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  isActive: ComputedRef<boolean>
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type IconExpose = {
  isActive: ComputedRef<boolean>
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type IconSlots = {
  default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type IconClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
