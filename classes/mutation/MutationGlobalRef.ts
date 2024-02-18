import { createApp } from 'vue'
import { createRouter, type Router, type RouterOptions } from 'vue-router'
import { createStore, Store, StoreOptions } from 'vuex'
import { forEach, isFilled } from '../../functions/data'
import { toCamelCaseFirst } from '../../functions/string'

import { Translate } from '../Translate'
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
   * @param init function for additional object management /<br>функция для дополнительного управления объектом
   * @param translate list of text translation keys /<br>список ключей текстовых переводов
   */
  static addComponent (
    name: string,
    app: any,
    router?: RouterOptions,
    store?: StoreOptions<any>,
    init?: MutationProjectItem['init'],
    translate?: MutationProjectItem['translate']
  ): void {
    const global = window as any
    const item: MutationProjectItem = {
      item: app,
      router,
      store,
      init,
      translate
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
      if (isFilled(item?.translate)) {
        Translate.add(item.translate).then(() => this.createAppItem(name, item))
      } else {
        this.createAppItem(name, item)
      }
    }
  }

  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  private static createAppItem (
    name: string,
    item: MutationProjectItem
  ): void {
    const app = createApp(item.item)

    if (item?.router) {
      app.use(this.createRouter(item.router as RouterOptions))
    }

    if (item?.store) {
      app.use(this.createStore(item.store as StoreOptions<any>))
    }

    if (item?.init) {
      item.init(app)
    }

    forEach(MutationGlobal.getComponentList(), (component, name) => app.component(name, component))

    app.mount(`*[data-app="${name}"]`)
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
