import { h, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type WindowProps
} from './props.ts'
import {
  type WindowClasses,
  type WindowComponents,
  type WindowEmits,
  type WindowExpose,
  type WindowSetup,
  type WindowSlots
} from './types.ts'
import { WindowRef } from './WindowRef.ts'

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
      // this.props,
      // this.element,
      this.getName(),
      this.getSubClass('control'),
      this.getSubClass('body')
    )

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
      slotControl: {
        class: this.window.getClassControl(),
        onclick: (event: MouseEvent & TouchEvent) => {
          console.log(event)
        },
        oncontextmenu: (event: MouseEvent & TouchEvent) => {
          console.log(event)
        }
      }
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    // const setup = this.setup()

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
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): (VNode | any)[] {
    const setup = this.setup()
    const main: any[] = []
    const children: any[] = [
      h('div', {
        class: setup.classes.value.body
      }, [
        h('div', {
          class: setup.classes.value.bodyContext
        }, 'text...')
      ])
    ]

    this.initSlot('control', main, setup.slotControl)

    main.push(
      h('div', {
        ...this.getAttrs(),
        ref: this.element,
        class: setup.classes.value.main
      }, children)
    )

    return main
  }
}
