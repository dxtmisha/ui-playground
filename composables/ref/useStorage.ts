import { Ref, shallowRef, watch } from 'vue'

import { DataStorage } from '../../classes/static/DataStorage.ts'

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
): Ref<T | undefined> {
  if (name in items) {
    return items[name]
  }

  const storage = new DataStorage<T>(name)
  const item = shallowRef(storage.get(defaultValue, cache))

  watch(item, value => storage.set(value))

  items[name] = item
  return item
}

const items: Record<string, Ref<any>> = {}
