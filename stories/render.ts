import { forEach } from '../functions/data.ts'

import {
  getArgsAll,
  toArgs,
  toCallbackArgs,
  toCallbackName,
  toCallbackReturn
} from './functions.ts'

import {
  makeValues,
  useArgs,
  useVariables
} from './functionsRef.ts'

import {
  type ArgDemoType,
  type ArgType
} from './types.ts'
import { type FunctionAnyType } from '../types/basic.ts'

/**
 * Rendering method for a function.<br>
 * Метод рендеринга для функции.
 * @param callback function name /<br>имя функции
 * @param demo input data for a function /<br>входные данные для функции
 */
export function renderStory<T extends (...args: any[]) => any> (
  callback: T,
  demo?: ArgDemoType<any>
) {
  const html: string[] = forEach(
    toArgs(demo),
    args => {
      const argValue = toCallbackArgs(args)

      return `
        <div class="sb-function__item">
          <div class="sb-function__item__name">${callback.name}(<span>${toCallbackName(argValue)}</span>)</div>
          <div class="sb-function__item__value">// ${toCallbackReturn(callback(...argValue))}</div>
        </div>
      `
    }
  )

  return () => ({ template: `<div class="sb-function">${html.join('')}</div>` })
}

/**
 * Rendering method for reactive functions.<br>
 * Метод рендеринга для реактивных функций.
 * @param callback function name /<br>имя функции
 * @param watchCallback function to update the value /<br>функция для обновления значения
 */
export function renderComposablesRef<
  A = any,
  R = any,
  C extends FunctionAnyType<A, R> = FunctionAnyType<A, R>,
> (
  callback: C,
  watchCallback: (item: R, valuesRef: any) => void
) {
  const {
    item,
    options,
    argsName,
    argsReturn
  } = useArgs(callback)

  const { variables } = useVariables(item, options)

  makeValues(item, options, watchCallback)

  return (
    args: Record<string, any>,
    { argTypes }: { argTypes: Record<string, ArgType> }
  ) => {
    options.value = getArgsAll(args, argTypes)

    return {
      setup: () => ({
        argsName,
        argsReturn,
        variables
      }),
      template: `
        <div class="sb-function">
          <div class="sb-function__item">
            <div class="sb-function__item__name">${callback.name}(<span>{{ argsName }}</span>)</div>
            <div class="sb-function__item__value">// <span v-html="argsReturn" /></div>
          </div>
          <div v-for="(variable, name) in variables" :key="name" class="sb-function__item">
            <div class="sb-function__item__name">
              ${callback.name}(<span>{{ argsName }}</span>).<i v-html="variable.name" />
            </div>
            <div class="sb-function__item__value">// {{ variable.value }}</div>
          </div>
        </div>
      `
    }
  }
}
