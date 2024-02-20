import { executeFunction, isDomRuntime, isFilled, transformation } from '../functions/data'
import { useEnv } from '../composables/useEnv'

import { CookieBlock } from './CookieBlock'

type CookieSameSite = 'strict' | 'lax'

export type CookieOptions = {
  age?: number
  sameSite?: CookieSameSite
  arguments?: string[]
}

const cookie: Record<string, any> = {}

/**
 * Class for working with cookies.<br>
 * Класс для управления Cookie.
 */
export class Cookie<T> {
  value?: T | string
  private options: CookieOptions = {}

  constructor (private name: string) {
    if (name in items) {
      return items[name]
    }

    this.value = cookie?.[name]
    items[name] = this
  }

  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get (
    defaultValue?: T | string | (() => (T | string)),
    options?: CookieOptions
  ) {
    if (
      this.value === undefined &&
      defaultValue
    ) {
      this.set(defaultValue, options)
    }

    return this.value
  }

  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set (
    value?: T | string | (() => (T | string)),
    options?: CookieOptions
  ): void {
    this.value = executeFunction(value)
    Object.assign(this.options, options)

    this.update()
  }

  /**
   * Delete cookie data.<br>
   * Удаление данных из cookie.
   */
  remove () {
    this.set('')
  }

  /**
   * Returns cache time.<br>
   * Возвращает время кэширования.
   */
  private getAge (): number {
    return this.options?.age ?? useEnv('cache') ?? (7 * 24 * 60 * 60)
  }

  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  private update (): void {
    if (
      isDomRuntime() &&
      !CookieBlock.get()
    ) {
      const value = String(this.value ?? '')

      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(value)}`,
        `max-age=${value === '' ? '-1' : this.getAge()}`,
        `SameSite=${this.options?.sameSite ?? 'strict'}`,
        ...(this.options?.arguments ?? [])
      ].join('; ')
    }
  }

  static {
    if (isDomRuntime()) {
      for (const item of document.cookie.split(';')) {
        const [key, value] = item.trim().split('=')

        if (key && isFilled(value)) {
          cookie[key] = transformation(value)
        }
      }
    }
  }
}

const items: Record<string, Cookie<any>> = {}
