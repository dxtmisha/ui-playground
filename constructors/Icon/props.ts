import { type PropType } from 'vue'
import { type ImageProps } from '../Image/props.ts'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type IconProps = {
  // Values
  icon?: string | object | ImageProps
  iconActive?: string | object | ImageProps

  // Status
  active?: boolean

  // Tokens
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  animationType?: 'type1' | 'type2'
  animationShow?: boolean
  overlay?: boolean
  dynamic?: boolean
  start?: boolean
  end?: boolean
  high?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsIcon: IconProps = {
  ...{
    // :default [!] System label / Системная метка
    animationType: 'type1'
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsIcon = {
  // Values
  icon: [String, Object] as PropType<IconProps['icon']>,
  iconActive: [String, Object] as PropType<IconProps['iconActive']>,

  // Status
  active: Boolean,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    turn: Boolean,
    disabled: Boolean,
    hide: Boolean,
    animationType: {
      type: String as PropType<IconProps['animationType']>,
      default: defaultsIcon?.animationType
    },
    animationShow: Boolean,
    overlay: Boolean,
    dynamic: Boolean,
    start: Boolean,
    end: Boolean,
    high: Boolean
    // :prop [!] System label / Системная метка
  }
}
