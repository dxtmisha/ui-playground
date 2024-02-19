import { resolveComponent, shallowRef } from 'vue'

import { MutationGlobal } from '../../classes/mutation/MutationGlobal'

import { type RefUndefined } from '../../types/ref'
import {
  type MutationComponentProps,
  type MutationSlots,
  MutationStatus
} from '../../types/mutation'
import { type MutationItemProps } from './props'

/**
 * Class for working with the component element.<br>
 * Класс для работы с элементом компонента.
 */
export class MutationItemRef {
  readonly mainElement: HTMLElement = document.body
  readonly componentName: string = 'div'
  readonly componentItem = shallowRef()
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

      this.initComponentItem().then(item => {
        this.componentItem.value = item
      })
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

  /**
   * Returns a global object.<br>
   * Возвращает глобальный объект.
   */
  private getComponentGlobalItem () {
    return MutationGlobal.getComponentGlobalItem(this.componentName)?.item
  }

  /**
   * Initializes data for the component.<br>
   * Инициализирует данные для компонента.
   */
  private async initComponentItem (): Promise<any> {
    return new Promise(resolve => {
      const item = this.getComponentGlobalItem()

      if (item) {
        resolve(item)
      } else if (this.props.item?.isLink()) {
        let repeat = 24
        const time = setInterval(() => {
          console.log('repeat', this.componentName)
          if (repeat-- > 0) {
            const item = this.getComponentGlobalItem()

            if (item) {
              clearInterval(time)
              resolve(item)
            }
          } else {
            clearInterval(time)
            resolve(resolveComponent(this.componentName))
          }
        }, 64)
      } else {
        resolve(resolveComponent(this.componentName))
      }
    })
  }
}
