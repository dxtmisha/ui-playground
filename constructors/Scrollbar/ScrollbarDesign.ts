import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'

import { ScrollbarRef } from './ScrollbarRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ScrollbarProps
} from './props'
import {
  type ScrollbarClasses,
  type ScrollbarComponents,
  type ScrollbarEmits,
  type ScrollbarExpose,
  type ScrollbarSetup,
  type ScrollbarSlots
} from './types'

/**
 * ScrollbarDesign
 */
export class ScrollbarDesign<
  COMP extends ScrollbarComponents,
  SETUP extends ScrollbarSetup,
  EXPOSE extends ScrollbarExpose,
  CLASSES extends ScrollbarClasses,
  P extends ScrollbarProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ScrollbarEmits,
  SETUP,
  EXPOSE,
  ScrollbarSlots,
  CLASSES,
  P
> {
  protected readonly scrollbar: ScrollbarRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ScrollbarEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.scrollbar = new ScrollbarRef(this.props, this.element)
    this.init()
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
    return {} as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    // const setup = this.setup()

    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    return {
      main: {
        ...this.toClassName(this.scrollbar.classes.value)
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
    return {}
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    const setup = this.setup()
    const children: any[] = [this.initSlot('default')]

    return h(this.props.tag, {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main
    }, children)
  }
}
