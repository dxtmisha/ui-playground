import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/ref/DesignConstructorAbstract.ts'
import { RippleRef } from './ref/RippleRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type RippleProps
} from './props.ts'
import {
  type RippleClasses,
  type RippleComponents,
  type RippleEmits,
  type RippleExpose,
  type RippleSetup,
  type RippleSlots
} from './types.ts'

/**
 * RippleDesign
 */
export class RippleDesign<
  COMP extends RippleComponents,
  SETUP extends RippleSetup,
  EXPOSE extends RippleExpose,
  CLASSES extends RippleClasses,
  P extends RippleProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  RippleEmits,
  SETUP,
  EXPOSE,
  RippleSlots,
  CLASSES,
  P
> {
  protected readonly ripple: RippleRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, RippleEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.ripple = new RippleRef(
      props,
      this.element,
      this.getSubClass('item'),
      this.getStatusClass('end'),
      this.getStyle('x'),
      this.getStyle('y')
    )

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
    return {
      onClick: this.ripple.onClick
    } as SETUP
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item')
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

    return h('div', {
      ref: this.element,
      class: setup.classes.value.main,
      onMousedown: setup.onClick
    })
  }
}
