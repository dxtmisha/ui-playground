/**
 * Class for working with the tracking object.<br>
 * Класс для работы с объектом слежения.
 */
export class MutationObserverGlobal {
  private mutation?: MutationObserver

  /**
   * Constructor
   * @param addCallback function for adding an element /<br>функция для добавления элемента
   * @param removeCallback function for removing an element /<br>функция для удаления элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly addCallback: (node: HTMLElement) => void,
    private readonly removeCallback: (node: HTMLElement) => void
  ) {
  }

  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start (): this {
    if (!this.mutation) {
      this.mutation = new MutationObserver(record => this.callback(record))
      this.mutation.observe(document.body, {
        attributes: false,
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      })
    }

    return this
  }

  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end (): this {
    if (this.mutation) {
      this.mutation.disconnect()
      this.mutation = undefined
    }

    return this
  }

  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  private callback (record: MutationRecord[]) {
    record.forEach(item => {
      item.removedNodes.forEach(node => this.removeCallback(node as HTMLElement))
      item.addedNodes.forEach(node => this.addCallback(node as HTMLElement))
    })
  }
}
