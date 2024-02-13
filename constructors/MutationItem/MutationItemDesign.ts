import { computed, h, Teleport, type VNode } from 'vue'
import { forEach } from '../../functions/data'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'
import { MutationItemRef } from './MutationItemRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type MutationItemProps
} from './props'
import {
  type MutationItemClasses,
  type MutationItemComponents,
  type MutationItemEmits,
  type MutationItemExpose,
  type MutationItemSetup,
  type MutationItemSlots,
  type MutationSlotsRef,
  type MutationSlotsRefItem
} from './types'

/**
 * MutationItemDesign
 */
export class MutationItemDesign<
  COMP extends MutationItemComponents,
  SETUP extends MutationItemSetup,
  EXPOSE extends MutationItemExpose,
  CLASSES extends MutationItemClasses,
  P extends MutationItemProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MutationItemEmits,
  SETUP,
  EXPOSE,
  MutationItemSlots,
  CLASSES,
  P
> {
  protected mutation: MutationItemRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MutationItemEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.mutation = new MutationItemRef(props, this.element)
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
      mainElement: this.mutation.mainElement,

      componentName: this.mutation.componentName,
      componentItem: this.mutation.componentItem,

      binds: this.mutation.binds,
      slots: this.mutation.slots,

      renderSlots: computed(() => this.renderSlots())
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
  protected initRender (): VNode | undefined {
    const setup = this.setup()

    if (setup.componentItem) {
      return h(Teleport, {
        ref: this.element,
        class: this.classes?.value.main,
        to: setup.mainElement
      }, [
        h(
          setup.componentItem,
          setup.binds.value,
          setup.renderSlots.value
        )
      ])
    }

    return undefined
  }

  /**
   * Rendering data for the slot.<br>
   * Рендеринг данных для слота.
   */
  private renderSlots (): MutationSlotsRef {
    const setup = this.setup()
    const slots: MutationSlotsRef = {}
    const data = setup.slots.value

    if (data) {
      forEach(data, (children, name) => {
        const slot: MutationSlotsRefItem[] = []

        children.forEach(item => {
          if (typeof item === 'string') {
            slot.push(item)
          } else {
            slot.push(h(
              item.tag,
              { ...item.attributes }
            ))
          }
        })

        slots[name] = () => slot
      })
    }

    return slots
  }
}
