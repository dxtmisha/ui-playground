import { Ref, ref, UnwrapRef, watch } from 'vue'
import { getStorage, setStorage } from '../functions/storage.ts'

const storages: Record<string, Ref<any>> = {}

/**
 * Creates a reactive variable to manage a local storage.<br>
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 * @param cache cache time /<br>время кэширования
 */
export function useStorage<T> (
  name: string,
  defaultValue?: T | (() => T),
  cache?: number
): Ref<UnwrapRef<T> | undefined> {
  if (name in storages) {
    return storages[name]
  }

  const storage = ref<T | undefined>(getStorage<T>(name, defaultValue, cache))

  watch(storage, value => setStorage(name, value))

  storages[name] = storage
  return storage
}
