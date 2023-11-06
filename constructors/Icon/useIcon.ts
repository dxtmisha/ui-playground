import { computed, type ComputedRef, type PropType, type VNode } from 'vue'
import { getBind } from '../../functions/render.ts'

import { DesignComponents } from '../../classes/ref/DesignComponents.ts'

import { type IconProps } from './props.ts'

export type UseIconComponent = {
  icon?: object
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

export type useIconItem = {
  iconBind: ComputedRef<IconProps>
  trailingBind?: ComputedRef<IconProps>
}

export const useIcon = function <
  COMP extends UseIconComponent,
  P extends UseIconTrailingProps
> (
  props: P,
  components?: DesignComponents<COMP, P>,
  classIcon = 'is-icon',
  classIconTrailing = 'is-icon-trailing'
) {
  const iconBind = computed(() => {
    return getBind(
      props?.icon,
      {
        class: classIcon,
        active: props?.selected,
        hide: props?.iconHide,
        animationType: 'type2',
        start: true
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
          high: true
        },
        'icon'
      )
    })
    : undefined

  const is = computed(() => Boolean(props?.icon || props?.iconTrailing))

  return {
    iconBind,
    trailingBind,
    is,

    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    render (): VNode[] {
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
