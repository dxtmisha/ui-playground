import { computed, type ComputedRef, type VNode } from 'vue'

import { DesignComponents } from '../../classes/design/DesignComponents'

import {
  type FieldMessageProps,
  propsFieldMessage
} from './props'

export type UseFieldMessageComponent = {
  message?: object
}

export type UseFieldMessageSetup = {
  messageBind: ComputedRef<FieldMessageProps>
  renderFieldMessage: () => VNode[]
}

export type UseFieldMessageProps = {
  disabled?: FieldMessageProps['disabled']
  helperMessage?: FieldMessageProps['helperMessage']
  validationMessage?: FieldMessageProps['validationMessage']
}

export type UseFieldMessageCounterProps =
  UseFieldMessageProps &
  {
    counter?: FieldMessageProps['counter']
    maxlength?: FieldMessageProps['maxlength']
  }

export const usePropsFieldMessage = {
  disabled: propsFieldMessage.disabled,
  helperMessage: propsFieldMessage.helperMessage,
  validationMessage: propsFieldMessage.validationMessage
}

export const usePropsFieldMessageCounter = {
  ...usePropsFieldMessage,
  counter: propsFieldMessage.counter,
  maxlength: propsFieldMessage.maxlength
}

/**
 * The function returns data for working with the FieldMessage component.<br>
 * Функция возвращает данные для работы с компонентом FieldMessage.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 */
export const useFieldMessageRef = function <
  COMP extends UseFieldMessageComponent,
  P extends UseFieldMessageCounterProps
> (
  props: P,
  components?: DesignComponents<COMP, P>
): UseFieldMessageSetup {
  const messageBind = computed(() => {
    return {
      disabled: props?.disabled,
      counter: props?.counter,
      maxlength: props?.maxlength,
      helperMessage: props?.helperMessage,
      validationMessage: props?.validationMessage
    }
  })

  return {
    messageBind,
    renderFieldMessage (): VNode[] {
      const elements: any[] = []

      if (components) {
        components.renderAdd(
          elements,
          'message',
          messageBind.value
        )
      }

      return elements
    }
  }
}
