import { executeFunction, isNull } from './data.ts'
import { getEnv } from './env.ts'

export type StorageType<T> = {
  value: T
  age: number
};

/**
 * Getting data from local storage.<br>
 * Получение данных из локального хранилища.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 * @param cache cache time /<br>время кэширования
 */
export function getStorage<T> (
  name: string,
  defaultValue?: T | (() => T),
  cache?: number
) {
  return get<T>(name, defaultValue, cache)?.value
}

/**
 * Changing data in local storage.<br>
 * Изменение данных в локальном хранилище.
 * @param name value name /<br>название значения
 * @param value new values /<br>новые значения
 */
export function setStorage<T> (name: string, value?: T) {
  return set<T>(name, value)?.value
}

/**
 * Getting data from the session.<br>
 * Получение данных из сессии.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export function getSession<T> (
  name: string,
  defaultValue?: T | (() => T)
) {
  return get<T>(name, defaultValue, undefined, true)?.value
}

/**
 * Changing data in storage.<br>
 * Изменение данных в хранилище.
 * @param name value name /<br>название значения
 * @param value new values /<br>новые значения
 */
export function setSession<T> (name: string, value?: T) {
  return set<T>(name, value, true)?.value
}

/**
 * Getting data from storage.<br>
 * Получение данных из хранилища.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 * @param cache cache time /<br>время кэширования
 * @param isSession should we use a session? /<br>использовать ли сессию?
 */
function get<T> (
  name: string,
  defaultValue?: T | (() => T),
  cache?: number,
  isSession = false
): StorageType<T | undefined> {
  const index = getName(name)
  const value = getType(isSession)?.getItem(index)

  if (value) {
    try {
      const item = JSON.parse(value) as StorageType<T>

      if (isNull(cache) || item.age + (cache * 1000) >= new Date().getTime()) {
        return item
      }
    } catch (e) {
      console.error(e)
    }
  }

  return set<T>(name, defaultValue, isSession)
}

/**
 * Getting the user name in the storage.<br>
 * Получение имени пользователя в хранилище.
 * @param name value name /<br>название значения
 */
function getName (name: string) {
  return `${getEnv('prefix') ?? ''}${name}`
}

/**
 * Returns an object for working with storage.<br>
 * Возвращает объект для работы с хранилищем.
 * @param isSession should we use a session? /<br>использовать ли сессию?
 */
function getType (isSession: boolean): Storage | undefined {
  return isSession ? window?.sessionStorage : window?.localStorage
}

/**
 * Changes values in storage.<br>
 * Изменяет значения в хранилище.
 * @param name value name /<br>название значения
 * @param value new values /<br>новые значения
 * @param isSession should we use a session? /<br>использовать ли сессию?
 */
function set<T> (
  name: string,
  value?: T | (() => T),
  isSession = false
): StorageType<T | undefined> {
  const index = getName(name)
  const newValue = generatorValue(executeFunction(value))
  const method = getType(isSession)

  if (method) {
    if (isNull(newValue.value)) {
      method.removeItem(index)
    } else {
      method.setItem(index, JSON.stringify(newValue))
    }
  }

  return newValue
}

/**
 * Creates new values.<br>
 * Создает новые значения.
 * @param value new values /<br>новые значения
 */
function generatorValue<T> (value: T): StorageType<T> {
  return {
    value,
    age: new Date().getTime()
  }
}
