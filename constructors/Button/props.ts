import { type PropType } from 'vue'

import { type UseLabelProps, usePropsLabel } from '../uses/ref/useLabel.ts'
import { type UseIconTrailingProps, usePropsIconTrailing } from '../Icon/useIconRef.ts'
import { type UseProgressProp, usePropsProgress } from '../Progress/useProgressRef.ts'
import { type UseEnabledProps, usePropsEnabled } from '../uses/ref/useEnabled.ts'
import { type UseEventClickProps, usePropsEventClick } from '../uses/ref/useEventClick.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ButtonProps =
  UseLabelProps &
  UseIconTrailingProps &
  UseProgressProp &
  UseEnabledProps &
  UseEventClickProps &
  {
    // Options
    tag?: 'button' | 'a' | 'span' | string

    // Tokens
    // :type [!] System label / Системная метка
    selected?: boolean
    progress?: boolean
    readonly?: boolean
    disabled?: boolean
    // :type [!] System label / Системная метка
    // :type.adaptive.none
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsButton: ButtonProps = {
  tag: 'button',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsButton = {
  ...usePropsLabel,
  ...usePropsIconTrailing,
  ...usePropsProgress,
  ...usePropsEnabled,
  ...usePropsEventClick,

  // Options
  tag: {
    type: String as PropType<ButtonProps['tag']>,
    default: defaultsButton?.tag
  },

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    selected: Boolean,
    progress: Boolean,
    readonly: Boolean,
    disabled: Boolean
    // :prop [!] System label / Системная метка
  }
}
