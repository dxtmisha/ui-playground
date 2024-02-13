import { forEach } from '../../functions/data'

import {
  KEY_GLOBAL_PROJECT,
  type MutationComponent,
  type MutationComponentCache,
  type MutationComponentCallback,
  type MutationComponentProps,
  type MutationProject,
  type MutationProjectItem
} from '../../types/mutation'

/**
 * Class for working with global variables.<br>
 * Класс для работы с глобальными переменными.
 */
export class MutationGlobal {
  static readonly functions: Record<string, any> = {}
  static readonly classes: Record<string, any> = {}
  static readonly components: Record<string, any> = {}

  protected static readonly compItems: MutationComponent = {}
  protected static readonly compCaching: MutationComponentCache = {}

  /**
   * Checks if a function is in the list by its name.<br>
   * Проверяет, есть ли функция в списке по ее имени.
   * @param name function name /<br>название функции
   */
  static isFunction (name: string): boolean {
    return name in this.functions
  }

  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли класс в списке по его имени.
   * @param name class name /<br>название класса
   */
  static isClass (name: string): boolean {
    return name in this.classes
  }

  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли компонент в списке по его имени.
   * @param name component name /<br>название компонента
   */
  static isComponent (name: string): boolean {
    return name in this.components
  }

  /**
   * Returns a list of connected components.<br>
   * Возвращает список подключенных компонентов.
   */
  static getComponentList (): Record<string, any> {
    return this.components
  }

  /**
   * Returns a list of global projects.<br>
   * Возвращает список глобальных проектов.
   */
  static getComponentGlobal (): MutationProject {
    if (KEY_GLOBAL_PROJECT in window) {
      return window[KEY_GLOBAL_PROJECT] as MutationProject
    }

    return {}
  }

  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem (name: string): MutationProjectItem | undefined {
    if (KEY_GLOBAL_PROJECT in window) {
      return (window[KEY_GLOBAL_PROJECT] as MutationProject)?.[name] ?? undefined
    }

    return undefined
  }

  /**
   * Returns connected Vue components by their name.<br>
   * Возвращает подключенные компоненты Vue по их имени.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentVue (name: string): any | undefined {
    if (name in this.components) {
      return this.components[name]
    }

    return undefined
  }

  /**
   * Returns an instance of the element.<br>
   * Возвращает экземпляр элемента.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentItem (name: string): any | undefined {
    if (name in this.compItems) {
      return this.compItems[name].item
    }

    return undefined
  }

  /**
   * Adds a new function.<br>
   * Добавляет новую функцию.
   * @param name function name /<br>название функции
   * @param item new function /<br>новая функция
   */
  static addFunction (name: string, item: any): void {
    if (!this.isFunction(name)) {
      this.functions[name] = item
    }
  }

  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass (name: string, item: any): void {
    if (!this.isClass(name)) {
      this.classes[name] = item
    }
  }

  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent (name: string, component: any): void {
    if (!this.isComponent(name)) {
      this.components[name] = component
    }
  }

  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList (functions: Record<string, any>): void {
    forEach(functions, (item, name) => {
      this.addFunction(name, item)
    })
  }

  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList (classes: Record<string, any>): void {
    forEach(classes, (item, name) => {
      this.addClass(name, item)
    })
  }

  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList (components: Record<string, any>): void {
    forEach(components, (component, name) => {
      this.addComponent(name, component)
    })
  }

  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent (
    name: string,
    item: any,
    callback: MutationComponentCallback
  ): MutationComponentProps | undefined {
    this.compItems[name] = {
      item,
      callback
    }

    if (name in this.compCaching) {
      const prop = this.compCaching[name]
      delete this.compCaching[name]

      return prop
    }

    return undefined
  }

  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp (name: string, props: MutationComponentProps): void {
    if (name in this.compItems) {
      this.compItems[name].callback(props)
    } else {
      this.compCaching[name] = props
    }
  }

  /**
   * Removal of the component from the list.<br>
   * Удаление компонента из списка.
   * @param name component identifier /<br>идентификатор компонента
   */
  static removeComponent (name: string): void {
    if (name in this.compItems) {
      delete this.compItems[name]
    }
  }
}
