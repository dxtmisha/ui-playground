import { Env, EnvIndex } from '../classes/Env'

/**
 * Returns the values from the env environment.<br>
 * Возвращает значения из окружения env.
 * @param index property name /<br>название свойства
 * @param defaultValue default property value /<br>значение свойства по умолчанию
 */
export function useEnv<T> (
  index: EnvIndex | string,
  defaultValue?: T
): T {
  return new Env(index).get(defaultValue)
}
