import { ref, watch } from 'vue'
import { getStorage, setStorage } from '../../functions/storage.ts'

/**
 * Creates a reactive variable to manage a local storage.<br>
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 * @param cache cache time /<br>время кэширования
 */
export function useStorageRef<T> (
  name: string,
  defaultValue?: T | (() => T),
  cache?: number
) {
  const storage = ref(getStorage<T>(name, defaultValue, cache))

  watch(storage, value => setStorage(name, value))

  return storage
}
