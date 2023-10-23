import { PropType } from 'vue'

import {
  ImageProps,
  defaultsImage,
  propsImage
} from '../../constructors/Image/props.ts'

export const PropsValues = {
  // :values [!] System label / Системная метка
  
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ImageProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsImage,
  ...{
    // :default [!] System label / Системная метка
    
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsImage,
  ...{
    // :prop [!] System label / Системная метка
    disabled: Boolean
    // :prop [!] System label / Системная метка
  }
}
