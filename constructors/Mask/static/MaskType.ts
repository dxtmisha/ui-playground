import { type GeoDate } from '../../../types/geo.ts'
import { type MaskProps } from '../props.ts'

/**
 * A class for working with types.<br>
 * Класс для работы с типами.
 */
export class MaskType {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: MaskProps
  ) {
  }

  /**
   * Returns the type of mask.<br>
   * Возвращает тип маски.
   */
  get (): string {
    return this.props?.type ?? 'text'
  }

  /**
   * Returns the type of mask for working with dates.<br>
   * Возвращает тип маски для работы с датами.
   */
  getByDate (): GeoDate {
    return this.isDate() ? (this.get() as GeoDate) : 'date'
  }

  /**
   * Is the input mask a number.<br>
   * Является ли маска для ввода числом.
   */
  isNumber (): boolean {
    return this.get() === 'number'
  }

  /**
   * Is the input mask a currency value.<br>
   * Является ли маска для ввода валютным значением.
   */
  isCurrency (): boolean {
    return this.get() === 'currency'
  }

  /**
   * Is the input mask one of the numeric types.<br>
   * Является ли маска для ввода одним из числовых типов.
   */
  isCurrencyOrNumber (): boolean {
    return this.isNumber() || this.isCurrency()
  }

  /**
   * Is the mask one of the types for time input.<br>
   * Является ли маска одним из типов для ввода времени.
   */
  isTime (): boolean {
    return [
      'full',
      'datetime',
      'time',
      'hour-minute',
      'hour',
      'minute',
      'second'
    ].indexOf(this.get()) !== -1
  }

  /**
   * Is the mask one of the types for date input.<br>
   * Является ли маска одним из типов для ввода даты.
   */
  isDate (): boolean {
    return this.isTime() ||
      [
        'date',
        'year-month',
        'month',
        'day'
      ].indexOf(this.get()) !== -1
  }
}
