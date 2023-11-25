import { CacheStatic } from '../classes/CacheStatic.ts'

/**
 * Getting the cached function.<br>
 * Получаем кэшированную функцию.
 * @param callback function for the cache /<br>функция для кэша
 * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
 */
export function useCache<T> (
  callback: () => T,
  comparison: any[]
): () => T {
  return () => CacheStatic.get(getName(), callback, comparison)
}

let nameNumber = 1

/**
 * Getting names for caching.<br>
 * Получаем названия для кэширования.
 */
function getName (): string {
  return `cache-${nameNumber++}`
}
