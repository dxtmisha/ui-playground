import { createApp } from 'vue'
import { createRouter, type Router, type RouterOptions } from 'vue-router'
import { createStore, Store, StoreOptions } from 'vuex'
import { forEach } from '../../functions/data'
import { toCamelCaseFirst } from '../../functions/string'

import { MutationGlobal } from './MutationGlobal'

import { KEY_GLOBAL_PROJECT, type MutationProjectItem } from '../../types/mutation'

/**
 * Class for working with global variables (Ref).<br>
 * Класс для работы с глобальными переменными (Ref).
 */
export class MutationGlobalRef {
  /**
   * Adding a new component or project to the cache.<br>
   * Добавление в кеш нового компонента или проекта.
   * @param name component name /<br>название компонента
   * @param app project object /<br>объект проекта
   * @param router data for Router /<br>данные для Router
   * @param store data for Store /<br>данные для Store
   */
  static addComponent (
    name: string,
    app: any,
    router?: RouterOptions,
    store?: StoreOptions<any>
  ): void {
    const global = window as any
    const item: MutationProjectItem = { item: app }

    if (router) {
      item.router = router
    }

    if (store) {
      item.store = store
    }

    if (KEY_GLOBAL_PROJECT in global) {
      global[KEY_GLOBAL_PROJECT][name] = item
    } else {
      global[KEY_GLOBAL_PROJECT] = {
        [name]: item
      }
    }
  }

  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent (name: string): void {
    const item = MutationGlobal.getComponentGlobalItem(name)

    if (item) {
      MutationGlobal.addComponent(
        toCamelCaseFirst(name.replace(/\//g, '-')),
        item.item
      )
    }
  }

  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp (name: string): void {
    const item = MutationGlobal.getComponentGlobalItem(name)

    if (item) {
      const app = createApp(item.item)

      if (item?.router) {
        app.use(this.createRouter(item.router as RouterOptions))
      }

      if (item?.store) {
        app.use(this.createStore(item.store as StoreOptions<any>))
      }

      forEach(MutationGlobal.getComponentList(), (component, name) => {
        app.component(name, component)
      })

      app.mount(`*[data-app="${name}"]`)
    }
  }

  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  private static createRouter (router: RouterOptions): Router {
    return createRouter(router)
  }

  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  private static createStore (store: StoreOptions<any>): Store<any> {
    return createStore(store)
  }
}
