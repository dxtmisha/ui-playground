import { replaceRecursive } from '../../../functions/object.ts'

import { getDescription } from './functions.ts'

/**
 * Returns the description and parameters for a component.<br>
 * Возвращает описание и параметры для компонента.
 * @param description description text /<br>текст описания
 * @param parameters additional parameters /<br>дополнительные параметры
 */
export function getComponentParameters (
  description: string | string[],
  parameters?: Record<string, any>
) {
  const data = {
    docs: {
      description: {
        component: getDescription(description)
      }
    }
  }

  return (parameters && replaceRecursive(data, parameters)) ?? data
}

/**
 * Returns the description and parameters for a history.<br>
 * Возвращает описание и параметры для истории.
 * @param description description text /<br>текст описания
 * @param parameters additional parameters /<br>дополнительные параметры
 */
export function getStoryParameters (
  description?: string | string[],
  parameters?: Record<string, any>
) {
  const data = {
    docs: {
      description: {
        story: getDescription(description)
      }
    }
  }

  return (parameters && replaceRecursive(data, parameters)) ?? data
}
