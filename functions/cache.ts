import { executeFunction } from './data.ts'

const cache: Record<string, any> = {}

/**
 * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
 * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
 * @param name cache name /<br>название кэша
 * @param callback function for the cache /<br>функция для кэша
 */
export function getCache<T> (
  name: string,
  callback?: () => T
): T | undefined {
  if (is(name)) {
    return get<T>(name)
  }

  return set<T>(name, callback)
}

/**
 * Check if the cached value exists.<br>
 * Проверяет, если кэшированная значение существует.
 * @param name cache name /<br>название кэша
 */
function is (name: string) {
  return name in cache
}

/**
 * Get the data from the cached variable.<br>
 * Получаем данные из кэшированной переменной.
 * @param name cache name /<br>название кэша
 */
function get<T> (name: string): T | undefined {
  return cache?.[name] as T
}

/**
 * Overwrites or adds new values for the cache.<br>
 * Перезаписывает или добавляет новые значения для кэша.
 * @param name cache name /<br>название кэша
 * @param valueCallback if you pass a function, it will execute when there is no value
 * and save the values /<br>если вы передадите функцию, она выполнится при отсутствии
 * значения и сохранит значения
 */
function set<T> (name: string, valueCallback?: T | (() => T)): T | undefined {
  cache[name] = executeFunction(valueCallback)
  return get<T>(name)
}
