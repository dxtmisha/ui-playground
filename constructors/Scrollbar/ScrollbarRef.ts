import { nextTick, onMounted, type Ref, ref, watchEffect } from 'vue'

import { Scrollbar } from './Scrollbar.ts'

import type { ConstrClassObject } from '../../types/constructor.ts'
import type { ScrollbarProps } from './props.ts'

/**
 * Reactive class for working with the scroll component.<br>
 * Реактивный класс для работы с компонентом скролла.
 */
export class ScrollbarRef {
  protected readonly scrollbar: Scrollbar

  readonly classes = ref<ConstrClassObject>({})

  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   */
  constructor (
    props: ScrollbarProps,
    element?: Ref<HTMLDivElement | undefined>
  ) {
    this.scrollbar = new Scrollbar(
      props,
      element?.value,
      () => this.updateClasses().then()
    )

    watchEffect(async () => {
      if (element) {
        this.scrollbar.getBorder().setElement(element.value)
        this.scrollbar.getBorder().toggle()
      }

      await this.updateClasses()
    })

    onMounted(async () => {
      await nextTick().then()
      requestAnimationFrame(() => this.scrollbar.getBorder().toggle())
    })
  }

  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  async updateClasses (): Promise<this> {
    this.classes.value = await this.scrollbar.getClasses()
    return this
  }
}
