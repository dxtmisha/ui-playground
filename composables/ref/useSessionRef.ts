import { ref, watch } from 'vue'
import { getSession, setSession } from '../../functions/storage.ts'

/**
 * Creates a reactive variable to manage session storage.<br>
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export function useSessionRef<T> (
  name: string,
  defaultValue?: T | (() => T)
) {
  const storage = ref(getSession<T>(name, defaultValue))

  watch(storage, value => setSession(name, value))

  return storage
}
