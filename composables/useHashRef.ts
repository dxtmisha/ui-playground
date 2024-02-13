import { Ref, shallowRef, watch } from 'vue'

import { Hash } from '../classes/Hash'

/**
 * Creates a reactive variable to manage the hash.<br>
 * Создает реактивную переменную для управления хэшем.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export function useHashRef<T> (
  name: string,
  defaultValue?: T | (() => T)
) {
  if (name in items) {
    return items[name]
  }

  const item = shallowRef<T>(Hash.get(name, defaultValue))

  watch(item, (value: T) => Hash.set(name, value))
  Hash.addWatch(name, (value: T) => {
    item.value = value
  })

  items[name] = item
  return item
}

const items: Record<string, Ref<any>> = {}
