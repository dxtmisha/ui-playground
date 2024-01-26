import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts'
import { CheckboxRef } from './CheckboxRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type CheckboxProps
} from './props.ts'
import type { InputValidationItem } from '../Input/typesBasic.ts'
import {
  type CheckboxClasses,
  type CheckboxComponents,
  type CheckboxEmits,
  type CheckboxExpose,
  type CheckboxSetup,
  type CheckboxSlots
} from './types.ts'

/**
 * CheckboxDesign
 */
export class CheckboxDesign<
  COMP extends CheckboxComponents,
  SETUP extends CheckboxSetup,
  EXPOSE extends CheckboxExpose,
  CLASSES extends CheckboxClasses,
  P extends CheckboxProps
> extends DesignConstructorAbstract<
  HTMLLabelElement,
  COMP,
  CheckboxEmits,
  SETUP,
  EXPOSE,
  CheckboxSlots,
  CLASSES,
  P
> {
  protected checkbox: CheckboxRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CheckboxEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.checkbox = new CheckboxRef(
      props,
      this.element,
      (type: string & keyof CheckboxEmits, event: Event, value: InputValidationItem) => {
        this.emits?.(
          type as 'input',
          event,
          value
        )
      }
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
      value: this.checkbox.value,
      iconBind: this.checkbox.iconBind,

      renderInput: () => this.renderInput(),
      renderInputHidden: () => this.renderInputHidden(),
      renderChecked: () => this.renderChecked(),

      onInput: this.checkbox.onInput
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
        input: this.getSubClass('input'),
        item: this.getSubClass('item'),
        itemIcon: this.getSubClass('item__icon')
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
  protected initRender (): VNode {
    const setup = this.setup()
    const children: any[] = [
      setup.renderInputHidden(),
      setup.renderInput(),
      setup.renderChecked()
    ]

    return h('label', {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main
    }, children)
  }

  /**
   * Rendering of the main input.<br>
   * Рендеринг главного input.
   */
  protected renderInput (): VNode {
    const setup = this.setup()

    return h('input', {
      class: setup.classes.value.input,
      name: this.props.name,
      type: 'checkbox',
      checked: setup.value.value,
      on: this.props.on,
      onInput: setup.onInput
    })
  }

  /**
   * Rendering of the hidden input.<br>
   * Рендеринг скрытого input.
   */
  protected renderInputHidden (): VNode {
    return h('input', {
      name: this.props.name,
      type: 'hidden',
      value: '0'
    })
  }

  /**
   * Rendering of the checkbox element.<br>
   * Рендеринг элемента checkbox.
   */
  protected renderChecked (): VNode {
    const setup = this.setup()
    const children: any[] = []

    this.components.renderAdd(
      children,
      'icon',
      setup.iconBind.value
    )

    return h('span', {
      class: setup.classes.value.item
    }, [
      h('span', {
        class: setup.classes.value.itemIcon
      }, children)
    ])
  }
}
