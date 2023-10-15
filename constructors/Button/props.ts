import { PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type PropsButtonType = {
  // :type [!] System label, cannot be deleted / Системная метка, нельзя удалять
  selected?: boolean
  progress?: boolean
  disabled?: boolean
  adaptive?: 'icon' | 'sm' | 'md'
  height?: 'sm' | 'md' | 'lg'
  filled?: boolean
  outlined?: boolean
  text?: boolean
  elevated?: boolean
  tonal?: boolean | 'a' | true
  test?: boolean
  palette?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral' | 'neutralVariant'
  // :type [!] System label, cannot be deleted / Системная метка, нельзя удалять
} & {
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsButton: PropsButtonType = {
  ...{
    // :default [!] System label, cannot be deleted / Системная метка, нельзя удалять
    // :default [!] System label, cannot be deleted / Системная метка, нельзя удалять
  },
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsButton = {
  ...{
    // :prop [!] System label, cannot be deleted / Системная метка, нельзя удалять
    // :prop [!] System label, cannot be deleted / Системная метка, нельзя удалять
  },
  // Values

  // Status

  // Options
}
