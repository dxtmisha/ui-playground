import { computed, ComputedRef, Ref, watch } from 'vue'
import { toRefItem } from '../functions/ref.ts'

import { Geo } from './Geo.ts'
import { GeoFlag } from './GeoFlag.ts'
import {
  type GeoFlagItem,
  type GeoFlagNational
} from '../types/geo.ts'

import { type RefOrNormal } from '../types/ref.ts'

/**
 * Class for working with Flags.<br>
 * Класс для работы с Флагами.
 */
export class GeoFlagRef {
  protected code: Ref<string>
  protected flag: GeoFlag

  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor (
    code: RefOrNormal<string> = Geo.getLocation()
  ) {
    this.code = toRefItem(code)
    this.flag = new GeoFlag(this.code.value)

    watch(this.code, value => this.flag.setCode(value))
  }

  /**
   * Obtaining a reactive object with the country code.<br>
   * Получение реактивного объекта с кодом страны.
   */
  getCode (): Ref<string> {
    return this.code
  }

  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get (code = this.code.value): ComputedRef<GeoFlagItem | undefined> {
    return computed(() => this.flag.get(code))
  }

  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag (code = this.code.value): ComputedRef<string | undefined> {
    return computed(() => this.flag.get(code)?.icon)
  }

  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList (codes?: string[]): ComputedRef<GeoFlagItem[]> {
    return computed(() => this.flag.getList(codes))
  }

  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational (codes?: string[]): ComputedRef<GeoFlagNational[]> {
    return computed(() => this.flag.getNational(codes))
  }
}
