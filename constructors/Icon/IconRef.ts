import { computed } from 'vue'

import { Icon } from './Icon.ts'

import { type IconProps } from './props.ts'

/**
 * Base Icon class for working in Vue.<br>
 * Базовый класс Icon для работы во Vue.
 */
export class IconRef {
  protected readonly item: Icon

  readonly active = computed(() => this.item.isActive())
  readonly iconBind = computed(() => this.item.getIconBind())
  readonly iconActiveBind = computed(() => this.item.getIconActiveBind())

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
  }
}
