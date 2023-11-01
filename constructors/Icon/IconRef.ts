import { computed, type ComputedRef } from 'vue'

import { Icon } from './static/Icon.ts'

import { type IconProps } from './props.ts'
import { type IconEventLoad } from './typesBasic.ts'

/**
 * Class for the icon component constructor.<br>
 * Класс для конструктора компонента иконки.
 */
export class IconRef {
  protected readonly item: Icon

  protected readonly active: ComputedRef<IconEventLoad['isActive']>
  protected readonly iconBind: ComputedRef<IconEventLoad['iconBind']>
  protected readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
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

  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive (): ComputedRef<IconEventLoad['isActive']> {
    return this.active
  }

  /**
   * Returns data for the icon component.<br>
   * Возвращает данные для компонента иконки.
   */
  getIconBind (): ComputedRef<IconEventLoad['iconBind']> {
    return this.iconBind
  }

  /**
   * Returns data for the additional icon component.<br>
   * Возвращает данные для дополнительного компонента иконки.
   */
  getIconActiveBind (): ComputedRef<IconEventLoad['iconActiveBind']> {
    return this.iconActiveBind
  }
}
