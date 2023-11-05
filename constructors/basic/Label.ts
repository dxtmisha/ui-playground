import { computed, VNode } from 'vue'
import { render } from '../../functions/ref.ts'

export type LabelSlots = {
  default? (props: any): any
}

export type LabelProps = {
  label?: string | number
}

export const propsLabel = {
  label: [String, Number]
}

/**
 * Class for working with text on the button.<br>
 * Класс для работы с текстом на кнопке.
 */
export class Label {
  /**
   * Constructor
   * @param props input property /<br>входное свойство
   * @param slots object for working with slots /<br>объект для работы со слотами
   * @param className class name /<br>название класса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: Readonly<LabelProps>,
    protected readonly slots?: LabelSlots,
    protected readonly className?: string
  ) {
  }

  /**
   * Checking if the text is available.<br>
   * Проверка, доступен ли текст.
   */
  readonly is = computed<boolean>(() =>
    Boolean(
      this.props?.label || (
        this.slots &&
        'default' in this.slots
      )
    )
  )

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  render (): VNode[] {
    const elements: any[] = []

    if (this.is.value) {
      const children: any[] = []

      if (this.props?.label) {
        children.push(this.props.label)
      }

      if (this.slots && this.slots?.default) {
        children.push(this.slots.default?.({}))
      }

      if (children.length > 0) {
        elements.push(render(
          'span',
          { class: this.className || 'label' },
          children
        ))
      }
    }

    return elements
  }
}
