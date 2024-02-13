import { type ComputedRef, type Ref, type VNode } from 'vue';
import { type RawChildren, type RawSlots, type RefOrNormal } from '../types/ref';
import { type ConstrItem } from '../types/constructor';
/**
 * You return the values of the ref variable or the variable itself if it is not reactive.<br>
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value /<br>реактивная переменная или обычное значение
 */
export declare function getRef<T>(item: RefOrNormal<T>): T;
/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export declare function getBindRef<T, R extends ConstrItem>(value: Ref<T | R> | undefined, nameExtra?: RefOrNormal<ConstrItem> | string, name?: string): ComputedRef<R>;
/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.<br>
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
/**
 * Getting cached, immutable data.<br>
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param children sub-elements of the component /<br>под элементы компонента
 * @param index the name of the key /<br>названия ключа
 */
export declare function render<T extends ConstrItem>(name: string, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
