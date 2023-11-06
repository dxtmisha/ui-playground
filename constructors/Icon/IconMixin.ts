import {
  computed,
  type ComputedRef,
  type PropType,
  type VNode
} from 'vue'
import { getBind } from '../../functions/render.ts'

import { DesignComponents } from '../../classes/ref/DesignComponents.ts'

import { type IconProps } from './props.ts'

export type IconComponentInclude = {
  icon?: object
}

export type IconPropInclude = {
  // Values
  icon?: string | IconProps

  // Icon
  iconTurn?: boolean
  iconHide?: boolean

  // Status
  selected?: boolean
}

export type IconTrailingPropInclude =
  IconPropInclude &
  {
    iconTrailing?: IconPropInclude['icon']
  }

export const propsIconInclude = {
  // Values
  icon: [String, Object] as PropType<IconPropInclude['icon']>,

  // Icon
  iconTurn: Boolean,
  iconHide: Boolean,

  // Status
  selected: Boolean
}

export const propsIconTrailingInclude = {
  ...propsIconInclude,
  iconTrailing: [String, Object] as PropType<IconPropInclude['icon']>
}

/**
 * IconMixin
 */
export class IconMixin<
  COMP extends IconComponentInclude,
  P extends IconTrailingPropInclude
> {
  readonly iconBind: ComputedRef<IconProps>
  readonly trailingBind?: ComputedRef<IconProps>

  /**
   * Constructor
   * @param props input parameter /<br>входной параметр
   * @param components object for working with components /<br>объект для работы с компонентами
   * @param classIcon class name for the component /<br>название класса для компонента
   * @param classIconTrailing class for the second icon /<br>класс для второй иконки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: P,
    protected readonly components?: DesignComponents<COMP, P>,
    protected readonly classIcon = 'is-icon',
    protected readonly classIconTrailing = 'is-icon-trailing'
  ) {
    this.iconBind = computed(() => {
      return getBind(
        this.props.icon,
        {
          active: this.props?.selected,
          hide: this.props?.iconHide,
          animationType: 'type2',
          start: true
        },
        'icon'
      )
    })

    if ('iconTrailing' in this.props) {
      this.trailingBind = computed(() => {
        return getBind(
          this.props.iconTrailing,
          {
            turn: this.props?.iconTurn,
            end: true,
            high: true
          },
          'icon'
        )
      })
    }
  }

  readonly is = computed(() => Boolean(this.props?.icon || this.props?.iconTrailing))

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  render (): VNode[] {
    const elements: any[] = []

    if (this.components) {
      if (this.props?.icon) {
        this.components.renderAdd(
          elements,
          'icon',
          {
            class: this.classIcon,
            ...this.iconBind.value
          },
          undefined,
          'icon'
        )
      }

      if (
        this.trailingBind &&
        this.props?.iconTrailing
      ) {
        this.components.renderAdd(
          elements,
          'icon',
          {
            class: this.classIconTrailing,
            ...this.trailingBind.value
          },
          undefined,
          'iconTrailing'
        )
      }
    }

    return elements
  }
}
