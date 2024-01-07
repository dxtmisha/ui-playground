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
   * Property for the loader.<br>
   * Свойство для загрузчика.
   */
  progressBind: ComputedRef<ProgressProps>

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  renderProgress (): VNode[]
}

export type UseProgressProp = {
  /**
   * Enable or disable the loader, or an object with properties for the loader.<br>
   * Включить или отключить загрузчик, или объект со свойствами для загрузчика.
   */
  loading?: boolean | ProgressProps
}

export const usePropsProgress = {
  progress: [Boolean, Object] as PropType<UseProgressProp['loading']>
}

/**
 * The function returns data for working with the Progress component.<br>
 * Функция возвращает данные для работы с компонентом Progress.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classesName class name for the component /<br>название класса для компонента
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
  const progressBind = computed(() => getBind(
    props.loading,
    {
      class: classesName,
      ...extra
    },
    'visible'
  ))

  return {
    progressBind,

    renderProgress (): VNode[] {
      const elements: VNode[] = []

      if (
        components &&
        props?.loading
      ) {
        components.renderAdd(
          elements,
          'progress',
          progressBind.value
        )
      }

      return elements
    }
  }
}
