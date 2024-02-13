import { computed, type ComputedRef, type PropType } from 'vue'

import { type ProgressProps } from '../../Progress/props'

export type UseEnabledSetup = {
  /**
   * Property to determine that the item is disabled.<br>
   * Свойство для определения, что элемент выключен.
   */
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
  /**
   * Enable or disable the loader, or an object with properties for the loader.<br>
   * Включить или отключить загрузчик, или объект со свойствами для загрузчика.
   */
  loading?: boolean | ProgressProps

  /**
   * Enable read-only status.<br>
   * Включить статус только для чтения.
   */
  readonly?: boolean

  /**
   * Enable the item disable status.<br>
   * Включить статус отключения элемента.
   */
  disabled?: boolean
}

export const usePropsEnabled = {
  progress: [Object, Boolean] as PropType<UseEnabledProps['loading']>,
  readonly: Boolean,
  disabled: Boolean
}

/**
 * Use to control the activity of the item.<br>
 * Использование для управления активности элемента.
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
      !props?.loading
    ),
    isReadonly: computed(() => Boolean(props?.readonly)),
    isDisabled: computed(() => isDisabled()),
    isProgress: computed(() => Boolean(props?.loading))
  }
}
