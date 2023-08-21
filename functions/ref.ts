import { isRef, type Ref, ref } from 'vue'

import {
  type RefOrNormalType,
  type RefType
} from '../types/ref.ts'

/**
 * You return the values of the ref variable or the variable itself if it is not reactive.<br>
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value /<br>реактивная переменная или обычное значение
 */
export function getRef<T> (item: RefOrNormalType<T>): T {
  return isRef(item) ? item.value : item
}

/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.<br>
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export function toRefItem<T> (item: RefOrNormalType<T>): RefType<T> {
  return isRef(item) ? item : ref<T>(item) as Ref<T>
}