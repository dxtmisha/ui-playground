import { computed, type ComputedRef } from 'vue'

import { Icon } from './Icon.ts'

import { type IconProps } from './props.ts'
import { type IconEventLoad } from './typesBasic.ts'

/**
 * Base Icon class for working in Vue.<br>
 * Базовый класс Icon для работы во Vue.
 */
export class IconRef {
  protected readonly item: Icon

  readonly active: ComputedRef<IconEventLoad['isActive']>
  readonly iconBind: ComputedRef<IconEventLoad['iconBind']>
  readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  constructor (
    props: IconProps,
    classIcon: string = 'is-icon',
    classIconActive: string = 'is-icon-active'
  ) {
    this.item = new Icon(
      props,
      classIcon,
      classIconActive
    )

    this.active = computed(() => this.item.isActive())
    this.iconBind = computed(() => this.item.getIconBind())
    this.iconActiveBind = computed(() => this.item.getIconActiveBind())
  }
}
