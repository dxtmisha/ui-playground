import { computed, type ComputedRef, type PropType } from 'vue'

import { type ProgressProps } from '../../Progress/props.ts'

export type UseEnabledSetup = {
  disabledBind: ComputedRef<boolean | undefined>

  /**
   * Checking for the status of the element’s activity.<br>
   * Проверка на статус активности элемента.
   */
  isEnabled: ComputedRef<boolean>

  /**
   * Checks for read-only status.<br>
   * Проверяет на статус только для чтения.
   */
  isReadonly: ComputedRef<boolean>

  /**
   * Checks if the element is turned off.<br>
   * Проверяет, выключен ли элемент.
   */
  isDisabled: ComputedRef<boolean>

  /**
   * Checks for the presence of an element for loading.<br>
   * Проверяет наличие элемента для загрузки.
   */
  isProgress: ComputedRef<boolean>
}

export type UseEnabledProps = {
  progress?: ProgressProps | boolean
  readonly?: boolean
  disabled?: boolean
}

export const usePropsEnabled = {
  progress: [Object, Boolean] as PropType<UseEnabledProps['progress']>,
  readonly: Boolean,
  disabled: Boolean
}

/**
 * Class for managing the activity of an element.<br>
 * Класс для управления активности элемента.
 * @param props input property /<br>входное свойство
 */
export const useEnabled = function (
  props: UseEnabledProps
): UseEnabledSetup {
  const isDisabled = (): boolean => Boolean(props?.disabled)

  return {
    disabledBind: computed<boolean | undefined>(() => isDisabled() || undefined),

    isEnabled: computed(() =>
      !props?.disabled &&
      !props?.readonly &&
      !props?.progress
    ),
    isReadonly: computed(() => Boolean(props?.readonly)),
    isDisabled: computed(() => isDisabled()),
    isProgress: computed(() => Boolean(props?.progress))
  }
}
