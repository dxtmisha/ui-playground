import { type VNode } from 'vue';
import { type RawChildren, type RawSlots } from '../../types/ref.ts';
import { type ConstrComponent, type ConstrComponentMod, type ConstrItem } from '../../types/constructor.ts';
/**
 * Class for working with connected components.<br>
 * Класс для работы с подключенными компонентами.
 */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    protected readonly components: COMP;
    protected readonly modification?: ConstrComponentMod<P> | undefined;
    /**
     * Constructor
     * @param components list of connected components /<br>список подключенных компонентов
     * @param modification data for modification /<br>данные для модификации
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Check the presence of the component.<br>
     * Проверить наличие компонента.
     * @param name name of the component /<br>названия компонента
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Getting the object of the component.<br>
     * Получение объекта компонента.
     * @param name name of the component /<br>названия компонента
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Returns the modified input data of the connected components.<br>
     * Возвращает модифицированные входные данные у подключенных компонентов.
     * @param index the name of this /<br>название данного
     * @param props basic data /<br>базовые данные
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /**
     * Rendering a component by its name and returning an array with one component.<br>
     * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
     * @param name name of the component /<br>названия компонента
     * @param props property of the component /<br>свойство компонента
     * @param children sub-elements of the component /<br>под элементы компонента
     * @param index the name of the key /<br>названия ключа
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Rendering a component by its name.<br>
     * Рендеринг компонента по его имени.
     * @param name name of the component /<br>названия компонента
     * @param props property of the component /<br>свойство компонента
     * @param children sub-elements of the component /<br>под элементы компонента
     * @param index the name of the key /<br>названия ключа
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
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
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}
