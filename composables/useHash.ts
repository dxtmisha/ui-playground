import { Ref, ref, UnwrapRef, watch } from 'vue'
import { getHash, setHash } from '../functions/hash.ts'

const hashItems: Record<string, Ref<any>> = {}

/**
 * Creates a reactive variable to manage hash.<br>
 * Создает реактивную переменную для управления hash.
 * @param name variable names /<br>названия переменных
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 */
export function useHash<T> (
  name: string,
  defaultValue?: T | (() => T)
): Ref<UnwrapRef<T> | undefined> {
  if (name in hashItems) {
    return hashItems[name]
  }

  const hash = ref<T | undefined>(getHash<T>(name, defaultValue))

  watch(hash, value => setHash(name, value))

  hashItems[name] = hash
  return hash
}
