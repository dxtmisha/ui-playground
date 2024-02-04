import { MutationData } from './MutationData.ts'

/**
 * Class for working with the tracking object of the most active elements.<br>
 * Класс для работы с объектом слежения самых активных элементов.
 */
export class MutationObserverItems {
  private mutation?: MutationObserver

  /**
   * Constructor
   * @param items object for working with elements /<br>объект для работы с элементами
   * @param update function for updating data /<br>функция обновления данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly items: MutationData,
    private readonly update: (element: HTMLElement) => void
  ) {
  }

  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start (): this {
    if (this.mutation) {
      this.end()
    }

    const items = this.items.get()

    if (items.length > 0) {
      this.mutation = new MutationObserver(record => this.callback(record))

      for (const item of items) {
        this.mutation.observe(item.getElement(), {
          attributes: true,
          attributeOldValue: false,
          characterData: false,
          characterDataOldValue: false,
          childList: false,
          subtree: false
        })
      }
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
      if (item.type === 'attributes') {
        this.update(item.target as HTMLElement)
      }
    })
  }
}
