import { type ConstrItem } from '../types/constructor';
/**
 * Returns the name of the class from the property.<br>
 * Возвращает название класса из свойства.
 * @param props property of the component /<br>свойство компонента
 */
export declare function getClassName<T extends ConstrItem>(props?: T): string | undefined;
/**
 * Returns or generates a new element.<br>
 * Возвращает или генерирует новый элемент.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param index the name of the key /<br>названия ключа
 */
export declare function getIndex<T extends ConstrItem>(name: string, props?: T, index?: string): string;
/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export declare function getBind<T, R extends ConstrItem>(value: T | R | undefined, nameExtra?: ConstrItem | string, name?: string): R;
