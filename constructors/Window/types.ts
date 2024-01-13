import { type VNode } from 'vue'
import { type ConstrClass } from '../../types/constructor.ts'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type WindowComponents = {
  scrollbar?: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type WindowEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type WindowSetup = {
  slotControl: {
    class: string
    onclick: (event: MouseEvent & TouchEvent) => void
    oncontextmenu: (event: MouseEvent & TouchEvent) => void
  },
  renderBodyContext (): VNode | undefined
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type WindowExpose = {
  // TODO
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type WindowSlots = {
  control? (props: WindowSetup['slotControl']): any
  title? (props: any): any
  footer? (props: any): any
  default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type WindowClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  bodyContext: string
  control: string
  // :classes [!] System label / Системная метка
}
