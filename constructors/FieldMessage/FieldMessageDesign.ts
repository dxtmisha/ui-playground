import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type FieldMessageProps
} from './props.ts'
import {
  type FieldMessageClasses,
  type FieldMessageComponents,
  type FieldMessageEmits,
  type FieldMessageExpose,
  type FieldMessageSetup,
  type FieldMessageSlots
} from './types.ts'
import { FieldMessageRef } from './FieldMessageRef.ts'

/**
 * FieldMessageDesign
 */
export class FieldMessageDesign<
  COMP extends FieldMessageComponents,
  SETUP extends FieldMessageSetup,
  EXPOSE extends FieldMessageExpose,
  CLASSES extends FieldMessageClasses,
  P extends FieldMessageProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  FieldMessageEmits,
  SETUP,
  EXPOSE,
  FieldMessageSlots,
  CLASSES,
  P
> {
  protected message: FieldMessageRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldMessageEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.message = new FieldMessageRef(props)
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
      is: this.message.is,
      isMessage: this.message.isMessage,
      isValidation: this.message.isValidation,
      isCounter: this.message.isCounter,
      isMax: this.message.isMax,
      message: this.message.message,
      counter: this.message.counter,

      renderInfo: this.renderInfo,
      renderCounter: this.renderCounter
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
      main: {
        ...this.toClassName(this.message.classes.value)
      },
      ...{
        // :classes [!] System label / Системная метка
        info: this.getSubClass('info'),
        counter: this.getSubClass('counter')
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
  protected initRender (): VNode | undefined {
    const setup = this.setup()
    const children: any[] = []

    if (setup.isMessage.value) {
      children.push(setup.renderInfo())
    }

    if (setup.isCounter.value) {
      children.push(setup.renderCounter())
    }

    if (setup.is.value) {
      return h('div', {
        ...this.getAttrs(),
        ref: this.element,
        key: 'main',
        class: setup.classes.value.main
      }, children)
    }

    return undefined
  }

  /**
   * Rendering text.<br>
   * Рендеринг текста.
   */
  protected renderInfo = (): VNode => {
    const setup = this.setup()

    return h('div', {
      key: 'message',
      class: setup.classes.value.info,
      innerHTML: setup.message.value
    })
  }

  /**
   * Rendering the entered number of characters.<br>
   * Рендеринг введенного количества символов.
   */
  protected renderCounter = (): VNode => {
    const setup = this.setup()

    return h('div', {
      key: 'counter',
      class: setup.classes.value.counter,
      innerHTML: setup.counter.value
    })
  }
}
