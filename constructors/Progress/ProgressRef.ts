import { computed, shallowRef, watchEffect } from 'vue'

import { Progress } from './Progress'

import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor'
import { type ProgressProps } from './props'

/**
 * Base class Progress for working in Vue.<br>
 * Базовый класс Progress для работы в Vue.
 */
export class ProgressRef {
  protected readonly item: Progress

  readonly tag = computed<string>(() => this.item.getTag())
  readonly valueInPercent = computed<string | null>(() => this.item.getValueInPercent())

  readonly hide = shallowRef<boolean>(false)
  readonly visible = shallowRef<boolean>(false)

  readonly classes = shallowRef<ConstrClassObject>({})
  readonly styles = computed<ConstrStyles>(() => this.item.getStyles())

  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: ProgressProps
  ) {
    this.item = new Progress(
      props,
      (event) => {
        this.hide.value = event.hide
        this.visible.value = event.visible

        this.classes.value = event.classes
      }
    )

    watchEffect(() => this.item.make())
  }

  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param event A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation (event: AnimationEvent): void {
    this.item.onAnimation(event)
  }
}
