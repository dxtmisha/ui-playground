import { type Ref, type UnwrapRef } from 'vue';
import { type CookieOptions } from '../classes/Cookie';
/**
 * Creates a reactive variable to manage cookies.<br>
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name /<br>название cookie
 * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
 * @param options additional parameters /<br>дополнительные параметры
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<UnwrapRef<T> | string | undefined>;
