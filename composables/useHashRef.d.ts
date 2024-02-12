import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage the hash.<br>
 * Создает реактивную переменную для управления хэшем.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): Ref<any>;
