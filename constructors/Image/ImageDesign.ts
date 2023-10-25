import { h, VNode } from 'vue'

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
  EMITS extends ImageEmits,
  SETUP extends ImageSetup,
  EXPOSE extends ImageExpose,
  CLASSES extends ImageClasses,
  P extends ImageProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  EMITS,
  SETUP,
  EXPOSE,
  ImageSlots,
  CLASSES,
  P
> {
  protected image?: ImageRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, EMITS, P>
  ) {
    super(
      name,
      props,
      options
    )

    if (
      'value' in this.refs &&
      this.refs.value
    ) {
      this.image = new ImageRef(
        this.element,
        this.refs.value,
        this.refs?.url,
        this.refs?.size,
        this.refs?.coordinator,
        this.refs?.x,
        this.refs?.y,
        this.refs?.adaptiveGroup,
        this.refs?.adaptive,
        this.refs?.adaptiveAlways,
        this.refs?.objectWidth,
        this.refs?.objectHeight
      )
    }

    this.init()
  }

  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  protected makeOptions (): this {
    // TODO: User code
    // TODO: Код пользователя
    return this
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {
      // TODO: List of parameters for setup
      // TODO: список параметры для setup
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    // const setup = this.data
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    return {
      main: {},
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
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    // const setup = this.data

    return h('div', {
      ref: this.element,
      class: this.classes?.value.main
    }, this.image?.getType() ?? '')
  }
}
