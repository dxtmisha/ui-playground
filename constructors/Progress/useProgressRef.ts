import {
  computed,
  type ComputedRef,
  type PropType,
  type VNode
} from 'vue'
import { getBind } from '../../functions/render.ts'

import { DesignComponents } from '../../classes/design/DesignComponents.ts'

import { type ProgressProps } from './props.ts'

export type UseProgressComponent = {
  progress?: object
}

export type UseProgressSetup = {
  /**
   * Parameters for the main loader.<br>
   * Параметры для главного загрузчика.
   */
  progressBind: ComputedRef<ProgressProps>

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  renderProgress (): VNode[]
}

export type UseProgressProp = {
  progress?: ProgressProps | boolean
}

export const usePropsProgress = {
  progress: [Boolean, Object] as PropType<UseProgressProp['progress']>
}

/**
 * UseProgress
 * @param props input parameter / входной параметр
 * @param components object for working with components / объект для работы с компонентами
 * @param classesName class name for the component / название класса для компонента
 * @param extra additional parameter or property name /<br>дополнительный параметр или имя свойства
 */
export const useProgressRef = function <
  COMP extends UseProgressComponent,
  P extends UseProgressProp
> (
  props: P,
  components?: DesignComponents<COMP, P>,
  classesName = 'is-progress',
  extra?: ProgressProps
): UseProgressSetup {
  const bind = computed(() => getBind(
    props.progress,
    {
      class: classesName,
      ...extra
    },
    'visible'
  ))

  return {
    progressBind: bind,

    renderProgress (): VNode[] {
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
