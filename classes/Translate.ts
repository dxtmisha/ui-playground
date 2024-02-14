import { toArray } from '../functions/object'

import { Geo } from './Geo'
import { Api } from './Api'

import { useEnv } from '../composables/useEnv'

/**
 * Class for getting the translated text.
 * Класс для получения переведенного текста.
 */
export class Translate {
  protected static readonly url = useEnv<string>('apiTranslate')
  protected static readonly urlLocalhost = 'public/translate.json'
  protected static readonly data: Record<string, string> = {}

  protected static cache: string[] = []
  protected static resolveList: (() => void)[] = []
  protected static timeout?: any

  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get (name: string): Promise<string> {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.data[fullName]
    }

    await this.add(name)
    return this.data?.[fullName] ?? name
  }

  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync (name: string): string {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.data[fullName]
    }

    return name
  }

  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static async getList (names: string[]): Promise<Record<string, string>> {
    const list: Record<string, string> = {}

    for (const name of names) {
      list[name] = await this.get(name)
    }

    return list
  }

  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add (names: string | string[]): Promise<void> {
    return new Promise(resolve => {
      this.cache.push(...toArray(names))
      this.resolveList.push(resolve)

      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.timeout = undefined
        this.make().then(() => {
          this.resolveList.forEach(resolve => resolve())
          this.resolveList = []
        })
      }, 240)
    })
  }

  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  protected static getName (name: string): string {
    return `${Geo.getLocation()}-${name}`
  }

  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  protected static async getResponse (): Promise<Record<string, string>> {
    const path = Api.isLocalhost() ? this.urlLocalhost : this.url
    const data = (await Api.response<{ data: Record<string, string> }>({
      path,
      request: {
        list: this.cache
      }
    }))

    return data?.data ?? {}
  }

  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  protected static async make (): Promise<void> {
    const list = await this.getResponse()

    this.cache.forEach(name => {
      this.data[this.getName(name)] = list?.[name] ?? ''
    })

    this.cache = []
  }
}
