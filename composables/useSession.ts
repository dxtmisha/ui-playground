import { Ref, ref, UnwrapRef, watch } from 'vue'
import { getSession, setSession } from '../functions/storage.ts'

const sessions: Record<string, Ref<any>> = {}

/**
 * Creates a reactive variable to manage session storage.<br>
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export function useSession<T> (
  name: string,
  defaultValue?: T | (() => T)
): Ref<UnwrapRef<T> | undefined> {
  if (name in sessions) {
    return sessions[name]
  }

  const session = ref(getSession<T>(name, defaultValue))

  watch(session, value => setSession(name, value))

  sessions[name] = session
  return session
}
