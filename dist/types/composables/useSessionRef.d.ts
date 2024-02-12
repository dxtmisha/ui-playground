import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage session storage.<br>
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name /<br>название значения
 * @param defaultValue default value /<br>значение по умолчанию
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
