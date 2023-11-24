import { type VNode } from 'vue'

import { forEach, isObjectNotArray } from '../../functions/data.ts'
import { getRef, render } from '../../functions/ref.ts'

import {
  type ConstrComponent,
  type ConstrComponentMod,
  type ConstrItem
} from '../../types/constructor.ts'

/**
 * Class for working with connected components.<br>
 * Класс для работы с подключенными компонентами.
 */
export class DesignComponents<
  COMP extends ConstrComponent,
  P extends ConstrItem
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
  getModification<K extends keyof P> (
    index?: K & string | string,
    props?: P[K] | Record<string, any>
  ): Record<string, any> | undefined {
    if (index) {
      const modification = getRef(this.modification?.[index])

      if (
        modification &&
        isObjectNotArray(modification)
      ) {
        const value: Record<string, any> = {}

        forEach(modification, (item, name: string) => {
          value[name] = getRef(item)
        })

        if (props) {
          Object.assign(value, props)
        }

        return value
      }
    }

    return props
  }

  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render<
    K extends keyof COMP,
    PK extends keyof P
  > (
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: any[],
    index?: PK & string | string
  ): VNode[] {
    if (this.is(name)) {
      const indexItem = index ?? name

      return [
        render(
          this.get(name),
          this.getModification(indexItem, props),
          children,
          indexItem
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
  renderAdd<
    K extends keyof COMP,
    PK extends keyof P
  > (
    item: any[],
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: any[],
    index?: PK & string | string
  ): this {
    item.push(...this.render(name, props, children, index))

    return this
  }
}
