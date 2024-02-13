import { computed, ComputedRef, Ref, shallowRef } from 'vue'

import { Geo } from './Geo'
import { type GeoItemFull } from '../types/geo'

/**
 * Reactive class for working with geographic data.<br>
 * Реактивный класс для работы с географическими данными.
 */
export class GeoRef {
  private static readonly item = shallowRef(Geo.get())

  private static readonly country = computed<string>(() => this.item.value.country)
  private static readonly language = computed<string>(() => this.item.value.language)
  private static readonly standard = computed<string>(() => this.item.value.standard)
  private static readonly firstDay = computed<string>(() => this.item.value.firstDay)

  /**
   * Information about the current country.<br>
   * Информация об текущей стране.
   */
  static get (): Ref<GeoItemFull> {
    return this.item
  }

  /**
   * Current country.<br>
   * Текущая страна.
   */
  static getCountry (): ComputedRef<string> {
    return this.country
  }

  /**
   * Current language.<br>
   * Текущий язык.
   */
  static getLanguage (): ComputedRef<string> {
    return this.language
  }

  /**
   * Full format according to the standard.<br>
   * Полный формат согласно стандарту.
   */
  static getStandard (): ComputedRef<string> {
    return this.standard
  }

  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay (): ComputedRef<string> {
    return this.firstDay
  }

  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static set (code: string): void {
    Geo.set(code, true)
    this.item.value = Geo.getItem()
  }
}
