// import { useRouter } from 'vue-router'
import { makeStopPropagation } from '../../../functions/event.ts'

import { type ConstrEmit } from '../../../types/constructor.ts'
import { type UseEnabledSetup } from './useEnabled.ts'

type UseEventClickValue = {
  type: string
  value: any
  detail: Record<string, any> | undefined
}

export type UseEventClickSetup = {
  /**
   * Events when clicking on the button itself.<br>
   * События при клике на самой кнопке.
   * @param event press events /<br>события нажатия
   */
  onClick (event: MouseEvent): void
}

export type UseEventClickEmits = {
  click: [
    event: MouseEvent,
    value: UseEventClickValue
  ]
}

export type UseEventClickProps = {
  to?: string
  value?: any
  detail?: Record<string, any>
}

export const usePropsEventClick = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}

/**
 * Base class for working with button events.<br>
 * Базовый класс для работы с событиями кнопки.
 */
export const useEventClick = function (
  props: UseEventClickProps,
  enabled: UseEnabledSetup,
  emits?: ConstrEmit<UseEventClickEmits>
): UseEventClickSetup {
  /**
   * Parameters for the event.<br>
   * Параметры для события.
   */
  const getOptions = (event: MouseEvent): UseEventClickValue => {
    const type = (event.target as HTMLElement)
      ?.closest<HTMLElement>('[data-event-type]')
      ?.dataset
      ?.eventType

    return {
      type: type ?? 'click',
      value: props?.value,
      detail: props?.detail
    }
  }

  /**
   * Changing the link through the router.<br>
   * Изменение ссылки через router.
   */
  const router = () => {
    // if (props?.to) {
    //   useRouter().push(props.to).then()
    //   return true
    // }

    return false
  }

  return {
    onClick (event: MouseEvent) {
      if (enabled.isEnabled.value && !router()) {
        emits?.('click', event, getOptions(event))
      } else {
        makeStopPropagation(event)
      }
    }
  }
}
