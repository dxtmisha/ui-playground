import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../../classes/ref/DesignConstructorAbstract'

import {
  type ConstrOptions
} from '../../../types/constructor'
import {
  type ConstructorsProps
} from './props'
import {
  type ConstructorsClasses,
  type ConstructorsComponents,
  type ConstructorsEmits,
  type ConstructorsExpose,
  type ConstructorsSetup,
  type ConstructorsSlots
} from './types'

/**
 * ConstructorsDesign
 */
export class ConstructorsDesign<
  COMP extends ConstructorsComponents,
  EMITS extends ConstructorsEmits,
  SETUP extends ConstructorsSetup,
  EXPOSE extends ConstructorsExpose,
  CLASSES extends ConstructorsClasses,
  P extends ConstructorsProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  EMITS,
  SETUP,
  EXPOSE,
  ConstructorsSlots,
  CLASSES,
  P
> {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, EMITS, CLASSES, P>
  ) {
    super(
      name,
      props,
      options
    )

    // TODO: Initialization

    this.init()
  }

  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  protected makeOptions (): this {
    // TODO
    return this
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected makeClasses (): this {
    // :classes [!] System label / Системная метка
    // :classes [!] System label / Системная метка
    // TODO

    return this
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {
      // TODO
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    return {
      // TODO
    } as EXPOSE
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    return h('div', {
      ref: this.element,
      class: this.classes.value.main
    })
  }
}
