import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ProgressProps = {
  // Values

  /**
   * Value. If a value is specified, there will be no loader animation.
   * Значение. Если указано значение, не будет анимации загрузчика.
   */
  value?: number | string

  /**
   * Maximum allowable value.
   * Максимально допустимое значение.
   */
  max?: number | string

  // Status

  /**
   * Enable the loader.<br>
   * Включить загрузчик.
   */
  visible?: boolean

  // Options

  /**
   * Value indicating how long to delay before enabling the loader.<br>
   * Значение, указывающее, сколько времени нужно задержать до включения загрузчика.
   */
  delay?: number | string

  // Tokens
  // :type [!] System label / Системная метка
  linear?: boolean
  circular?: boolean
  indeterminate?: 'type1' | 'type2'
  position?: 'top' | 'bottom'
  dense?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsProgress: ProgressProps = {
  max: 100,
  delay: 360,
  ...{
    // :default [!] System label / Системная метка
    linear: true,
    indeterminate: 'type1',
    position: 'top'
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsProgress = {
  // Values
  value: [Number, String],
  max: {
    type: [Number, String],
    default: defaultsProgress?.max
  },

  // Status
  visible: Boolean,

  // Options
  delay: {
    type: [Number, String],
    default: defaultsProgress?.delay
  },

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    linear: {
      type: Boolean,
      default: defaultsProgress?.linear
    },
    circular: Boolean,
    indeterminate: {
      type: String as PropType<ProgressProps['indeterminate']>,
      default: defaultsProgress?.indeterminate
    },
    position: {
      type: String as PropType<ProgressProps['position']>,
      default: defaultsProgress?.position
    },
    dense: Boolean,
    inverse: Boolean
    // :prop [!] System label / Системная метка
  }
}
