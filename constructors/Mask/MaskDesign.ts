import { h, ref, VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract.ts'
import { MaskRef } from './MaskRef.ts'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor.ts'
import {
  type MaskElementInput,
  type MaskEventData
} from './typesBasic.ts'
import {
  type MaskProps
} from './props.ts'
import {
  type MaskClasses,
  type MaskComponents,
  type MaskEmits,
  type MaskExpose,
  type MaskSetup,
  type MaskSlots
} from './types.ts'

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
  protected readonly elementCharacter = ref<MaskElementInput>()

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
      this.elementCharacter,
      this.getSubClass('character'),
      (event: Event, value: MaskEventData) => {
        this.emits?.(value?.type as 'input', event as InputEvent, value)
      }
    )

    this.init()
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
      onFocus: setup.onFocus,
      onBlur: setup.onBlur
    })
  }

  renderView (): VNode {
    const setup = this.setup()
    const children: any[] = []

    setup.view.value.forEach((character, key) => {
      children.push(
        h('span', {
          key,
          class: character.className
        }, character.value)
      )
    })

    return h('span', {
      class: setup.classes.value.character,
      onFocus: setup.onFocus,
      onBlur: setup.onBlur
    }, children)
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
      view: this.mask.view,

      onFocus: this.mask.onFocus,
      onBlur: this.mask.onBlur
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
        character: this.getSubClass('character')
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
      this.renderInput(),
      this.renderView()
    ]

    return h('label', {
      ...this.getAttrs(),
      class: setup.classes.value.main
    }, children)
  }
}
