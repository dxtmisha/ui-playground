import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = {
  // TODO: Location for a custom property / Место для пользовательского свойства
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
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
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
  // TODO: Location for a custom property / Место для пользовательского свойства
  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    minWidth: String as PropType<WindowProps['minWidth']>,
    minHeight: String as PropType<WindowProps['minHeight']>,
    menu: Boolean
    // :prop [!] System label / Системная метка
  }
}
