import { type PropType } from 'vue'

import {
  WindowProps,
  defaultsWindow,
  propsWindow
} from '../../constructors/Window/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  minWidth: ['sm', 'md', 'lg'],
  minHeight: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  minWidth?: string | 'sm' | 'md' | 'lg' | 'custom'
  minHeight?: string | 'sm' | 'md' | 'lg' | 'custom'
  menu?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<WindowProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsWindow,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsWindow,
  ...{
    // :prop [!] System label / Системная метка
    minWidth: String as PropType<PropsToken['minWidth']>,
    minHeight: String as PropType<PropsToken['minHeight']>,
    menu: Boolean
    // :prop [!] System label / Системная метка
  }
}
