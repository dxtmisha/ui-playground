import { executeFunction, isFilled, transformation } from './data.ts'
import { getEnv } from './env.ts'
import { getStorage, setStorage } from './storage.ts'

export type CookieSameSiteType = 'strict' | 'lax';
export type CookieOptionsType = {
  age?: number;
  sameSite?: CookieSameSiteType;
  arguments?: string[];
};
export type CookieType<T = any> = {
  value: T;
  options: CookieOptionsType;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const STORAGE_NAME_BLOCK = 'cookie-block'

const cookie = new Map<string, CookieType>()
let block: undefined | boolean = getStorage(STORAGE_NAME_BLOCK)

/**
 * Get data or update if none.<br>
 * Получает данные или обновляет, если их нет.
 * @param name cookie name /<br>название cookie
 * @param callback value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export function getCookie<T> (
  name: string,
  callback?: T | (() => T),
  options?: CookieOptionsType
): T | undefined {
  if (
    !cookie.has(name) &&
    isFilled(callback)
  ) {
    setCookie(name, callback, options)
  }

  return get<T>(name)?.value
}

/**
 * Updates cookie data.<br>
 * Обновляет данные cookie.
 * @param name cookie name /<br>название cookie
 * @param callback value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export function setCookie<T> (
  name: string,
  callback?: T | (() => T),
  options?: CookieOptionsType
) {
  set(name, executeFunction(callback), options)
  update(name)
}

/**
 * Delete cookie data.<br>
 * Удаление данных из cookie.
 * @param name cookie name /<br>название cookie
 */
export function removeCookie (name: string) {
  set(name, '')
  update(name)
}

/**
 * Change cookie blocking status.<br>
 * Изменить статус блокировки cookie.
 * @param value lock status /<br>блокировочный статус
 */
export function setBlock (value: boolean) {
  block = value
  setStorage(STORAGE_NAME_BLOCK, block)
}

/**
 * Returns cookie element.<br>
 * Возвращает элемент из cookie.
 * @param name cookie name /<br>название cookie
 */
function get<T> (name: string): CookieType<T> | undefined {
  return cookie.get(name)
}

/**
 * Returns cache time.<br>
 * Возвращает время кэширования.
 * @param name cookie name /<br>название cookie
 */
function getAge (name: string) {
  return get(name)?.options?.age ?? getEnv('cache') ?? (7 * 24 * 60 * 60)
}

/**
 * Adds cookie object data.<br>
 * Добавляет данные объекта cookie.
 * @param name cookie name /<br>название cookie
 * @param value input values /<br>входные значения
 * @param options additional parameters /<br>дополнительные параметры
 */
function add<T> (
  name: string,
  value: T,
  options?: CookieOptionsType
) {
  cookie.set(name, {
    value,
    options: options ?? {}
  })
}

/**
 * Change cookie object data.<br>
 * Изменение данных объекта cookie.
 * @param name cookie name /<br>название cookie
 * @param value input values /<br>входные значения
 * @param options additional parameters /<br>дополнительные параметры
 */
function set<T> (
  name: string,
  value: T,
  options?: CookieOptionsType
) {
  const item = cookie.get(name)

  if (item) {
    item.value = value

    if (options) {
      Object.assign(item.options, options)
    }
  } else {
    add(name, value)
  }
}

/**
 * Update cookie data.<br>
 * Обновление данных cookie.
 * @param name cookie name /<br>название cookie
 */
function update (name: string): void {
  const item = get(name)

  if (item && block !== false) {
    const value = String(item.value || '')

    document.cookie = [
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
      `max-age=${value === '' ? '-1' : getAge(name)}`,
      `SameSite=${item.options?.sameSite ?? 'strict'}`,
      ...(item.options?.arguments ?? [])
    ].join('; ')
  }
}

(() => {
  for (const item of document.cookie.split(';')) {
    const [key, value] = item.trim().split('=')

    if (key && isFilled(value)) {
      add(key, transformation(value))
    }
  }
})()
