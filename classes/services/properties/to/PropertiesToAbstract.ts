import { PropertiesItems } from '../PropertiesItems.ts'

/**
 * Abstract class for conversion.<br>
 * Абстрактный класс для преобразования.
 */
export abstract class PropertiesToAbstract {
  protected readonly abstract FILE_CACHE: string

  /**
   * Constructor
   * @param items data for processing /<br>данные для обработки
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected items: PropertiesItems
  ) {
  }

  to (): void {
    this.init()
    this.write()
  }

  protected abstract init (): void

  /**
   * Saves intermediate data.<br>
   * Сохраняет промежуточные данные.
   */
  protected write (): void {
    this.items.write(this.FILE_CACHE)
  }
}
