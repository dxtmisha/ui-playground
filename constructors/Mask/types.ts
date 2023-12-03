import { type ConstrClass } from '../../types/constructor.ts'
import {
  type MaskEventData,
  type MaskViewList
} from './typesBasic.ts'
import { ComputedRef } from 'vue'

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
  focus: [
    event: FocusEvent,
    value: MaskEventData
  ]
  blur: [
    event: FocusEvent,
    value: MaskEventData
  ]
  keydown: [
    event: KeyboardEvent,
    value: MaskEventData
  ]
  beforeinput: [
    event: InputEvent,
    value: MaskEventData
  ]
  input: [
    event: InputEvent,
    value: MaskEventData
  ]
  change: [
    event: InputEvent,
    value: MaskEventData
  ]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type MaskSetup = {
  valueBasic: ComputedRef<string>
  value: ComputedRef<string>
  view: ComputedRef<MaskViewList>

  onFocus (event: FocusEvent): void
  onBlur (event: FocusEvent): void
  onKeydown (event: KeyboardEvent): void
  onBeforeinput (event: InputEvent): void
  onInput (event: InputEvent): void
  onChange (event: Event): void
  onPaste (event: ClipboardEvent): void
  onClick (event: MouseEvent): void
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
  characterItem: string
  // :classes [!] System label / Системная метка
}
