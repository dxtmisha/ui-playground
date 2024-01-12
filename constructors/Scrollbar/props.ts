import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ScrollbarProps = {
  // Options
  tag: string

  // Tokens
  // :type [!] System label / Системная метка
  visible?: boolean
  border?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsScrollbar: ScrollbarProps = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsScrollbar = {
  tag: {
    type: String as PropType<ScrollbarProps['tag']>,
    default: defaultsScrollbar.tag
  },

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    visible: Boolean,
    border: Boolean,
    inverse: Boolean
    // :prop [!] System label / Системная метка
  }
}
