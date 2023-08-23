import { Ref, ref, UnwrapRef, watch } from 'vue'
import { CookieOptionsType, getCookie, setCookie } from '../functions/cookie.ts'

const cookies: Record<string, Ref<any>> = {}

/**
 * Creates a reactive variable to manage cookies.<br>
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name /<br>название cookie
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export function useCookie<T> (
  name: string,
  defaultValue?: T | (() => T),
  options?: CookieOptionsType
): Ref<UnwrapRef<T> | undefined> {
  if (name in cookies) {
    return cookies[name]
  }

  const cookie = ref(getCookie<T>(name, defaultValue, options))

  watch(cookie, value => {
    setCookie(name, value, options)
  })

  cookies[name] = cookie
  return cookie
}
