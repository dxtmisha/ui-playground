import { nextTick, onMounted, type Ref, ref, watchEffect } from 'vue'

import { Scrollbar } from './Scrollbar'

import type { ConstrClassObject } from '../../types/constructor'
import type { ScrollbarProps } from './props'

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
    element: Ref<HTMLDivElement | undefined>
  ) {
    this.scrollbar = new Scrollbar(
      props,
      element,
      () => this.updateClasses().then()
    )

    watchEffect(async () => {
      this.scrollbar.border.reset()
      await this.updateClasses()
    })

    onMounted(async () => {
      await nextTick()
      requestAnimationFrame(() => this.scrollbar.border.toggle())
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
