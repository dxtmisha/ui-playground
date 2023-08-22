import { computed, isRef, ref, Ref, watch } from 'vue'
import { forEach, isObject } from '../functions/data.ts'

import {
  isArgsDifferent,
  makeCallback,
  toCallbackName,
  toCallbackReturn
} from './functions.ts'

import { category } from './media.ts'
import { type FunctionAnyType } from '../types/basic.ts'
import { type ArgsGroupType, type VariablesType } from './types.ts'

/**
 * Returns data for the job.<br>
 * Возвращает данные для работы.
 */
export function useArgs<
  A = any,
  R = any,
  C extends FunctionAnyType<A, R> = FunctionAnyType<A, R>,
> (callback: C) {
  const argsRef = ref<Record<string, any>>({})
  const options = ref<ArgsGroupType>({})
  const item = ref<R>()
  let first = true

  watch(options, (
    args: Record<keyof typeof category | string, Record<string, any>>
  ) => {
    if (first || isArgsDifferent(args, argsRef.value, category.arg)) {
      argsRef.value = args?.[category.arg] || {}
      item.value = makeCallback<A, R, C>(callback, argsRef.value)
      first = false

      console.info(`Reload<${callback?.name}>`)
    }
  })

  return {
    item,
    options,
    argsName: computed(() => toCallbackName(Object.values(argsRef.value))),
    argsReturn: computed(() => toCallbackReturn(item.value))
  }
}

/**
 * Processing of additional parameters received in response.<br>
 * Обработка дополнительных параметров, полученных в ответ.
 * @param item object of the received data after the function is executed /<br>
 * объект полученные данные после выполнения функции
 * @param options data for processing /<br>данные для обработки
 * @param exceptions list of variables that should not be displayed /<br>
 * список переменных, который не надо выводить
 */
export function useVariables<T> (
  item: Ref<T | undefined>,
  options: Ref<ArgsGroupType>,
  exceptions?: string[]
): { variables: Ref<VariablesType> } {
  const variables = ref<VariablesType>([])

  watch(options, () => {
    requestAnimationFrame(() => {
      variables.value = getVariables(item, options.value, exceptions)
    })
  }, { immediate: true })

  return { variables }
}

/**
 * Updates the data when it changes.<br>
 * Обновляет данные при их изменении.
 * @param item object of the received data after the function is executed /<br>
 * объект полученные данные после выполнения функции
 * @param options data for processing /<br>данные для обработки
 * @param watchCallback function to update the value /<br>
 * функция для обновления значения
 */
export function makeValues<R> (
  item: Ref<R | undefined>,
  options: Ref<ArgsGroupType>,
  watchCallback: (item: R, valuesRef: any) => void
) {
  let values: Record<string, any> = {}

  watch(options, (
    args: Record<keyof typeof category | string, Record<string, any>>
  ) => {
    if (
      item.value &&
      isArgsDifferent(args, values, category.value)
    ) {
      values = args[category.value]
      watchCallback(item.value, values)
    }
  })
}

/**
 * Getting data from returned data after execution.<br>
 * Получение данных из вернувших данные после выполнения.
 * @param item object of the received data after the function is executed /<br>
 * объект полученные данные после выполнения функции
 * @param options data for processing /<br>данные для обработки
 * @param exceptions list of variables that should not be displayed /<br>
 * список переменных, который не надо выводить
 */
function getVariables<T> (
  item: Ref<T | undefined>,
  options: ArgsGroupType,
  exceptions?: string[]
): VariablesType {
  const variables: VariablesType = []
  if (
    !isRef(item.value) &&
    isObject(item.value)
  ) {
    forEach(item.value, (variable: string | FunctionAnyType<string, string>, name) => {
      if (
        !exceptions ||
        exceptions.indexOf(name as string) === -1
      ) {
        if (typeof variable === 'function') {
          const values: string[] = Object.values(options?.[name] ?? {})

          variables.push({
            name: `${name}(<span>${toCallbackName(values)}</span>)`,
            value: toCallbackReturn(variable(...values))
          })
        } else {
          variables.push({
            name,
            value: toCallbackReturn(variable)
          })
        }
      }
    })
  }

  return variables
}
