import { executeFunction, forEach, transformation } from '../../functions/data.ts'

/**
 * Working with data stored in hash.<br>
 * Работа с данными сохраненными в хеш.
 */
export class Hash {
  private static hash: Record<string, any> = {}
  private static watch: Record<string, ((value: any) => void)[]> = {}
  private static block = false

  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get<T> (
    name: string,
    defaultValue?: T | (() => T)
  ): T {
    if (
      !(name in this.hash) &&
      defaultValue
    ) {
      this.set(name, defaultValue)
    }

    return this.hash[name]
  }

  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set<T> (
    name: string,
    callback: T | (() => T)
  ): void {
    const value = executeFunction(callback)

    if (value !== this.hash?.[name]) {
      this.hash[name] = value
      this.update()
    }
  }

  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch<T> (
    name: string,
    callback: (value: T) => void
  ): void {
    if (name in this.watch) {
      this.watch[name].push(callback)
    } else {
      this.watch = { [name]: [callback] }
    }
  }

  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  private static getLocation (): Record<string, any> {
    const hash: Record<string, any> = {}

    location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...item: string[]) => {
        hash[item[1]] = transformation(item[2])
        return ''
      }
    )

    return hash
  }

  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  private static update (): void {
    this.block = true

    const hash: string[] = forEach(this.hash,
      (item, name) => `${name}=${encodeURIComponent(String(item))}`
    )

    hash.sort()
    history.replaceState(null, '', `#${hash.join(';')}`)

    requestAnimationFrame(() => {
      this.block = false
    })
  }

  /**
   * Update hash variable from URL string.<br>
   * Обновление переменной хэша из строки URL.
   */
  private static reload (): void {
    if (!this.block) {
      const location = this.getLocation()

      this.makeWatch(location)
      this.hash = location
    }
  }

  /**
   * Calling all functions whose data has changed.<br>
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data /<br>свежий данные
   */
  private static makeWatch (location: Record<string, any>): void {
    forEach(this.watch, (item, name) => {
      if (this.hash?.[name] !== location?.[name]) {
        item.forEach(callback => callback(location[name]))
      }
    })
  }

  static {
    this.reload()
    addEventListener('hashchange', () => this.reload())
  }
}
