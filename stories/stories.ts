import { getStoryParameters } from './parameters.ts'

import {
  renderComposablesRef,
  renderStory
} from './render.ts'

import { type ArgDemoType } from './types.ts'

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
    render: renderStory(callback, demo)
  }
}

/**
 * Генерирует данные для вывода реактивных функции работы
 * @param callback function to execute /<br>функция для выполнения
 * @param watchCallback function to update the value /<br>функция для обновления значения
 * @param description description text /<br>текст описания
 */
export function getStoryForComposablesRef<
  A = any,
  R = any,
  C extends (...args: A[]) => R = (...args: A[]) => R,
> (
  callback: C,
  watchCallback: (item: R, valuesRef: any) => void,
  description?: string | string[]
) {
  return {
    parameters: getStoryParameters(description),
    render: renderComposablesRef(callback, watchCallback)
  }
}
