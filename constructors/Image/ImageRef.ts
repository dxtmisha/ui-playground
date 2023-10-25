import { computed, type ComputedRef, watch } from 'vue'
import { isFilled } from '../../functions/data.ts'

import { Image } from './static/Image.ts'

import { type RefUndefined } from '../../types/ref.ts'
import {
  type ImageCoordinator,
  type ImageElement,
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
  protected readonly type: ComputedRef<ImageTypeItem>

  /**
   * Constructor
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   * @param image values from the image /<br>значения из изображения
   * @param url link to the folder with images /<br>ссылка на папку с изображениями
   * @param size property determining the size of the picture /<br>свойство определяющее размер картины
   * @param coordinator coordinates for margins /<br>координаты для отступов
   * @param x coordinate of the picture on the left /<br>координата картины слева
   * @param y coordinate of the picture on the top /<br>координата картины сверху
   * @param group group name /<br>название группы
   * @param adaptive activity status /<br>статус активности
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   * @param width physical width of the object /<br>физическая ширина объекта
   * @param height physical height of the object /<br>физическая высота объекта
   */
  constructor (
    protected element: RefUndefined<ImageElement>,
    protected image: RefUndefined<ImageValue>,
    protected url?: RefUndefined<string>,
    protected size?: RefUndefined<ImageForOption>,
    protected coordinator?: RefUndefined<ImageCoordinator>,
    protected x?: RefUndefined<ImageForOption>,
    protected y?: RefUndefined<ImageForOption>,
    protected group?: RefUndefined<string>,
    protected adaptive?: RefUndefined<boolean>,
    protected adaptiveAlways?: RefUndefined<boolean>,
    protected width?: RefUndefined<ImageForOption>,
    protected height?: RefUndefined<ImageForOption>
  ) {
    this.item = new Image(
      element.value,
      image.value,
      url?.value,
      size?.value,
      coordinator?.value,
      x?.value,
      y?.value,
      group?.value,
      adaptive?.value,
      adaptiveAlways?.value,
      width?.value,
      height?.value
    )

    watch(element, value => this.item.setElement(value))
    watch(image, value => this.item.setImage(value))

    if (url) {
      watch(url, value => this.item.setUrl(value))
    }

    if (size) {
      watch(size, value => this.item.setSize(value))
    }

    if (coordinator) {
      watch(coordinator, value => this.item.setCoordinator(value))
    }

    if (x) {
      watch(x, value => this.item.setX(value))
    }

    if (y) {
      watch(y, value => this.item.setY(value))
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

    this.type = computed(() => (isFilled(this.image.value) && this.item.getType()) || undefined)
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType (): ComputedRef<ImageTypeItem> {
    return this.type
  }
}
