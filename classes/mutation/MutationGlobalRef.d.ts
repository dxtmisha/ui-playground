import { type RouterOptions } from 'vue-router';
import { StoreOptions } from 'vuex';
/**
 * Class for working with global variables (Ref).<br>
 * Класс для работы с глобальными переменными (Ref).
 */
export declare class MutationGlobalRef {
    /**
     * Adding a new component or project to the cache.<br>
     * Добавление в кеш нового компонента или проекта.
     * @param name component name /<br>название компонента
     * @param app project object /<br>объект проекта
     * @param router data for Router /<br>данные для Router
     * @param store data for Store /<br>данные для Store
     */
    static addComponent(name: string, app: any, router?: RouterOptions, store?: StoreOptions<any>): void;
    /**
     * Creates a new component by name.<br>
     * Создает новый компонент по названию.
     * @param name component name /<br>название компонента
     */
    static createComponent(name: string): void;
    /**
     * Creating a project for Vue.<br>
     * Создание проекта для Vue.
     * @param name project name /<br>название проекта
     */
    static createApp(name: string): void;
    /**
     * Creates data for Router.<br>
     * Создает данные для Router.
     * @param router data for Router /<br>данные для Router
     */
    private static createRouter;
    /**
     * Creates data for Store.<br>
     * Создает данные для Store.
     * @param store store data /<br>данные store
     */
    private static createStore;
}
