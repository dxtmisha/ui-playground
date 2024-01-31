import { type PropType } from 'vue'
import { type ElementOrString } from '../../types/element.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = {
  // Status
  open?: boolean
  disabled?: boolean

  // Event
  preparation? (open: boolean): Promise<boolean>
  beforeOpening? (open: boolean): Promise<boolean>
  opening? (open: boolean): Promise<boolean>

  // Options
  contextmenu?: boolean

  staticMode?: boolean
  axis?: 'x' | 'y' | 'on'
  indent?: number
  persistent?: boolean
  overElement?: ElementOrString<HTMLElement>

  autoClose?: boolean
  flash?: boolean
  inDom?: boolean

  // Tokens
  // :type [!] System label / Системная метка
  width?: string | 'auto' | 'max' | 'custom'
  height?: string | 'auto' | 'max' | 'custom'
  adaptive?: string | 'menu' | 'modal' | 'modalDynamic' | 'static'
  overscroll?: boolean
  dense?: boolean
  fullscreen?: boolean
  alignment?: string | 'center' | 'top' | 'right' | 'bottom' | 'left'
  origin?: string | 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight'
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsWindow: WindowProps = {
  axis: 'y',
  indent: 4,
  ...{
    // :default [!] System label / Системная метка
    overscroll: true
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsWindow = {
  // Status
  open: Boolean,
  disabled: Boolean,

  // Event
  preparation: Function as PropType<WindowProps['preparation']>,
  beforeOpening: Function as PropType<WindowProps['beforeOpening']>,
  opening: Function as PropType<WindowProps['opening']>,

  // Options
  contextmenu: Boolean,

  staticMode: Boolean,
  axis: {
    type: String as PropType<WindowProps['axis']>,
    default: defaultsWindow?.axis
  },
  indent: {
    type: Number as PropType<WindowProps['indent']>,
    default: defaultsWindow?.indent
  },
  persistent: Boolean,
  overElement: [String, HTMLElement] as PropType<WindowProps['overElement']>,

  autoClose: Boolean,
  flash: Boolean,
  inDom: Boolean,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    width: String as PropType<WindowProps['width']>,
    height: String as PropType<WindowProps['height']>,
    adaptive: String as PropType<WindowProps['adaptive']>,
    overscroll: {
      type: Boolean,
      default: defaultsWindow?.overscroll
    },
    dense: Boolean,
    fullscreen: Boolean,
    alignment: String as PropType<WindowProps['alignment']>,
    origin: String as PropType<WindowProps['origin']>
    // :prop [!] System label / Системная метка
  }
}
