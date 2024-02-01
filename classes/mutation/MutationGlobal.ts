import { forEach } from '../../functions/data.ts'

/**
 * Class for working with global variables.<br>
 * Класс для работы с глобальными переменными.
 */
export class MutationGlobal {
  static readonly functions: Record<string, any> = {}
  static readonly classes: Record<string, any> = {}
  static readonly components: Record<string, any> = {}

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
}
