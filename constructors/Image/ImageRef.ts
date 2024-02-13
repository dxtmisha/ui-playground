import { computed, shallowRef, watchEffect } from 'vue'

import { Image } from './Image'

import { type RefUndefined } from '../../types/ref'
import {
  type ConstrStyles
} from '../../types/constructor'
import { type ImageProps } from './props'
import {
  type ImageElement,
  type ImageEventItem,
  type ImageEventLoad
} from './typesBasic'

/**
 * Base Image class for working in Vue.<br>
 * Базовый класс Image для работы во Vue.
 */
export class ImageRef {
  protected readonly item: Image

  readonly type = computed(() => this.item.getType())
  readonly data = shallowRef<ImageEventItem>()

  readonly text = computed(() => this.item.getText())
  readonly classes = computed(() => this.item.getClasses())
  readonly styles = shallowRef<ConstrStyles>()

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  constructor (
    props: ImageProps,
    element: RefUndefined<ImageElement>
  ) {
    this.item = new Image(
      props,
      element,
      (event: ImageEventLoad) => {
        this.data.value = event.image
        this.styles.value = event.styles
      }
    )

    watchEffect(() => this.item.data.make(true))
    watchEffect(() => this.item.updateAdaptive())
  }

  /**
   * Destructor
   */
  destructor (): void {
    this.item.destructor()
  }
}
