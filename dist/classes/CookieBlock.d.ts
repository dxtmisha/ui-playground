import { DataStorage } from './DataStorage.ts';
/**
 * Class for changing cookie access status.<br>
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlock {
    static storage: DataStorage<boolean>;
    /**
     * Obtaining status.<br>
     * Получение статуса.
     */
    static get(): boolean;
    /**
     * Changing status.<br>
     * Изменение статуса.
     * @param value value to be changed /<br>значение, на которое будет изменен
     */
    static set(value: boolean): void;
}
