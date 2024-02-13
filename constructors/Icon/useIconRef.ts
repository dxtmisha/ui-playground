import { computed, type ComputedRef, type PropType, type VNode } from 'vue'
import { getBind } from '../../functions/render'

import { DesignComponents } from '../../classes/design/DesignComponents'

import { type IconProps } from './props'

export type UseIconComponent = {
  icon?: object
}

export type UseIconSetup = {
  /**
   * Property for the base icon.<br>
   * Свойство для базовой иконки.
   */
  iconBind: ComputedRef<IconProps>

  /**
   * Property for the additional icon.<br>
   * Свойство для дополнительной иконки.
   */
  trailingBind?: ComputedRef<IconProps>

  /**
   * Is the activity status enabled.<br>
   * Включен ли статус активности.
   */
  isIcon: ComputedRef<boolean>

  /**
   * Method for rendering the icon component.<br>
   * Метод для рендеринга компонента иконки.
   */
  renderIcon (): VNode[]
}

export type UseIconProps = {
  // Values

  /**
   * Property for the base icon.<br>
   * Свойство для базовой иконки.
   */
  icon?: string | IconProps

  // Status

  /**
   * Enables the selection state, translates the base icon into an active state.<br>
   * Включает состояние выделения, переводит базовую иконку в активное состояние.
   */
  selected?: boolean

  /**
   * Flip the icon. The additional icon is rotated, or the base one if there is no additional one.<br>
   * Перевернуть иконку. Поворачивается дополнительная иконка или базовая, если дополнительной нет.
   */
  iconTurn?: boolean

  /**
   * Hides the base icon.<br>
   * Скрывает базовую иконку.
   */
  iconHide?: boolean
}

export type UseIconTrailingProps =
  UseIconProps &
  {
    /**
     * Property for the additional icon.<br>
     * Свойство для дополнительной иконки.
     */
    iconTrailing?: UseIconProps['icon']
  }

export const usePropsIcon = {
  // Values
  icon: [String, Object] as PropType<UseIconProps['icon']>,

  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}

export const usePropsIconTrailing = {
  ...usePropsIcon,
  iconTrailing: [String, Object] as PropType<UseIconProps['icon']>
}

/**
 * The function returns data for working with the Icon component.<br>
 * Функция возвращает данные для работы с компонентом Icon.
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
        turn: !props?.iconTrailing && props?.iconTurn,
        hide: props?.iconHide,
        animationType: 'type2',
        start: true,
        'data-event-type': 'icon'
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
          'data-event-type': 'icon-trailing'
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
