import { computed, type ComputedRef, type VNode } from 'vue'
import { render } from '../../../functions/ref.ts'

export type UseLabelSetup = {
  /**
   * Checking if the text is available.<br>
   * Проверка, доступен ли текст.
   */
  isLabel: ComputedRef<boolean>

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  renderLabel (): VNode[]
}

export type UseLabelSlots = {
  default? (props: any): any
}

export type UseLabelProps = {
  label?: string | number
}

export const usePropsLabel = {
  label: [String, Number]
}

/**
 * Use for adding text.<br>
 * Использование для добавления текста.
 * @param props input property /<br>входное свойство
 * @param slots object for working with slots /<br>объект для работы со слотами
 * @param className class name /<br>название класса
 */
export const useLabel = function (
  props: Readonly<UseLabelProps>,
  slots?: UseLabelSlots,
  className = 'is-label'
): UseLabelSetup {
  const is = computed(() =>
    Boolean(
      props?.label || (
        slots && 'default' in slots
      )
    )
  )

  return {
    isLabel: is,

    renderLabel (): VNode[] {
      const elements: any[] = []

      if (is.value) {
        const children: any[] = []

        if (props?.label) {
          children.push(props.label)
        }

        if (slots && slots?.default) {
          children.push(slots.default?.({}))
        }

        if (children.length > 0) {
          elements.push(render(
            'span',
            { class: className || 'label' },
            children
          ))
        }
      }

      return elements
    }
  }
}
