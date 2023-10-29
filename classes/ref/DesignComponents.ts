import { type VNode } from 'vue'

import { forEach } from '../../functions/data.ts'
import { getRef, render } from '../../functions/ref.ts'

import {
  type ConstrComponent,
  type ConstrComponentMod
} from '../../types/constructor.ts'

/**
 * Class for working with connected components.<br>
 * Класс для работы с подключенными компонентами.
 */
export class DesignComponents<
  COMP extends ConstrComponent,
  P extends Record<string, any>
> {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly components: COMP = {} as COMP,
    protected readonly modification?: ConstrComponentMod<P>
  ) {
  }

  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is<K extends keyof COMP> (name: K): name is K {
    return name in this.components
  }

  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get<K extends keyof COMP> (name: K): COMP[K] {
    return this.components?.[name]
  }

  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification (
    index?: string,
    props?: Record<string, any>
  ): Record<string, any> | undefined {
    if (
      index &&
      this.modification &&
      this.modification?.[index]
    ) {
      const value: Record<string, any> = {}

      forEach(this.modification[index], (item, name) => {
        value[name] = getRef(item)
      })

      if (props) {
        Object.assign(value, props)
      }

      return value
    } else {
      return props
    }
  }

  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render<K extends keyof COMP> (
    name: K & string,
    props?: COMP[K] & Record<string, any>,
    children?: any[],
    index?: string
  ): VNode[] {
    if (this.is(name)) {
      return [
        render(
          this.get(name),
          this.getModification(index, props),
          children,
          index || (name as string)
        )
      ]
    }

    return []
  }

  /**
   * Rendering the component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added /<br>
   * массив, по которому будет добавлять объект
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderAdd<K extends keyof COMP> (
    item: any[],
    name: K & string,
    props?: COMP[K] & Record<string, any>,
    children?: any[],
    index?: string
  ): this {
    item.push(...this.render(name, props, children, index))

    return this
  }
}
