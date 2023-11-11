import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/ref/DesignConstructorAbstract.ts'
import { IconRef } from './ref/IconRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import { type ImageEventData } from '../Image/typesBasic.ts'
import { type IconProps } from './props.ts'
import {
  type IconClasses,
  type IconComponents,
  type IconEmits,
  type IconExpose,
  type IconSetup,
  type IconSlots
} from './types.ts'

/**
 * IconDesign
 */
export class IconDesign<
  COMP extends IconComponents,
  SETUP extends IconSetup,
  EXPOSE extends IconExpose,
  CLASSES extends IconClasses,
  P extends IconProps
> extends DesignConstructorAbstract<
  HTMLSpanElement,
  COMP,
  IconEmits,
  SETUP,
  EXPOSE,
  IconSlots,
  CLASSES,
  P
> {
  protected readonly icon: IconRef

  protected readonly onLoad = (event: ImageEventData) => this.emits?.('load', event)

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, IconEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.icon = new IconRef(
      this.props,
      this.getSubClass('icon'),
      this.getSubClass('iconActive')
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
      iconBind: this.icon.iconBind,
      iconActiveBind: this.icon.iconActiveBind,
      isActive: this.icon.active
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    const setup = this.setup()

    return {
      isActive: setup.isActive
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

    this.initSlot('default', children)

    if (this.components.is('image')) {
      if (this.props?.icon) {
        this.components.renderAdd(
          children,
          'image',
          {
            ...setup.iconBind.value,
            onLoad: this.onLoad
          },
          undefined,
          'icon')
      }

      if (this.props?.iconActive) {
        this.components.renderAdd(
          children,
          'image',
          {
            ...setup.iconActiveBind.value,
            onLoad: this.onLoad
          },
          undefined,
          'iconActive')
      }
    }

    return h('span', {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main
    }, children)
  }
}
