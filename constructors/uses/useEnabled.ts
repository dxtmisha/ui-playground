import { computed, type ComputedRef } from 'vue'

import { type ProgressProps } from '../Progress/props.ts'

export type UseEnabledProps = {
  progress?: ProgressProps | boolean
  readonly?: boolean
  disabled?: boolean
}

export type useEnabledItem = {
  disabledBind: ComputedRef<boolean | undefined>

  /**
   * Checking for the status of the element’s activity.<br>
   * Проверка на статус активности элемента.
   */
  is: () => boolean

  /**
   * Checks for read-only status.<br>
   * Проверяет на статус только для чтения.
   */
  isReadonly: () => boolean

  /**
   * Checks if the element is turned off.<br>
   * Проверяет, выключен ли элемент.
   */
  isDisabled: () => boolean

  /**
   * Checks for the presence of an element for loading.<br>
   * Проверяет наличие элемента для загрузки.
   */
  isProgress: () => boolean
}

/**
 * Class for managing the activity of an element.<br>
 * Класс для управления активности элемента.
 * @param props input property /<br>входное свойство
 */
export const useEnabled = function (
  props: UseEnabledProps
): useEnabledItem {
  const item = computed(() =>
    !props?.disabled &&
    !props?.readonly &&
    !props?.progress
  )

  const isDisabled = (): boolean => Boolean(props?.disabled)

  return {
    disabledBind: computed<boolean | undefined>(() => isDisabled() || undefined),

    is: (): boolean => item.value,
    isReadonly: (): boolean => Boolean(props?.readonly),
    isDisabled: (): boolean => Boolean(props?.disabled),
    isProgress: (): boolean => Boolean(props?.progress)
  }
}
