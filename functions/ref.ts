import { computed, type ComputedRef, h, isRef, type Ref, ref, type VNode } from 'vue'
import { getBind, getIndex } from './render.ts'

import {
  type RawChildren,
  type RawSlots,
  type RefOrNormal
} from '../types/ref.ts'
import { type ConstrItem } from '../types/constructor.ts'

/**
 * You return the values of the ref variable or the variable itself if it is not reactive.<br>
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value /<br>реактивная переменная или обычное значение
 */
export function getRef<T> (item: RefOrNormal<T>): T {
  return isRef(item) ? item.value : item
}

/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export function getBindRef<T, R extends ConstrItem> (
  value: Ref<T | R> | undefined,
  nameExtra: RefOrNormal<ConstrItem> | string = {},
  name = 'value'
): ComputedRef<R> {
  return computed(() => getBind<T, R>(value?.value, getRef(nameExtra), name))
}

/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.<br>
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export function toRefItem<T> (item: RefOrNormal<T>): Ref<T> {
  return isRef(item) ? item : ref<T>(item) as Ref<T>
}

/**
 * Getting cached, immutable data.<br>
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param children sub-elements of the component /<br>под элементы компонента
 * @param index the name of the key /<br>названия ключа
 */
export function render<T extends ConstrItem> (
  name: string,
  props?: T,
  children?: RawChildren | RawSlots,
  index?: string
): VNode {
  const code = getIndex(name, props, index)

  return h(name, { key: code, ...props }, children)
}
