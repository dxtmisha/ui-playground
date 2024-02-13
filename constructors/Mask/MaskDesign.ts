import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'
import { MaskRef } from './MaskRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MaskEventData
} from './typesBasic'
import {
  type MaskProps
} from './props'
import {
  type MaskClasses,
  type MaskComponents,
  type MaskEmits,
  type MaskExpose,
  type MaskSetup,
  type MaskSlots
} from './types'

/**
 * MaskDesign
 */
export class MaskDesign<
  COMP extends MaskComponents,
  SETUP extends MaskSetup,
  EXPOSE extends MaskExpose,
  CLASSES extends MaskClasses,
  P extends MaskProps
> extends DesignConstructorAbstract<
  HTMLInputElement,
  COMP,
  MaskEmits,
  SETUP,
  EXPOSE,
  MaskSlots,
  CLASSES,
  P
> {
  protected readonly mask: MaskRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MaskEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.mask = new MaskRef(
      props,
      this.element,
      (
        type: keyof MaskEmits,
        event: Event,
        value?: MaskEventData
      ) => {
        this.emits?.(
          type as 'input',
          event as InputEvent,
          value as MaskEventData
        )
      },
      this.getSubClass(['character', 'item'])
    )

    this.init()
  }

  /**
   * Element for storing the final data.<br>
   * Элемент для хранения конечных данных.
   */
  renderData (): VNode | undefined {
    const setup = this.setup()

    if (this.props?.name) {
      return h('input', {
        type: 'hidden',
        name: this.props.name,
        value: setup.value.value
      })
    }

    return undefined
  }

  /**
   * Rendering method for input.<br>
   * Метод рендеринга для ввода.
   */
  renderInput (): VNode {
    const setup = this.setup()

    return h('input', {
      ref: this.element,
      class: setup.classes.value.input,
      value: setup.valueBasic.value,

      onFocus: setup.onFocus,
      onBlur: setup.onBlur,
      onKeydown: setup.onKeydown,
      onKeyup: setup.onKeyup,
      onBeforeinput: setup.onBeforeinput,
      onInput: setup.onInput,
      onChange: setup.onChange,
      onPaste: setup.onPaste,
      onClick: setup.onClick
    })
  }

  /**
   * Rendering method for displaying the mask and the input data.<br>
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  renderView (): VNode {
    const setup = this.setup()
    const view = setup.view.value

    if (view.length > 0) {
      const children: any[] = []

      view.forEach((character, key) => {
        children.push(
          h('span', {
            key,
            class: character.className
          }, character.value)
        )
      })

      return h('span', { class: setup.classes.value.character }, children)
    }

    return h('span', {
      class: setup.classes.value.character,
      innerHTML: '&nbsp;'
    })
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
      valueBasic: this.mask.valueBasic,
      value: this.mask.value,
      view: this.mask.view,

      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur,
      onKeydown: this.mask.onKeydown,
      onKeyup: this.mask.onKeyup,
      onBeforeinput: this.mask.onBeforeinput,
      onInput: this.mask.onInput,
      onChange: this.mask.onChange,
      onPaste: this.mask.onPaste,
      onClick: this.mask.onClick
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
      main: {
        ...this.toClassName(this.mask.classes.value)
      },
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        character: this.getSubClass('character'),
        characterItem: this.getSubClass('character__item')
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
      this.renderData(),
      this.renderInput(),
      this.renderView()
    ]

    return h('label', {
      ...this.getAttrs(),
      class: setup.classes.value.main
    }, children)
  }
}
