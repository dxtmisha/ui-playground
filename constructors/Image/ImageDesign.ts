import { h, onUnmounted, ref, VNode, watch } from 'vue'

import { DesignConstructorAbstract } from '../../classes/ref/DesignConstructorAbstract.ts'
import { ImageRef } from './ImageRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type ImageProps
} from './props.ts'
import {
  type ImageClasses,
  type ImageComponents,
  type ImageEmits,
  type ImageExpose,
  type ImageSetup,
  type ImageSlots
} from './types.ts'

/**
 * ImageDesign
 */
export class ImageDesign<
  COMP extends ImageComponents,
  SETUP extends ImageSetup,
  EXPOSE extends ImageExpose,
  CLASSES extends ImageClasses,
  P extends ImageProps
> extends DesignConstructorAbstract<
  HTMLSpanElement,
  COMP,
  ImageEmits,
  SETUP,
  EXPOSE,
  ImageSlots,
  CLASSES,
  P
> {
  protected image: ImageRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ImageEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.image = new ImageRef(
      this.props,
      this.refs.value ?? ref(),
      this.refs?.coordinator,
      this.refs?.size,
      this.element,
      this.refs?.adaptiveGroup,
      this.refs?.adaptive,
      this.refs?.adaptiveAlways,
      this.refs?.objectWidth,
      this.refs?.objectHeight
    )

    this.init()
    onUnmounted(() => this.image.destructor())

    if (this.emits) {
      watch(this.image.getData(), () => this.emits?.('load', this.image.getItem()))
    }
  }

  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  protected makeOptions (): this {
    return this
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {
      type: this.image.getType(),
      data: this.image.getData(),
      text: this.image.getText()
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    const setup = this.setup()

    return {
      type: setup.type,
      data: setup.data
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    return {
      main: {
        ...this.toClassName(this.image.getClasses().value)
      },
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected initStyles (): ConstrStyles {
    return {
      ...this.image.getStyles().value
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    const setup = this.setup()

    return h('span', {
      ref: this.element,
      class: setup.classes.value.main,
      style: setup.styles.value,
      translate: 'no'
    }, setup.text.value)
  }
}
