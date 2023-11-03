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
  type ImageEventItem,
  type ImageEventLoad,
  type ImageForOption,
  type ImageTypeItem,
  type ImageValue
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
  protected readonly data: ComputedRef<ImageEventItem>
  protected readonly text: ComputedRef<string | undefined>
  protected readonly classes: ComputedRef<ConstrClassObject>
  protected readonly styles: ComputedRef<ConstrStyles>

  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param image values from the image /<br>значения из изображения
   * @param size property determining the size of the picture /<br>свойство определяющее размер картины
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param group group name /<br>название группы
   * @param adaptive activity status /<br>статус активности
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   * @param width physical width of the object /<br>физическая ширина объекта
   * @param height physical height of the object /<br>физическая высота объекта
   */
  constructor (
    props: ImageProps,
    image: RefUndefined<ImageValue>,
    element?: RefUndefined<ImageElement>,
    group?: RefUndefined<string>,
    adaptive?: RefUndefined<boolean>,
    adaptiveAlways?: RefUndefined<boolean>,
    width?: RefUndefined<ImageForOption>,
    height?: RefUndefined<ImageForOption>
  ) {
    this.item = new Image(
      props,
      image?.value,
      element?.value,
      group?.value,
      adaptive?.value,
      adaptiveAlways?.value,
      width?.value,
      height?.value,
      (event: ImageEventLoad) => {
        this.itemRef.value = event
      }
    )

    watchEffect(async () => {
      console.log('update')
      await this.item.getData().makeCallback()
    })

    watch(image, async value => await this.item.setImage(value))

    if (element) {
      watch(element, value => this.item.setElement(value))
    }

    if (group) {
      watch(group, value => this.item.setGroup(value))
    }

    if (adaptive) {
      watch(adaptive, value => this.item.setAdaptive(value))
    }

    if (adaptiveAlways) {
      watch(adaptiveAlways, value => this.item.setAdaptiveAlways(value))
    }

    if (width) {
      watch(width, value => this.item.setWidth(value))
    }

    if (height) {
      watch(height, value => this.item.setHeight(value))
    }

    this.type = computed(() => this.itemRef.value.type)
    this.data = computed(() => this.itemRef.value.image)
    this.text = computed(() => this.itemRef.value.text)
    this.classes = computed(() => this.itemRef.value.classes)
    this.styles = computed(() => this.itemRef.value.styles)
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
    return this.data
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
    return this.styles
  }
}
