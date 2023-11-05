import { DesignAsyncAbstract } from '../../../classes/static/DesignAsyncAbstract.ts'

import { type ProgressProps } from '../props.ts'
import { type ProgressEventLoad } from '../typesBasic.ts'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../../types/constructor.ts'

/**
 * Constructor for warming up.<br>
 * Конструктор для прогрева.
 */
export class Progress extends DesignAsyncAbstract<ProgressProps, ProgressEventLoad> {
  protected timeout?: NodeJS.Timeout
  protected timeoutReject?: NodeJS.Timeout

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function on successful image update or data recalculation /<br>
   * функция обратного вызова при успешном обновлении картинки или при перерасчете данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: ProgressProps,
    callback: (event: ProgressEventLoad) => void
  ) {
    super(props, callback, [
      'value',
      'visible'
    ])
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected async initEvent (): Promise<void> {
    if (this.isChanged('visible')) {
      [
        this.event.hide,
        this.event.visible
      ] = await this.makeVisible()
    }

    if (this.isChanged('classes', [
      'value',
      'visible'
    ])) {
      this.event.classes = this.initClasses()
    }
  }

  /**
   * Checks if a specific value has been passed.<br>
   * Проверяет, передано ли конкретное значение.
   */
  isValue (): this is { props: { value: number } } {
    return typeof this.getValue() === 'number'
  }

  /**
   * Returns the tag type for the element.<br>
   * Возвращает тип тега для элемента.
   */
  getTag (): string {
    return this.props?.circular ? 'svg' : 'div'
  }

  /**
   * Getting the value.<br>
   * Получение значения.
   */
  getValue (): number | undefined {
    return this.props?.value
  }

  /**
   * Values are converted to percentages.<br>
   * Значения преобразованы в проценты.
   */
  getValueInPercent (): string | null {
    if (this.isValue()) {
      const value = this.props?.value
      const percent = (100 / (this.props?.max ?? 100) * value)

      if (this.props?.circular) {
        return percent.toString()
      }

      return `${100 - percent}%`
    }

    return null
  }

  /**
   * Values for the style.<br>
   * Значения для стиля.
   */
  getStyles (): ConstrStyles {
    return {
      '??--value': this.getValueInPercent()
    }
  }

  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation ({ animationName }: AnimationEvent): void {
    if (animationName.match('-hidden')) {
      this.event.hide = false
      this.event.classes = this.initClasses()

      this.makeCallbackItem()
    }
  }

  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected makeVisible (): Promise<[boolean, boolean]> {
    return new Promise((resolve, reject) => {
      const visible = this.props?.visible
      const delay = this.props?.delay

      clearTimeout(this.timeout)

      if (this.isValue()) {
        resolve([false, false])
      } else if (Boolean(this.event?.visible) !== visible) {
        if (visible && delay) {
          this.timeout = setTimeout(() => {
            clearTimeout(this.timeoutReject)
            resolve(this.initVisible())
          }, delay)
          this.timeoutReject = setTimeout(reject, delay + 1000)
        } else {
          resolve(this.initVisible())
        }
      }
    })
  }

  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  protected initVisible (): [boolean, boolean] {
    const visible = this.props?.visible
    return [!visible, Boolean(visible)]
  }

  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  protected initClasses (): ConstrClassObject {
    return {
      '??--hide': this.event.hide,
      '??--visible': this.event.visible,
      '??--value': this.isValue()
    }
  }
}
