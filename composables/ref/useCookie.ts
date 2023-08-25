import { Ref, ref, UnwrapRef, watch } from 'vue'
import { Cookie, CookieOptions } from '../../classes/static/Cookie.ts'

/**
 * Creates a reactive variable to manage cookies.<br>
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name /<br>название cookie
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export function useCookie<T> (
  name: string,
  defaultValue?: T | string | (() => (T | string)),
  options?: CookieOptions
): Ref<UnwrapRef<T> | string | undefined> {
  if (name in items) {
    return items[name]
  }

  const cookie = new Cookie<T>(name)
  const item = ref(cookie.get(defaultValue, options))

  watch(item, value => {
    cookie.set(value as T, options)
  })

  items[name] = item
  return item
}

const items: Record<string, Ref<any>> = {}
