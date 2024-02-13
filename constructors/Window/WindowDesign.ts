import { h, Teleport, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'
import { WindowRef } from './WindowRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type WindowProps
} from './props'
import {
  type WindowClasses,
  type WindowComponents,
  type WindowEmits,
  type WindowExpose,
  type WindowSetup,
  type WindowSlots
} from './types'
import { WindowEmitOptions } from './typesBasic'

/**
 * WindowDesign
 */
export class WindowDesign<
  COMP extends WindowComponents,
  SETUP extends WindowSetup,
  EXPOSE extends WindowExpose,
  CLASSES extends WindowClasses,
  P extends WindowProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  WindowEmits,
  SETUP,
  EXPOSE,
  WindowSlots,
  CLASSES,
  P
> {
  protected readonly window: WindowRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, WindowEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.window = new WindowRef(
      this.props,
      this.element,
      (options: WindowEmitOptions) => this.emits?.('window', options),
      this.getName(),
      this.getSubClass('control'),
      this.getSubClass('body'),
      this.getSubClass(['body', 'context'])
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
      id: this.window.getId(),
      status: this.window.status,
      open: this.window.open,
      inDom: this.window.inDom,
      staticMode: this.window.staticMode,
      slotControl: {
        class: this.window.getClassControl(),
        onclick: async (event: MouseEvent & TouchEvent) => await this.window.onClick(event),
        oncontextmenu: async (event: MouseEvent & TouchEvent) => this.window.onContextmenu(event)
      },
      setOpen: (open: boolean) => this.window.setOpen(open),
      toggle: () => this.window.toggle(),
      onTransition: () => this.window.onTransition(),
      onPersistent: () => this.window.onPersistent(),
      renderBodyContext: () => this.renderBodyContext()
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    const setup = this.setup()

    return {
      id: setup.id,
      open: setup.open,
      setOpen: setup.setOpen,
      toggle: setup.toggle
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    return {
      main: {
        ...this.toClassName(this.window.classes.value)
      },
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        bodyContext: this.getSubClass('body__context'),
        control: this.getSubClass('control')
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
      ...this.toClassName(this.window.styles.value)
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): (VNode | any)[] {
    const setup = this.setup()
    const main: any[] = []

    this.initSlot('control', main, setup.slotControl)

    if (setup.inDom.value) {
      const children: any[] = [this.renderBody()]

      main.push(
        h(Teleport, {
          key: 'teleport',
          disabled: setup.staticMode.value,
          to: 'body'
        }, [
          h('div', {
            ...this.getAttrs(),
            key: 'main',
            ref: this.element,
            class: setup.classes.value.main,
            style: setup.styles.value,
            'data-window': setup.id,
            'data-status': setup.status.value,
            onTransitionend: setup.onTransition,
            onAnimationend: setup.onPersistent
          }, children)
        ])
      )
    }

    return main
  }

  /**
   * Render body element.<br>
   * Рендер элемента тела.
   */
  protected renderBody (): VNode {
    const setup = this.setup()
    const children: any[] = [
      this.initSlot('title'),
      this.renderBodyContext(),
      this.initSlot('footer')
    ]

    return h('div', {
      key: 'body',
      class: setup.classes.value.body
    }, children)
  }

  /**
   * Render context element.<br>
   * Рендер элемента контекста.
   */
  protected renderBodyContext (): VNode {
    const setup = this.setup()
    const children = () => this.initSlot('default')
    const props = {
      key: 'bodyContext',
      class: setup.classes.value.bodyContext
    }

    return this.components.renderOne('scrollbar', props, children) ??
      h('div', props, children)
  }
}
