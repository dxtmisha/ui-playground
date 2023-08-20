import { transformation } from './data.ts'

import { NumberOrStringType } from '../types/basic.ts'

export type EnvIndexType = 'cache' | 'language' | 'prefix' | string;
export type EnvListType = {
  name: string;
  defaultValue?: NumberOrStringType;
};

const indexList: Record<EnvIndexType, EnvListType> = {
  cache: {
    name: 'UI_CACHE',
    defaultValue: 7 * 24 * 60 * 60
  },
  language: {
    name: 'UI_LANGUAGE',
    defaultValue: 'en-GB'
  },
  prefix: {
    name: 'UI_PREFIX',
    defaultValue: 'ui-playground-'
  }
}

/**
 * Returns the values from the env environment.<br>
 * Возвращает значения из окружения env.
 * @param index property name /<br>название свойства
 * @param defaultValue default property value /<br>значение свойства по умолчанию
 */
export function getEnv<T = string> (index: EnvIndexType, defaultValue?: string): T {
  return transformation(
    (import.meta.env?.[getName(index)] as string) ?? defaultValue ?? getDefaultValue(index),
    false
  ) as T
}

/**
 * Get the full key name in env.<br>
 * Получаем полное название ключа в env.
 * @param index property name /<br>название свойства
 */
function getName (index: EnvIndexType): string {
  return indexList?.[index]?.name ?? index
}

/**
 * Gets values by its keys.<br>
 * Получает значения по его ключам.
 * @param index property name /<br>название свойства
 */
function getDefaultValue (index: EnvIndexType): NumberOrStringType | undefined {
  return indexList?.[index]?.defaultValue
}
