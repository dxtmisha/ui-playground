import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts'

import { useLabel } from '../uses/ref/useLabel.ts'
import { useIconRef, type UseIconSetup } from '../Icon/useIconRef.ts'
import { useProgressRef } from '../Progress/useProgressRef.ts'
import { useEnabled } from '../uses/ref/useEnabled.ts'
import { useEventClick } from '../uses/ref/useEventClick.ts'

import {
  type ConstrOptions,
  type ConstrStyles
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
 * Class constructor for the button component.<br>
 * Класс-конструктор для компонента кнопки.
 */
export class ButtonDesign<
  COMP extends ButtonComponents,
  SETUP extends ButtonSetup,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ButtonEmits,
  SETUP,
  EXPOSE,
  ButtonSlots,
  CLASSES,
  P
> {
  protected readonly icons: UseIconSetup

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.icons = useIconRef(
      this.props,
      this.components,
      this.getSubClass('icon'),
      this.getSubClass('trailing')
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
    const enabled = useEnabled(this.props)

    return {
      ...useLabel(
        this.props,
        this.slots,
        this.getSubClass('label')
      ),

      ...this.icons,

      ...useProgressRef(
        this.props,
        this.components,
        this.getSubClass('progress'),
        {
          circular: true,
          inverse: true
        }
      ),

      ...enabled,
      ...useEventClick(
        this.props,
        enabled,
        this.emits
      )
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
        [this.getStatusClass('icon')]: this.icons.isIcon.value
      },
      ...{
        // :classes [!] System label / Системная метка
        progress: this.getSubClass('progress'),
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing')
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
    const children: any[] = [
      ...setup.renderProgress(),
      ...setup.renderLabel(),
      ...setup.renderIcon()
    ]

    if (setup.isEnabled.value) {
      this.components.renderAdd(children, 'ripple')
    }

    return h(this.props?.tag || 'button', {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main,
      style: setup.styles.value,

      disabled: setup.disabledBind.value,
      onClick: setup.onClick
    }, children)
  }
}
