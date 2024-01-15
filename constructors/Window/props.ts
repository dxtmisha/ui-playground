import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = {
  // Status
  disabled?: boolean

  // Event
  preparation? (open: boolean): Promise<boolean>
  beforeOpening? (open: boolean): Promise<boolean>
  opening? (open: boolean): Promise<boolean>

  // Options
  contextmenu?: boolean

  axis?: 'x' | 'y'
  indent?: number
  persistent?: boolean

  autoClose?: boolean
  flash?: boolean
  inDom?: boolean

  // Tokens
  // :type [!] System label / Системная метка
  minWidth?: string | 'custom'
  minHeight?: string | 'custom'
  menu?: boolean
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
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsWindow = {
  // Status
  disabled: Boolean,

  // Event
  preparation: Function as PropType<WindowProps['preparation']>,
  beforeOpening: Function as PropType<WindowProps['beforeOpening']>,
  opening: Function as PropType<WindowProps['opening']>,

  // Options
  contextmenu: Boolean,

  axis: {
    type: String as PropType<WindowProps['axis']>,
    default: defaultsWindow?.axis
  },
  indent: {
    type: Number as PropType<WindowProps['indent']>,
    default: defaultsWindow?.indent
  },
  persistent: Boolean,

  autoClose: Boolean,
  flash: Boolean,
  inDom: Boolean,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    minWidth: String as PropType<WindowProps['minWidth']>,
    minHeight: String as PropType<WindowProps['minHeight']>,
    menu: Boolean
    // :prop [!] System label / Системная метка
  }
}
