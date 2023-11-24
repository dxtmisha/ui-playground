import { type ConstrClass } from '../../types/constructor.ts'
import {
  type UseLabelSetup,
  type UseLabelSlots
} from '../uses/ref/useLabel.ts'
import {
  type UseIconComponent,
  type UseIconSetup
} from '../Icon/ref/useIconRef.ts'
import {
  type UseProgressComponent,
  type UseProgressSetup
} from '../Progress/useProgressRef.ts'
import { type UseEnabledSetup } from '../uses/ref/useEnabled.ts'
import {
  type UseEventClickEmits,
  type UseEventClickSetup
} from '../uses/ref/useEventClick.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ButtonComponents =
  UseIconComponent &
  UseProgressComponent &
  {
    ripple?: object
  }

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ButtonEmits = UseEventClickEmits

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ButtonSetup =
  UseLabelSetup &
  UseIconSetup &
  UseProgressSetup &
  UseEnabledSetup &
  UseEventClickSetup

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ButtonExpose = {
  // none
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ButtonSlots = UseLabelSlots

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ButtonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  progress: string
  label: string
  icon: string
  trailing: string
  // :classes [!] System label / Системная метка
}
