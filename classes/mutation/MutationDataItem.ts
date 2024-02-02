import { getElementId } from '../../functions/element.ts'

import { MutationCollect } from './MutationCollect.ts'

import { MutationStatus } from '../../types/mutation.ts'

/**
 * Class for managing the element.<br>
 * Класс для управления элементом.
 */
export class MutationDataItem {
  private readonly id: string
  private readonly componentName: string
  private static: MutationStatus

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
    return this.componentName
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
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  private removeClasses (): this {
    this.element.classList.remove(MutationCollect.getClassInit())
    this.element.classList.remove(MutationCollect.getClassEnd())
    return this
  }
}
