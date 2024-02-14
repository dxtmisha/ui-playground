import { PropertiesToAbstract } from './PropertiesToAbstract';
/**
 * A class for transforming components.<br>
 * Класс для преобразования состояния.
 */
export declare class PropertiesToState extends PropertiesToAbstract {
    protected readonly FILE_CACHE = "032-state";
    protected init(): void;
    /**
     * Name transformation for the state type.<br>
     * Преобразование имени для типа state.
     * @param name base property name /<br>базовое название свойства
     * @param item current element /<br>текущий элемент
     * @param parents current element /<br>текущий элемент
     */
    private getName;
}
