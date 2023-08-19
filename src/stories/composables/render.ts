import { forEach } from '../../../functions/data.ts'

import {
  toArgs,
  toCallbackArgs,
  toCallbackName,
  toCallbackReturn
} from './functions.ts'

import { ArgDemoType } from './types.ts'

/**
 * Rendering method for a function.<br>
 * Метод рендеринга для функции.
 * @param callback function name /<br>имя функции
 * @param demo input data for a function /<br>входные данные для функции
 */
export function functionRenderStory<T extends (...args: any[]) => any> (
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
