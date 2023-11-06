import {
  computed,
  type ComputedRef,
  type PropType,
  type VNode
} from 'vue'
import { getBind } from '../../functions/render.ts'

import { DesignComponents } from '../../classes/ref/DesignComponents.ts'

import { type ProgressProps } from './props.ts'

export type UseProgressComponent = {
  progress?: object
}

export type UseProgressProp = {
  progress?: ProgressProps | boolean
}

export const usePropsProgress = {
  progress: [Boolean, Object] as PropType<UseProgressProp['progress']>
}

export type useProgressItem = {
  /**
   * Parameters for the main loader.<br>
   * Параметры для главного загрузчика.
   */
  bind: ComputedRef<ProgressProps>

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  render (): VNode[]
}

/**
 * UseProgress
 * @param props input parameter / входной параметр
 * @param components object for working with components / объект для работы с компонентами
 * @param classesName class name for the component / название класса для компонента
 * @param extra additional parameter or property name /<br>дополнительный параметр или имя свойства
 */
export const useProgress = function <
  COMP extends UseProgressComponent,
  P extends UseProgressProp
> (
  props: P,
  components?: DesignComponents<COMP, P>,
  classesName = 'is-progress',
  extra?: Record<string, any>
): useProgressItem {
  const bind = computed(
    () => getBind(
      props.progress,
      {
        class: classesName,
        ...extra
      },
      'visible'
    )
  )

  return {
    bind,
    render (): VNode[] {
      const elements: VNode[] = []

      if (
        components &&
        props?.progress
      ) {
        components.renderAdd(
          elements,
          'progress',
          bind.value
        )
      }

      return elements
    }
  }
}
