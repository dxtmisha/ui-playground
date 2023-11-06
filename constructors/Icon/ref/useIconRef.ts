import { computed, type ComputedRef, type PropType, type VNode } from 'vue'
import { getBind } from '../../../functions/render.ts'

import { DesignComponents } from '../../../classes/ref/DesignComponents.ts'

import { type IconProps } from '../props.ts'

export type UseIconComponent = {
  icon?: object
}

export type UseIconSetup = {
  /**
   * Parameters for the main icon.<br>
   * Параметры для главной иконки.
   */
  iconBind: ComputedRef<IconProps>

  /**
   * Parameters for the secondary icon, if it exists.<br>
   * Параметры для вторичной иконки, если она есть.
   */
  trailingBind?: ComputedRef<IconProps>

  /**
   * If the icon is active.<br>
   * Если иконка активна.
   */
  isIcon: ComputedRef<boolean>

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  renderIcon (): VNode[]
}

export type UseIconProps = {
  // Values
  icon?: string | IconProps

  // Icon
  iconTurn?: boolean
  iconHide?: boolean

  // Status
  selected?: boolean
}

export type UseIconTrailingProps =
  UseIconProps &
  {
    iconTrailing?: UseIconProps['icon']
  }

export const usePropsIcon = {
  // Values
  icon: [String, Object] as PropType<UseIconProps['icon']>,

  // Icon
  iconTurn: Boolean,
  iconHide: Boolean,

  // Status
  selected: Boolean
}

export const usePropsIconTrailing = {
  ...usePropsIcon,
  iconTrailing: [String, Object] as PropType<UseIconProps['icon']>
}

/**
 * useIcon
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classIcon class name for the component /<br>название класса для компонента
 * @param classIconTrailing class for the second icon /<br>класс для второй иконки
 */
export const useIconRef = function <
  COMP extends UseIconComponent,
  P extends UseIconTrailingProps
> (
  props: P,
  components?: DesignComponents<COMP, P>,
  classIcon = 'is-icon',
  classIconTrailing = 'is-icon-trailing'
): UseIconSetup {
  const iconBind = computed(() => {
    return getBind(
      props?.icon,
      {
        class: classIcon,
        active: props?.selected,
        hide: props?.iconHide,
        animationType: 'type2',
        start: true,
        dataEventType: 'icon'
      },
      'icon'
    )
  })

  const trailingBind = 'iconTrailing' in props
    ? computed(() => {
      return getBind(
        props.iconTrailing,
        {
          class: classIconTrailing,
          turn: props?.iconTurn,
          end: true,
          high: true,
          dataEventType: 'icon-trailing'
        },
        'icon'
      )
    })
    : undefined

  const is = computed(() => Boolean(props?.icon || props?.iconTrailing))

  return {
    iconBind,
    trailingBind,

    isIcon: is,

    renderIcon (): VNode[] {
      const elements: any[] = []

      if (components) {
        if (props?.icon) {
          components.renderAdd(
            elements,
            'icon',
            iconBind.value,
            undefined,
            'icon'
          )
        }

        if (
          trailingBind &&
          props?.iconTrailing
        ) {
          components.renderAdd(
            elements,
            'icon',
            trailingBind.value,
            undefined,
            'iconTrailing'
          )
        }
      }

      return elements
    }
  }
}
