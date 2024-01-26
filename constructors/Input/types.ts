import { type ShallowRef } from 'vue'
import { type ConstrClass } from '../../types/constructor.ts'
import { type InputValidationItem } from './typesBasic.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputComponents = {
  icon: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type InputEmits = {
  input: [
    event: InputEvent | Event,
    value: InputValidationItem
  ],
  'update:value': [value: any],
  'update:modelValue': [value: any],
  change: [
    event: InputEvent | Event,
    value: InputValidationItem
  ]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type InputSetup<V = string> = {
  value: ShallowRef<V | undefined>

  onInput (event: InputEvent | Event): void
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type InputExpose = {
  // TODO
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type InputSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type InputClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
