import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * Class for cleaning all empty entries for clothing the array.<br>
 * Класс для очистки всех пустых записей для облечения массива.
 */
export declare class PropertiesToNone extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "900-none";
    /**
     * Removes all empty entries from the data.<br>
     * Удаляет у данных всех пустых записей.
     */
    protected init(): void;
}
