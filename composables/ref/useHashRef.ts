import { Ref, ref, UnwrapRef, watch } from 'vue'
import { getHash, setHash } from '../../functions/hash.ts'

/**
 * Creates a reactive variable to manage hash.<br>
 * Создает реактивную переменную для управления hash.
 * @param name variable names /<br>названия переменных
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 */
export function useHashRef<T> (
  name: string,
  defaultValue?: T | (() => T)
): Ref<UnwrapRef<T> | undefined> {
  const hash: Ref<UnwrapRef<T> | undefined> = ref(getHash<T>(name, defaultValue))

  watch(hash, value => {
    setHash(name, value)
  })

  return hash
}
