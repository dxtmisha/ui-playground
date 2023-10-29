import { getBind } from '../../../functions/render.ts'

import { type IconProps } from '../props.ts'
import { type IconEventLoad } from '../typesBasic.ts'

export class Icon {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected icon?: IconProps['icon'],
    protected iconActive?: IconProps['iconActive'],
    protected active?: boolean,
    protected turn?: boolean,
    protected disabled?: boolean,
    protected readonly classIcon: string = 'is-icon',
    protected readonly classIconActive: string = 'is-icon-active',
    protected readonly callback?: (event: IconEventLoad) => void
  ) {
  }

  isActive (): boolean {
    return Boolean(this.active && this.iconActive)
  }

  getIconBind (): IconEventLoad['iconBind'] {
    if (this.icon) {
      return getBind(this.icon, {
        class: this.classIcon,
        turn: this.turn,
        disabled: this.disabled,
        hide: this.isActive()
      })
    }

    return undefined
  }

  getIconActiveBind (): IconEventLoad['iconActiveBind'] {
    if (this.iconActive) {
      return getBind(this.iconActive, {
        class: this.classIconActive,
        turn: this.turn,
        disabled: this.disabled,
        hide: !this.isActive()
      })
    }

    return undefined
  }

  setIcon (icon?: IconProps['icon']): this {
    this.icon = icon
    this.makeCallback()

    return this
  }

  setIconActive (iconActive?: IconProps['iconActive']): this {
    this.iconActive = iconActive
    this.makeCallback()

    return this
  }

  setActive (active?: boolean): this {
    this.active = active
    this.makeCallback()

    return this
  }

  setTurn (turn?: boolean): this {
    this.turn = turn
    this.makeCallback()

    return this
  }

  setDisabled (disabled?: boolean): this {
    this.disabled = disabled
    this.makeCallback()

    return this
  }

  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   */
  protected makeCallback (): void {
    if (this.callback) {
      this.callback({
        isActive: this.isActive(),
        iconBind: this.getIconBind(),
        iconActiveBind: this.getIconActiveBind()
      })
    }
  }
}
