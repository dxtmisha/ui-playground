import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage a local storage.<br>
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 * @param cache cache time /<br>время кэширования
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
