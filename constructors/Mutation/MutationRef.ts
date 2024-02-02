import { nextTick, onBeforeMount, onUnmounted, shallowRef } from 'vue'

import { Mutation } from '../../classes/mutation/Mutation.ts'

import { type MutationDataItem } from '../../classes/mutation/MutationDataItem.ts'

/**
 * A class for global monitoring of changes and searching for new elements to transform into components (Ref).<br>
 * Класс для глобального слежения за изменениями и поиска новых элементов для преобразования в компоненты (Ref).
 */
export class MutationRef {
  readonly mutation: Mutation
  readonly items = shallowRef<MutationDataItem[]>([])

  /**
   * Constructor
   */
  constructor () {
    this.mutation = new Mutation(() => this.update())

    onBeforeMount(async () => {
      await nextTick()

      requestAnimationFrame(() => {
        this.mutation.start()
        this.update()
      })
    })
    onUnmounted(() => this.mutation.stop())
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  update (): this {
    this.items.value = [...this.mutation.items.get()]
    return this
  }
}
