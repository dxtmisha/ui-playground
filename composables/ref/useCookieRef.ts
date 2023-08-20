import { ref, watch } from 'vue'
import { type CookieOptionsType, getCookie, setCookie } from '../../functions/cookie.ts'

/**
 * Creates a reactive variable to manage cookies.<br>
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name /<br>название cookie
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export function useCookieVue<T> (
  name: string,
  defaultValue?: T | (() => T),
  options?: CookieOptionsType
) {
  const cookie = ref(getCookie<T>(name, defaultValue, options))

  watch(cookie, value => {
    setCookie(name, value, options)
  })

  return cookie
}
