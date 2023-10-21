import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/ref/DesignConstructorAbstract.ts'

import {
  type ConstrOptions
} from '../../types/constructor.ts'
import {
  type ButtonProps
} from './props.ts'
import {
  type ButtonClasses,
  type ButtonComponents,
  type ButtonEmits,
  type ButtonExpose,
  type ButtonSetup,
  type ButtonSlots
} from './types.ts'

/**
 * ButtonDesign
 */
export class ButtonDesign<
  COMP extends ButtonComponents,
  EMITS extends ButtonEmits,
  SETUP extends ButtonSetup,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  EMITS,
  SETUP,
  EXPOSE,
  ButtonSlots,
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
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): CLASSES {
    return {
      // :classes [!] System label / Системная метка
      progress: this.getSubClass('progress'),
      label: this.getSubClass('label'),
      icon: this.getSubClass('icon'),
      trailing: 'trailing'
      // :classes [!] System label / Системная метка
    } as CLASSES
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    return h('div', {
      ref: this.element,
      class: this.classes?.value.main
    })
  }
}
