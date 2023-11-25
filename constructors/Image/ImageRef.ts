import { computed, type ComputedRef, shallowRef, watch, watchEffect } from 'vue'

import { Image } from './Image.ts'

import { type RefUndefined } from '../../types/ref.ts'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor.ts'
import { type ImageProps } from './props.ts'
import {
  type ImageElement,
  type ImageEventItem,
  type ImageEventLoad,
  type ImageTypeItem
} from './typesBasic.ts'

/**
 * Base class for working with images and icons.<br>
 * Базовый класс для работы с изображениями и иконками.
 */
export class ImageRef {
  protected readonly item: Image

  readonly type: ComputedRef<ImageTypeItem>
  readonly data = shallowRef<ImageEventItem>()

  readonly text: ComputedRef<string | undefined>
  readonly classes: ComputedRef<ConstrClassObject>
  readonly styles = shallowRef<ConstrStyles>()

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  constructor (
    props: ImageProps,
    element?: RefUndefined<ImageElement>
  ) {
    this.item = new Image(
      props,
      element?.value,
      (event: ImageEventLoad) => {
        this.data.value = event.image
        this.styles.value = event.styles
      }
    )

    watchEffect(() => this.item.getData().make(true))
    watchEffect(() => this.item.updateAdaptive())

    if (element) {
      watch(element, value => this.item.setElement(value))
    }

    this.type = computed(() => this.item.getType())

    this.text = computed(() => this.item.getText())
    this.classes = computed(() => this.item.getClasses())
  }

  /**
   * Destructor
   */
  destructor (): void {
    this.item.destructor()
  }
}
