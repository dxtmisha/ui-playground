import { forEach, isFilled, isString, transformation } from '../../functions/data'
import { toCamelCaseFirst } from '../../functions/string'
import { toArray } from '../../functions/object'
import { getAttributes, getElementId } from '../../functions/element'

import { MutationCollect } from './MutationCollect'
import { MutationGlobal } from './MutationGlobal'

import {
  KEY_NAME,
  type MutationComponentCallback,
  type MutationComponentProps,
  type MutationSlots,
  type MutationSlotsItemOrString,
  MutationStatus
} from '../../types/mutation'

/**
 * Class for managing the element.<br>
 * Класс для управления элементом.
 */
export class MutationDataItem {
  private readonly id: string
  private readonly componentName: string
  private static: MutationStatus

  private readonly slots: MutationSlots = {}
  private props: MutationComponentProps = {}
  private callback?: MutationComponentCallback

  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor (
    private readonly element: HTMLElement
  ) {
    this.id = getElementId(element)
    this.componentName = element.dataset?.[MutationCollect.getKeyUi()] ?? 'component'
    this.static = MutationStatus.new
    this.slots = this.initSlots()

    this.setStatus(MutationStatus.init)
  }

  /**
   * Checks if the element belongs to the current object.<br>
   * Проверяет, принадлежит ли элемент текущему объекту.
   * @param element tracking element /<br>элемент слежения
   */
  is (element: HTMLElement): boolean {
    return this.element === element
  }

  /**
   * Returns the identifier.<br>
   * Возвращает идентификатор.
   */
  getId (): string {
    return this.id
  }

  /**
   * Returns the identifier.<br>
   * Возвращает названия компонента.
   */
  getComponentName (): string {
    const name = toCamelCaseFirst(this.componentName)

    if (MutationGlobal.isComponent(name)) {
      return name
    }

    return toCamelCaseFirst(`${KEY_NAME}-${this.componentName}`)
  }

  /**
   * Returns the element.<br>
   * Возвращает элемент.
   */
  getElement (): HTMLElement {
    return this.element
  }

  /**
   * Returns the status.<br>
   * Возвращает статус.
   */
  getStatus (): MutationStatus {
    return this.static
  }

  /**
   * Returns property data.<br>
   * Возвращает данные свойства.
   */
  getProps (): MutationComponentProps {
    return {
      ...this.getDataset(),
      ...this.props
    }
  }

  /**
   * Returns data about the slot.<br>
   * Возвращает данные о слоте.
   */
  getSlots (): MutationSlots {
    return this.slots
  }

  /**
   * Changes the status of the item.<br>
   * Изменяет статус элемента.
   * @param status status values /<br>значения статуса
   */
  setStatus (status: MutationStatus): this {
    this.removeClasses()
    this.static = status

    switch (this.static) {
      case MutationStatus.init:
        this.element.classList.add(MutationCollect.getClassInit())
        break
      case MutationStatus.end:
        this.element.classList.add(MutationCollect.getClassEnd())
        break
    }

    return this
  }

  /**
   * Registers a component for data update.<br>
   * Регистрирует компонент для обновления данных.
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  registration (
    item: any,
    callback: MutationComponentCallback
  ): this {
    const props = MutationGlobal.registrationComponent(
      this.getId(),
      item,
      (props: MutationComponentProps) => {
        if (isFilled(props)) {
          this
            .setProps(props)
            .update()
        }
      }
    )

    if (props) {
      this.setProps(props)
    }

    this.callback = callback

    return this
  }

  /**
   * Called upon data update.<br>
   * Вызывается при обновлении данных.
   */
  update (): this {
    this.callback?.(
      this.getProps()
    )

    return this
  }

  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  disconnect (): this {
    MutationGlobal.removeComponent(this.getId())
    return this
  }

  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  private getDataset (): MutationComponentProps {
    const dataset: MutationComponentProps = {}

    forEach(this.element.dataset, (data, name) => {
      if (name !== MutationCollect.getKeyUi()) {
        dataset[name] = transformation(data)
      }
    })

    return dataset
  }

  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  private setProps (props: MutationComponentProps): this {
    if (isFilled(props)) {
      forEach(props, (prop, name) => {
        if (name === 'slots') {
          this.setSlots(prop)
        } else {
          this.props[name] = prop
        }
      })
    }

    return this
  }

  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  private setSlots (slots: MutationComponentProps): this {
    if (isFilled(slots)) {
      forEach(slots, (slot, name) => {
        this.slots[name] = this.initChildrenList(toArray(slot))
      })
    }

    return this
  }

  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  private initSlots (): MutationSlots {
    const slots: MutationSlots = {}
    const childrenList: any[] = []

    for (const element of this.element.children) {
      const isSlotName = element.getAttribute('data-slot')

      if (isSlotName) {
        slots[isSlotName] = this.initChildrenList(element.children)
      } else {
        const slot = this.initChildren(element)

        if (slot) {
          if ('default' in slots) {
            slots.default.push(slot)
          } else {
            slots.default = [slot]
          }
        }
      }

      childrenList.push(element)
    }

    for (const children of childrenList) {
      this.element.removeChild(children)
    }

    return slots
  }

  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  private initChildrenList (
    children: HTMLCollection
  ): MutationSlotsItemOrString[] {
    const slots: MutationSlotsItemOrString[] = []

    for (const element of children) {
      const slot = this.initChildren(element)

      if (slot) {
        slots.push(slot)
      }
    }

    return slots
  }

  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  private initChildren (
    element: ChildNode
  ): MutationSlotsItemOrString | undefined {
    if (element instanceof HTMLElement) {
      return {
        tag: element.nodeName,
        attributes: {
          ...getAttributes(element),
          innerHTML: element?.innerHTML ?? ''
        }
      }
    }

    const text = element?.textContent?.trim?.()

    if (isFilled(text)) {
      return text
    }

    if (isString(element) && isFilled(element)) {
      return element
    }

    return undefined
  }

  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  private removeClasses (): this {
    this.element.classList.remove(MutationCollect.getClassInit())
    this.element.classList.remove(MutationCollect.getClassEnd())
    return this
  }
}
