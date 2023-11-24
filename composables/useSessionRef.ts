import { Ref, shallowRef, watch } from 'vue'

import { DataStorage } from '../classes/DataStorage.ts'

/**
 * Creates a reactive variable to manage session storage.<br>
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export function useSessionRef<T> (
  name: string,
  defaultValue?: T | (() => T)
): Ref<T | undefined> {
  if (name in items) {
    return items[name]
  }

  const storage = new DataStorage<T>(name, true)
  const item = shallowRef(storage.get(defaultValue))

  watch(item, value => storage.set(value))

  items[name] = item
  return item
}

const items: Record<string, Ref<any>> = {}
