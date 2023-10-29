import { computed, type ComputedRef, ref, type Ref, watch } from 'vue'

import { Icon } from './static/Icon.ts'

import { type RefUndefined } from '../../types/ref.ts'
import { type IconProps } from './props.ts'
import { type IconEventLoad } from './typesBasic.ts'

export class IconRef {
  protected readonly item: Icon
  protected readonly itemRef: Ref<IconEventLoad> = ref<IconEventLoad>({
    isActive: false,
    iconBind: undefined,
    iconActiveBind: undefined
  })

  protected readonly active: ComputedRef<IconEventLoad['isActive']>
  protected readonly iconBind: ComputedRef<IconEventLoad['iconBind']>
  protected readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  constructor (
    icon?: RefUndefined<IconProps['icon']>,
    iconActive?: RefUndefined<IconProps['iconActive']>,
    active?: RefUndefined<boolean>,
    turn?: RefUndefined<boolean>,
    disabled?: RefUndefined<boolean>,
    classIcon?: string,
    classIconActive?: string
  ) {
    this.item = new Icon(
      icon?.value,
      iconActive?.value,
      active?.value,
      turn?.value,
      disabled?.value,
      classIcon,
      classIconActive,
      (event: IconEventLoad) => {
        this.itemRef.value = event
      }
    )

    if (icon) {
      watch(icon, value => this.item.setIcon(value))
    }

    if (iconActive) {
      watch(iconActive, value => this.item.setIconActive(value))
    }

    if (active) {
      watch(active, value => this.item.setActive(value))
    }

    if (turn) {
      watch(turn, value => this.item.setTurn(value))
    }

    if (disabled) {
      watch(disabled, value => this.item.setDisabled(value))
    }

    this.active = computed(() => this.itemRef.value.isActive)
    this.iconBind = computed(() => this.itemRef.value.iconBind)
    this.iconActiveBind = computed(() => this.itemRef.value.iconActiveBind)
  }

  isActive (): ComputedRef<IconEventLoad['isActive']> {
    return this.active
  }

  get (): Ref<IconEventLoad> {
    return this.itemRef
  }

  getIconBind (): ComputedRef<IconEventLoad['iconBind']> {
    return this.iconBind
  }

  getIconActiveBind (): ComputedRef<IconEventLoad['iconActiveBind']> {
    return this.iconActiveBind
  }
}
