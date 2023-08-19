import { getStoryParameters } from './parameters.ts'
import { functionRenderStory } from './render.ts'

import { ArgDemoType } from './types.ts'

/**
 * Generates data for the output function of a job.<br>
 * Генерирует данные для вывода функции работы.
 * @param callback function to execute /<br>функция для выполнения
 * @param description description text /<br>текст описания
 * @param demo data for processing /<br>данные для обработки
 */
export function getStoryForFunction<
  T extends (...args: any) => any,
> (
  callback: T,
  description?: string | string[],
  demo?: ArgDemoType
) {
  return {
    parameters: getStoryParameters(description),
    render: functionRenderStory(callback, demo)
  }
}
