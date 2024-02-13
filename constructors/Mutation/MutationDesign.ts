import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'
import { MutationRef } from './MutationRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MutationProps
} from './props'
import {
  type MutationClasses,
  type MutationComponents,
  type MutationEmits,
  type MutationExpose,
  type MutationSetup,
  type MutationSlots
} from './types'

/**
 * MutationDesign
 */
export class MutationDesign<
  COMP extends MutationComponents,
  SETUP extends MutationSetup,
  EXPOSE extends MutationExpose,
  CLASSES extends MutationClasses,
  P extends MutationProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MutationEmits,
  SETUP,
  EXPOSE,
  MutationSlots,
  CLASSES,
  P
> {
  protected mutation: MutationRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MutationEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.mutation = new MutationRef()
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
      items: this.mutation.items
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    const setup = this.setup()

    return {
      items: setup.items
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
    return {}
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    const setup = this.setup()
    const children: any[] = []

    if (this.components.is('item')) {
      setup.items.value.forEach(item => {
        this.components.renderAdd(
          children,
          'item',
          { item },
          undefined,
          item.getId()
        )
      })
    }

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main
    }, children)
  }
}
