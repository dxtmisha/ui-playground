import { ImageType } from './ImageType.ts'

import {
  type ImageCoordinator,
  type ImageElement,
  type ImageForOption,
  type ImageTypeItem,
  type ImageValue
} from '../typesBasic.ts'

/**
 * Base class for working with images and icons.<br>
 * Базовый класс для работы с изображениями и иконками.
 */
export class Image {
  protected readonly type: ImageType

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
    protected element?: ImageElement,
    protected image?: ImageValue,
    protected url?: string,
    protected size?: ImageForOption,
    protected coordinator?: ImageCoordinator,
    protected x?: ImageForOption,
    protected y?: ImageForOption,
    protected group?: string,
    protected adaptive?: boolean,
    protected adaptiveAlways?: boolean,
    protected width?: ImageForOption,
    protected height?: ImageForOption
  ) {
    this.type = new ImageType(image)
  }

  /**
   * Get the image type.<br>
   * Получения тип изображения.
   */
  getType (): ImageTypeItem {
    return this.type.get()
  }

  /**
   * To change the focus element.<br>
   * Изменить элемент для фокуса.
   * @param element image element for scaling /<br>элемент изображения для масштабирования
   */
  setElement (element?: ImageElement): this {
    this.element = element
    return this
  }

  /**
   * To change the image names.<br>
   * Изменить названия изображения.
   * @param image values from the image /<br>значения из изображения
   */
  setImage (image?: ImageValue): this {
    this.image = image
    this.type.set(image)
    return this
  }

  /**
   * To change the path to the icon<br>
   * Изменить путь к иконке.
   * @param url link to the folder with images /<br>ссылка на папку с изображениями
   */
  setUrl (url?: string): this {
    this.url = url
    return this
  }

  /**
   * To change the image scaling parameters.<br>
   * Изменить параметры масштабирования изображения.
   * @param size property determining the size of the picture /<br>свойство определяющее размер картины
   */
  setSize (size?: ImageForOption): this {
    this.size = size
    return this
  }

  /**
   * To modify the crop parameters of an image.<br>
   * Изменить параметры crop изображения.
   * @param coordinator coordinates for margins /<br>координаты для отступов
   */
  setCoordinator (coordinator?: ImageCoordinator): this {
    this.coordinator = coordinator
    return this
  }

  /**
   * Change the image shift to the left.<br>
   * Изменить сдвиг изображения влево.
   * @param x coordinate of the picture on the left /<br>координата картины слева
   */
  setX (x?: ImageForOption): this {
    this.x = x
    return this
  }

  /**
   * Change the image shift from the top.<br>
   * Изменить сдвиг изображения сверху.
   * @param y coordinate of the picture on the top /<br>координата картины сверху
   */
  setY (y?: ImageForOption): this {
    this.y = y
    return this
  }

  /**
   * Change the group name for adaptation.<br>
   * Изменить название группы для адаптации.
   * @param group group name /<br>название группы
   */
  setGroup (group?: string): this {
    this.group = group
    return this
  }

  /**
   * Enable image adaptation.<br>
   * Включить адаптирования изображения.
   * @param adaptive activity status /<br>статус активности
   */
  setAdaptive (adaptive?: boolean): this {
    this.adaptive = adaptive
    return this
  }

  /**
   * Change the state of full adaptation.<br>
   * Изменить состояние полного адаптирования.
   * @param adaptiveAlways does the element always participate /<br>участвует ли элемент всегда
   */
  setAdaptiveAlways (adaptiveAlways?: boolean): this {
    this.adaptiveAlways = adaptiveAlways
    return this
  }

  /**
   * Change the physical width of the object in the image.<br>
   * Изменить физическую ширину объекта на изображении.
   * @param width physical width of the object /<br>физическая ширина объекта
   */
  setWidth (width?: ImageForOption): this {
    this.width = width
    return this
  }

  /**
   * Change the physical height of the object in the image.<br>
   * Изменить физическую высоту объекта на изображении.
   * @param height physical height of the object /<br>физическая высота объекта
   */
  setHeight (height?: ImageForOption): this {
    this.height = height
    return this
  }
}
