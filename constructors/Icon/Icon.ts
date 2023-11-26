import { getBind } from '../../functions/render.ts'

import { type IconProps } from './props.ts'
import { type IconEventLoad } from './typesBasic.ts'

/**
 * Base class for working with icons.<br>
 * Базовый класс для работы с иконками.
 */
export class Icon {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: IconProps,
    protected readonly classIcon: string = 'is-icon',
    protected readonly classIconActive: string = 'is-icon-active'
  ) {
  }

  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive (): boolean {
    return Boolean(this.props?.active && this.props?.iconActive)
  }

  /**
   * Returns the property for the base icon.<br>
   * Возвращает свойство для базовой иконки.
   */
  getIconBind (): IconEventLoad['iconBind'] {
    if (this.props?.icon) {
      return getBind(this.props.icon, {
        class: this.classIcon,
        turn: this.props?.turn,
        disabled: this.props?.disabled,
        hide: this.isActive()
      })
    }

    return undefined
  }

  /**
   * Returns the property for the additional icon.<br>
   * Возвращает свойство для дополнительной иконки.
   */
  getIconActiveBind (): IconEventLoad['iconActiveBind'] {
    if (this.props?.iconActive) {
      return getBind(this.props.iconActive, {
        class: this.classIconActive,
        turn: this.props?.turn,
        disabled: this.props?.disabled,
        hide: !this.isActive()
      })
    }

    return undefined
  }
}
