import { type PropType } from 'vue'

import {
  WindowProps,
  defaultsWindow,
  propsWindow
} from '../../constructors/Window/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  width: ['auto', 'max', 'sm', 'md', 'lg'],
  height: ['auto', 'max', 'sm', 'md', 'lg'],
  adaptive: ['menu', 'modal', 'modalDynamic', 'static', 'auto', 'staticSm', 'staticMd', 'staticLg'],
  alignment: ['center', 'top', 'right', 'bottom', 'left'],
  origin: ['center', 'top', 'right', 'bottom', 'left', 'topToBottom', 'rightToLeft', 'bottomToTop', 'leftToRight']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] open?: boolean
  // [constructor] disabled?: boolean
  // [constructor] preparation? (open: boolean): Promise<boolean>
  // [constructor] beforeOpening? (open: boolean): Promise<boolean>
  // [constructor] opening? (open: boolean): Promise<boolean>
  // [constructor] contextmenu?: boolean
  // [constructor] staticMode?: boolean
  // [constructor] axis?: 'x' | 'y' | 'on'
  // [constructor] indent?: number
  // [constructor] persistent?: boolean
  // [constructor] overElement?: ElementOrString<HTMLElement>
  // [constructor] autoClose?: boolean
  // [constructor] flash?: boolean
  // [constructor] inDom?: boolean
  width?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom'
  height?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom'
  adaptive?: 'menu' | 'modal' | 'modalDynamic' | 'static' | 'auto' | 'staticSm' | 'staticMd' | 'staticLg'
  overscroll?: boolean
  dense?: boolean
  fullscreen?: boolean
  alignment?: 'center' | 'top' | 'right' | 'bottom' | 'left'
  origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight'
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
    adaptive: 'auto',
    overscroll: true
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
    adaptive: {
      type: String as PropType<PropsToken['adaptive']>,
      default: defaults?.adaptive
    },
    overscroll: {
      type: Boolean,
      default: defaults?.overscroll
    },
    dense: Boolean,
    fullscreen: Boolean,
    alignment: String as PropType<PropsToken['alignment']>,
    origin: String as PropType<PropsToken['origin']>
    // :prop [!] System label / Системная метка
  }
}
