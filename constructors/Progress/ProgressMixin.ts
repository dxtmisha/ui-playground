import {
  computed,
  type PropType,
  type VNode
} from 'vue'
import { getBind } from '../../functions/render.ts'

import { DesignComponents } from '../../classes/ref/DesignComponents.ts'

import { type ProgressProps } from './props.ts'

export type ProgressComponentInclude = {
  progress?: object
}

export type ProgressPropInclude = {
  progress?: ProgressProps | boolean
}

export const propsProgressInclude = {
  progress: [Boolean, Object] as PropType<ProgressPropInclude['progress']>
}

/**
 * ProgressMixin
 */
export class ProgressMixin<
  COMP extends ProgressComponentInclude,
  P extends ProgressPropInclude
> {
  /**
   * Constructor
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param classesName class name for the component / название класса для компонента
   * @param extra additional parameter or property name /<br>дополнительный параметр или имя свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: P,
    protected readonly components?: DesignComponents<COMP, P>,
    protected readonly classesName = 'is-progress',
    protected readonly extra?: Record<string, any>
  ) {
  }

  readonly bind = computed(() => {
    return 'progress' in this.props ? getBind(this.props.progress, this.extra, 'visible') : undefined
  })

  /**
   * A method for rendering
   *
   * Метод для рендеринга
   * @protected
   */
  render (): VNode[] {
    const elements: VNode[] = []

    if (
      this.components &&
      this.props?.progress
    ) {
      this.components.renderAdd(elements, 'progress', {
        class: this.classesName,
        ...this.bind.value
      })
    }

    return elements
  }
}
