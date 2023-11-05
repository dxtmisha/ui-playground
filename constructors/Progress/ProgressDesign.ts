import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/ref/DesignConstructorAbstract.ts'
import { ProgressRef } from './ProgressRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type ProgressProps
} from './props.ts'
import {
  type ProgressClasses,
  type ProgressComponents,
  type ProgressEmits,
  type ProgressExpose,
  type ProgressSetup,
  type ProgressSlots
} from './types.ts'

/**
 * ProgressDesign
 */
export class ProgressDesign<
  COMP extends ProgressComponents,
  SETUP extends ProgressSetup,
  EXPOSE extends ProgressExpose,
  CLASSES extends ProgressClasses,
  P extends ProgressProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ProgressEmits,
  SETUP,
  EXPOSE,
  ProgressSlots,
  CLASSES,
  P
> {
  protected readonly item: ProgressRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ProgressEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ProgressRef(props)
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
      tag: this.item.tag,
      valueInPercent: this.item.valueInPercent,

      hide: this.item.hide,
      visible: this.item.visible,
      onAnimation: this.item.onAnimation
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
        ...this.toClassName(this.item.classes.value)
      },
      ...{
        // :classes [!] System label / Системная метка
        circle: this.getSubClass('circle')
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
      ...this.item.styles.value
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    const setup = this.setup()
    const children: any[] = []

    if (this.props?.circular) {
      children.push(
        h('circle', {
          class: setup.classes.value.circle,
          cx: '24',
          cy: '24',
          r: '20'
        })
      )
    }

    return h(setup.tag.value, {
      ref: this.element,
      class: setup.classes.value.main,
      style: setup.styles.value,
      viewBox: '0 0 48 48',
      onAnimationend: setup.onAnimation
    }, children)
  }
}
