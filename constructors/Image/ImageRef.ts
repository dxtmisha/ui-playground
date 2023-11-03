import { computed, type ComputedRef, ref, type Ref, watch, watchEffect } from 'vue'

import { Image } from './static/Image.ts'

import { type RefUndefined } from '../../types/ref.ts'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor.ts'
import { type ImageProps } from './props.ts'
import {
  type ImageElement,
  type ImageEventData,
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
  protected readonly itemRef: Ref<ImageEventLoad> = ref<ImageEventLoad>({
    type: undefined,
    image: undefined,
    text: undefined,
    classes: {},
    styles: {}
  })

  protected readonly type: ComputedRef<ImageTypeItem>
  protected readonly text: ComputedRef<string | undefined>
  protected readonly classes: ComputedRef<ConstrClassObject>

  protected readonly data: Ref<ImageEventItem> = ref()
  protected readonly dataComputed: ComputedRef<ImageEventItem>

  protected readonly styles: Ref<ConstrStyles> = ref({})
  protected readonly stylesComputed: ComputedRef<ConstrStyles>

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
      (event: ImageEventData) => {
        this.data.value = event.image
        this.styles.value = this.item.getStyles()
      }
    )

    watchEffect(async () => {
      await this.item.getData().makeCallback()
    })

    if (element) {
      watch(element, value => this.item.setElement(value))
    }

    this.type = computed(() => this.item.getType())
    this.text = computed(() => this.item.getText())
    this.classes = computed(() => this.item.getClasses())

    this.dataComputed = computed(() => this.data.value)
    this.stylesComputed = computed(() => this.styles.value)
  }

  /**
   * Destructor
   */
  destructor (): void {
    this.item.destructor()
  }

  /**
   * Returns an object with data.<br>
   * Возвращает объект с данными.
   */
  getItem (): ImageEventLoad {
    return this.itemRef.value
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType (): ComputedRef<ImageTypeItem> {
    return this.type
  }

  /**
   * A method for obtaining an object with values for an image.<br>
   * Метод для получения объекта с значениями для изображения.
   */
  getData (): ComputedRef<ImageEventItem> {
    return this.dataComputed
  }

  /**
   * Values for the text.<br>
   * Значения для текста.
   */
  getText (): ComputedRef<string | undefined> {
    return this.text
  }

  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  getClasses (): ComputedRef<ConstrClassObject> {
    return this.classes
  }

  /**
   * Values for the style.<br>
   * Значения для стиля.
   */
  getStyles (): ComputedRef<ConstrStyles> {
    return this.stylesComputed
  }
}
