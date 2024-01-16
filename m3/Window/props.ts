import { type PropType } from 'vue'

import {
  WindowProps,
  defaultsWindow,
  propsWindow
} from '../../constructors/Window/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  width: ['sm', 'md', 'lg'],
  height: ['sm', 'md', 'lg'],
  adaptive: ['menu']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] disabled?: boolean
  // [constructor] preparation? (open: boolean): Promise<boolean>
  // [constructor] beforeOpening? (open: boolean): Promise<boolean>
  // [constructor] opening? (open: boolean): Promise<boolean>
  // [constructor] contextmenu?: boolean
  // [constructor] axis?: 'x' | 'y'
  // [constructor] indent?: number
  // [constructor] persistent?: boolean
  // [constructor] autoClose?: boolean
  // [constructor] flash?: boolean
  // [constructor] inDom?: boolean
  width?: string | 'sm' | 'md' | 'lg' | 'custom'
  height?: string | 'sm' | 'md' | 'lg' | 'custom'
  adaptive?: 'menu'
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
    width: String as PropType<PropsToken['width']>,
    height: String as PropType<PropsToken['height']>,
    adaptive: String as PropType<PropsToken['adaptive']>
    // :prop [!] System label / Системная метка
  }
}
