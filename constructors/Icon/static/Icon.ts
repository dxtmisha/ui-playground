import { getBind } from '../../../functions/render.ts'

import { DesignAbstract } from '../../../classes/static/DesignAbstract.ts'

import { type IconProps } from '../props.ts'
import { type IconEventLoad } from '../typesBasic.ts'

/**
 * Class for the icon component constructor.<br>
 * Класс для конструктора компонента иконки.
 */
export class Icon extends DesignAbstract<IconProps, IconEventLoad> {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param classIcon class name for the main icon /<br>название класса для основной иконки
   * @param classIconActive class name for the additional icon /<br>название класса для дополнительной иконки
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   */
  constructor (
    props: IconProps,
    protected readonly classIcon: string = 'is-icon',
    protected readonly classIconActive: string = 'is-icon-active',
    callback?: (event: IconEventLoad) => void
  ) {
    super(props, callback)
  }

  /**
   * Checks if the additional icon is active.<br>
   * Проверяет, активна ли дополнительная иконка.
   */
  isActive (): boolean {
    return Boolean(this.props?.active && this.props?.iconActive)
  }

  /**
   * Returns data for the icon component.<br>
   * Возвращает данные для компонента иконки.
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
   * Returns data for the additional icon component.<br>
   * Возвращает данные для дополнительного компонента иконки.
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

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected initEvent (): void {
    this.event.isActive = this.isActive()
    this.event.iconBind = this.getIconBind()
    this.event.iconActiveBind = this.getIconActiveBind()
  }
}
