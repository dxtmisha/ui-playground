import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  progress?: boolean
  readonly?: boolean
  disabled?: boolean
  adaptive?: 'icon'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsButton,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsButton,
  ...{
    // :prop [!] System label / Системная метка
    selected: Boolean,
    progress: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>
    // :prop [!] System label / Системная метка
  }
}
