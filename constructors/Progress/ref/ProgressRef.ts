import { computed, type ComputedRef, shallowRef, watchEffect } from 'vue'

import { Progress } from '../static/Progress.ts'

import { type ProgressProps } from '../props.ts'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../../types/constructor.ts'

/**
 * Constructor for warming up.<br>
 * Конструктор для прогрева.
 */
export class ProgressRef {
  protected readonly item: Progress

  readonly tag: ComputedRef<string>
  readonly valueInPercent: ComputedRef<string | null>

  readonly hide = shallowRef<boolean>(false)
  readonly visible = shallowRef<boolean>(false)

  readonly classes = shallowRef<ConstrClassObject>({})
  readonly styles: ComputedRef<ConstrStyles>

  readonly onAnimation: (event: AnimationEvent) => void

  /**
   * Constructor
   * @param props base data /<br>базовые данные
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

    this.tag = computed(() => this.item.getTag())
    this.valueInPercent = computed(() => this.item.getValueInPercent())

    this.styles = computed(() => this.item.getStyles())

    this.onAnimation = (event: AnimationEvent) => this.item.onAnimation(event)
  }
}
