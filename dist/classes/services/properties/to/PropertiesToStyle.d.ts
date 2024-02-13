import { PropertiesToAbstract } from './PropertiesToAbstract';
export declare const KEY_CUSTOM = "custom";
/**
 * A class for working with properties that support additional values.<br>
 * Класс для работы со свойствами с поддержкой дополнительных значений.
 */
export declare class PropertiesToStyle extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "016-style";
    /**
     * Handling a style record.<br>
     * Обработка записи стиля.
     */
    protected init(): void;
}
