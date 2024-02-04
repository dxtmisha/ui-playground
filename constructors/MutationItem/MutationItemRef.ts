import { shallowRef } from 'vue'

import { type RefUndefined } from '../../types/ref.ts'
import {
  type MutationComponentProps,
  type MutationSlots,
  MutationStatus
} from '../../types/mutation.ts'
import { type MutationItemProps } from './props.ts'

/**
 * Class for working with the component element.<br>
 * Класс для работы с элементом компонента.
 */
export class MutationItemRef {
  readonly mainElement: HTMLElement = document.body
  readonly componentName: string = 'div'
  readonly binds = shallowRef<MutationComponentProps | undefined>({})
  readonly slots = shallowRef<MutationSlots | undefined>({})

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element instance of the element itself /<br>экземпляр самого элемента
   */
  constructor (
    protected readonly props: MutationItemProps,
    element: RefUndefined<any>
  ) {
    if (props.item) {
      this.mainElement = props.item.getElement()
      this.componentName = props.item.getComponentName()
      props.item.registration(element, () => this.update())
    }

    props.item?.setStatus(MutationStatus.end)
    this.update()
  }

  /**
   * Data update.<br>
   * Обновление данных.
   */
  update (): this {
    const slots = this.props.item?.getSlots()

    this.binds.value = { ...(this.props.item?.getProps() ?? {}) }
    this.slots.value = slots ? { ...slots } : undefined

    return this
  }
}
